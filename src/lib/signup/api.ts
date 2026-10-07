// Backend client for the phone-OTP signup flow. App-agnostic: the caller decides
// `appName` and base URL. Errors carry a code, never UI text, so any language can map them.

export type SignupErrorCode = "otp_invalid" | "otp_expired" | "otp_not_found" | "network" | "unknown";

export class SignupError extends Error {
  code: SignupErrorCode;

  constructor(code: SignupErrorCode, message?: string) {
    super(message ?? code);
    this.name = "SignupError";
    this.code = code;
  }
}

export type SignupUser = {
  id: string;
  name?: string;
  email?: string;
  country_code?: string;
  phone?: string;
  app_name: string;
};

export type CreateUserInput = {
  name?: string;
  email: string;
  countryCode: string;
  phone: string;
};

type ApiEnvelope<T> = { data?: T; error?: string };

export function createSignupApi({ baseUrl, appName }: { baseUrl: string; appName: string }) {
  const root = baseUrl.replace(/\/+$/, "");

  async function request<T>(path: string, init?: RequestInit): Promise<{ status: number; body: ApiEnvelope<T> }> {
    let res: Response;
    try {
      res = await fetch(`${root}${path}`, {
        ...init,
        headers: { "Content-Type": "application/json", ...init?.headers },
      });
    } catch {
      throw new SignupError("network");
    }
    const body = (await res.json().catch(() => ({}))) as ApiEnvelope<T>;
    return { status: res.status, body };
  }

  return {
    async sendOtp(countryCode: string, phone: string): Promise<void> {
      const { status, body } = await request("/otp/phone", {
        method: "POST",
        body: JSON.stringify({ app_name: appName, country_code: countryCode, phone }),
      });
      if (status !== 201 && status !== 200) throw new SignupError("unknown", body.error);
    },

    // Resolves on a valid OTP; throws SignupError otherwise.
    async verifyOtp(countryCode: string, phone: string, value: string): Promise<void> {
      const { status, body } = await request<{ valid: boolean; message: string }>("/otp/phone/verify", {
        method: "POST",
        body: JSON.stringify({ app_name: appName, country_code: countryCode, phone, value }),
      });
      if (status === 404) throw new SignupError("otp_not_found", body.error);
      if (status !== 200) throw new SignupError("unknown", body.error);
      if (!body.data?.valid) {
        const expired = /expired/i.test(body.data?.message ?? "");
        throw new SignupError(expired ? "otp_expired" : "otp_invalid", body.data?.message);
      }
    },

    // Returns null when no user exists for this email.
    async findUserByEmail(email: string): Promise<SignupUser | null> {
      const query = new URLSearchParams({ app_name: appName, email });
      const { status, body } = await request<SignupUser>(`/users/by-email?${query}`);
      if (status === 404) return null;
      if (status !== 200 || !body.data) throw new SignupError("unknown", body.error);
      return body.data;
    },

    async createUser({ name, email, countryCode, phone }: CreateUserInput): Promise<SignupUser> {
      const { status, body } = await request<SignupUser>("/users", {
        method: "POST",
        body: JSON.stringify({
          app_name: appName,
          name: name || undefined,
          email,
          country_code: countryCode,
          phone,
        }),
      });
      if (status !== 201 || !body.data) throw new SignupError("unknown", body.error);
      return body.data;
    },
  };
}

export type SignupApi = ReturnType<typeof createSignupApi>;
