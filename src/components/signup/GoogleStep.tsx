import { useEffect, useRef } from "react";
import { decodeGoogleCredential, getGoogleId, loadGoogleScript, type GoogleProfile } from "../../lib/signup/google";
import type { SignupCopy } from "./types";

type Props = {
  clientId: string;
  locale?: string;
  copy: SignupCopy;
  loading: boolean;
  error: string | null;
  onProfile: (profile: GoogleProfile) => void;
  onError: () => void;
};

export default function GoogleStep({ clientId, locale, copy, loading, error, onProfile, onError }: Props) {
  const buttonRef = useRef<HTMLDivElement>(null);
  // Latest callbacks, so the one-time Google init never calls stale closures.
  const handlers = useRef({ onProfile, onError });
  useEffect(() => {
    handlers.current = { onProfile, onError };
  });

  useEffect(() => {
    let cancelled = false;
    loadGoogleScript()
      .then(() => {
        if (cancelled || !buttonRef.current) return;
        const google = getGoogleId();
        google.initialize({
          client_id: clientId,
          callback: ({ credential }) => {
            const profile = decodeGoogleCredential(credential);
            if (profile) handlers.current.onProfile(profile);
            else handlers.current.onError();
          },
        });
        google.renderButton(buttonRef.current, {
          theme: "outline",
          size: "large",
          shape: "pill",
          text: "continue_with",
          width: 260,
          ...(locale ? { locale } : {}),
        });
      })
      .catch(() => {
        if (!cancelled) handlers.current.onError();
      });
    return () => {
      cancelled = true;
    };
  }, [clientId, locale]);

  return (
    <div className="text-center">
      <h2 className="font-display text-2xl font-semibold">{copy.googleTitle}</h2>
      <p className="mt-2 text-sm text-white/60">{copy.googleSubtitle}</p>
      <div className="mt-10 mb-6 flex justify-center">
        <div
          ref={buttonRef}
          className={`min-h-10 scale-125 rounded-full shadow-[0_10px_30px_-5px_rgba(0,0,0,0.8),0_0_30px_-5px_rgba(255,215,0,0.45)] ${loading ? "pointer-events-none opacity-50" : ""}`}
        />
      </div>
      {loading && <p className="mt-4 text-sm text-white/60">{copy.checkingAccount}</p>}
      {error && <p className="mt-4 text-sm text-red-400">{error}</p>}
    </div>
  );
}
