import { useMemo, useState, type ReactNode } from "react";
import { createSignupApi, SignupError } from "../../lib/signup/api";
import type { GoogleProfile } from "../../lib/signup/google";
import GoogleStep from "./GoogleStep";
import OtpStep from "./OtpStep";
import PhoneStep from "./PhoneStep";
import type { SignupCopy, SignupErrorKey, SignupResult } from "./types";
import { useCountdown } from "./useCountdown";

type Props = {
  appName: string;
  apiBaseUrl?: string;
  googleClientId?: string;
  copy: SignupCopy;
  renderDone: (result: SignupResult) => ReactNode;
  onComplete?: (result: SignupResult) => void;
  // Sent to the backend as-is (no "+"); the UI shows "+{countryCode}".
  countryCode?: string;
  phoneLength?: number;
  otpLength?: number;
  resendSeconds?: number;
  googleLocale?: string;
};

type Step = "google" | "phone" | "otp" | "done";

// Email -> phone OTP -> verify -> create user (skipped if the email already exists).
export default function SignupFlow({
  appName,
  apiBaseUrl,
  googleClientId,
  copy,
  renderDone,
  onComplete,
  countryCode = "91",
  phoneLength = 10,
  otpLength = 4,
  resendSeconds = 30,
  googleLocale,
}: Props) {
  const [step, setStep] = useState<Step>("google");
  const [profile, setProfile] = useState<GoogleProfile | null>(null);
  const [phone, setPhone] = useState("");
  const [result, setResult] = useState<SignupResult | null>(null);
  const [loading, setLoading] = useState(false);
  const [errorKey, setErrorKey] = useState<SignupErrorKey | null>(null);
  const countdown = useCountdown();

  const api = useMemo(
    () => (apiBaseUrl ? createSignupApi({ baseUrl: apiBaseUrl, appName }) : null),
    [apiBaseUrl, appName],
  );

  const error = errorKey ? copy.errors[errorKey] : null;

  if (!api || !googleClientId) {
    return <p className="text-center text-sm text-red-400">{copy.errors.config_missing}</p>;
  }

  function fail(e: unknown) {
    setErrorKey(e instanceof SignupError ? e.code : "unknown");
  }

  async function sendOtp(nextPhone: string, nextStep: Step) {
    if (!api) return;
    setLoading(true);
    setErrorKey(null);
    try {
      await api.sendOtp(countryCode, nextPhone);
      setPhone(nextPhone);
      setStep(nextStep);
      countdown.start(resendSeconds);
    } catch (e) {
      fail(e);
    } finally {
      setLoading(false);
    }
  }

  function finish(next: SignupResult) {
    setResult(next);
    setStep("done");
    onComplete?.(next);
  }

  // Existing users skip the phone/OTP steps entirely.
  async function handleGoogleProfile(p: GoogleProfile) {
    if (!api) return;
    setLoading(true);
    setErrorKey(null);
    try {
      const existing = await api.findUserByEmail(p.email);
      setProfile(p);
      if (existing) finish({ user: existing, isNew: false });
      else setStep("phone");
    } catch (e) {
      fail(e);
    } finally {
      setLoading(false);
    }
  }

  async function verifyAndRegister(otp: string) {
    if (!api || !profile) return;
    setLoading(true);
    setErrorKey(null);
    try {
      await api.verifyOtp(countryCode, phone, otp);
      const user = await api.createUser({ name: profile.name, email: profile.email, countryCode, phone });
      finish({ user, isNew: true });
    } catch (e) {
      fail(e);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="mx-auto w-full max-w-md rounded-3xl border border-white/10 bg-white/3 p-8">
      {step === "google" && (
        <GoogleStep
          clientId={googleClientId}
          locale={googleLocale}
          copy={copy}
          loading={loading}
          error={error}
          onProfile={handleGoogleProfile}
          onError={() => setErrorKey("google_failed")}
        />
      )}

      {step === "phone" && profile && (
        <PhoneStep
          email={profile.email}
          countryCode={countryCode}
          phoneLength={phoneLength}
          initialPhone={phone}
          copy={copy}
          loading={loading}
          error={error}
          onSubmit={(p) => sendOtp(p, "otp")}
        />
      )}

      {step === "otp" && (
        <OtpStep
          fullPhone={`+${countryCode} ${phone}`}
          otpLength={otpLength}
          resendSeconds={countdown.seconds}
          copy={copy}
          loading={loading}
          error={error}
          onVerify={verifyAndRegister}
          onResend={() => sendOtp(phone, "otp")}
          onChangeNumber={() => {
            setErrorKey(null);
            setStep("phone");
          }}
        />
      )}

      {step === "done" && result && renderDone(result)}
    </div>
  );
}
