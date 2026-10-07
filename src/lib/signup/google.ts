// Google Identity Services helpers (no npm dependency).

const GSI_SRC = "https://accounts.google.com/gsi/client";

type CredentialResponse = { credential: string };

type GoogleAccountsId = {
  initialize: (config: { client_id: string; callback: (response: CredentialResponse) => void }) => void;
  renderButton: (parent: HTMLElement, options: Record<string, unknown>) => void;
};

declare global {
  interface Window {
    google?: { accounts: { id: GoogleAccountsId } };
  }
}

export type GoogleProfile = { email: string; name?: string };

let scriptPromise: Promise<void> | null = null;

export function loadGoogleScript(): Promise<void> {
  if (window.google?.accounts?.id) return Promise.resolve();
  scriptPromise ??= new Promise<void>((resolve, reject) => {
    const script = document.createElement("script");
    script.src = GSI_SRC;
    script.async = true;
    script.onload = () => resolve();
    script.onerror = () => {
      scriptPromise = null;
      script.remove();
      reject(new Error("Failed to load Google sign-in"));
    };
    document.head.appendChild(script);
  });
  return scriptPromise;
}

export function getGoogleId(): GoogleAccountsId {
  if (!window.google?.accounts?.id) throw new Error("Google sign-in not loaded");
  return window.google.accounts.id;
}

// Reads the (already Google-signed) ID token payload. Not a signature check: the token
// comes straight from Google's callback in this browser session.
export function decodeGoogleCredential(credential: string): GoogleProfile | null {
  try {
    const payload = credential.split(".")[1].replace(/-/g, "+").replace(/_/g, "/");
    const bytes = Uint8Array.from(atob(payload), (c) => c.charCodeAt(0));
    const claims = JSON.parse(new TextDecoder().decode(bytes)) as {
      email?: string;
      email_verified?: boolean;
      name?: string;
    };
    if (!claims.email || claims.email_verified === false) return null;
    return { email: claims.email.trim().toLowerCase(), name: claims.name };
  } catch {
    return null;
  }
}
