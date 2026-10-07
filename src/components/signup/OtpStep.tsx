import { useState, type FormEvent } from "react";
import { inputBox, linkButton, primaryButton } from "./styles";
import type { SignupCopy } from "./types";

type Props = {
  fullPhone: string;
  otpLength: number;
  resendSeconds: number;
  copy: SignupCopy;
  loading: boolean;
  error: string | null;
  onVerify: (otp: string) => void;
  onResend: () => void;
  onChangeNumber: () => void;
};

export default function OtpStep({
  fullPhone,
  otpLength,
  resendSeconds,
  copy,
  loading,
  error,
  onVerify,
  onResend,
  onChangeNumber,
}: Props) {
  const [otp, setOtp] = useState("");
  const valid = otp.length === otpLength;
  const canResend = resendSeconds === 0 && !loading;

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (valid && !loading) onVerify(otp);
  }

  function handleResend() {
    setOtp("");
    onResend();
  }

  return (
    <form onSubmit={handleSubmit} className="text-center">
      <h2 className="font-display text-2xl font-semibold">{copy.otpTitle}</h2>
      <p className="mt-2 text-sm text-white/60">{copy.otpSubtitle(fullPhone)}</p>

      <input
        type="text"
        inputMode="numeric"
        autoComplete="one-time-code"
        autoFocus
        maxLength={otpLength}
        value={otp}
        placeholder={copy.otpPlaceholder}
        onChange={(e) => setOtp(e.target.value.replace(/\D/g, "").slice(0, otpLength))}
        className={`${inputBox} mt-8 text-center text-xl tracking-[0.5em]`}
      />

      {error && <p className="mt-4 text-sm text-red-400">{error}</p>}

      <button type="submit" disabled={!valid || loading} className={`${primaryButton} mt-6`}>
        {loading ? copy.verifying : copy.verify}
      </button>

      <div className="mt-5 flex items-center justify-between gap-4">
        <button type="button" onClick={onChangeNumber} disabled={loading} className={linkButton}>
          {copy.changeNumber}
        </button>
        <button type="button" onClick={handleResend} disabled={!canResend} className={linkButton}>
          {resendSeconds > 0 ? copy.resendIn(resendSeconds) : copy.resendOtp}
        </button>
      </div>
    </form>
  );
}
