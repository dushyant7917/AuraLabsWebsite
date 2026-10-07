import { useState, type FormEvent } from "react";
import { inputBox, primaryButton } from "./styles";
import type { SignupCopy } from "./types";

type Props = {
  email: string;
  countryCode: string;
  phoneLength: number;
  initialPhone: string;
  copy: SignupCopy;
  loading: boolean;
  error: string | null;
  onSubmit: (phone: string) => void;
};

export default function PhoneStep({
  email,
  countryCode,
  phoneLength,
  initialPhone,
  copy,
  loading,
  error,
  onSubmit,
}: Props) {
  const [phone, setPhone] = useState(initialPhone);
  const valid = phone.length === phoneLength;

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (valid && !loading) onSubmit(phone);
  }

  return (
    <form onSubmit={handleSubmit} className="text-center">
      <h2 className="font-display text-2xl font-semibold">{copy.phoneTitle}</h2>
      <p className="mt-2 text-sm break-all text-white/60">{copy.phoneSubtitle(email)}</p>

      <div className="mt-8 flex items-center gap-3">
        <span className="shrink-0 rounded-full border border-white/15 bg-white/5 px-4 py-3 text-base text-white/80">
          +{countryCode}
        </span>
        <input
          type="tel"
          inputMode="numeric"
          autoComplete="tel-national"
          autoFocus
          maxLength={phoneLength}
          value={phone}
          placeholder={copy.phonePlaceholder}
          onChange={(e) => setPhone(e.target.value.replace(/\D/g, "").slice(0, phoneLength))}
          className={inputBox}
        />
      </div>

      {error && <p className="mt-4 text-sm text-red-400">{error}</p>}

      <button type="submit" disabled={!valid || loading} className={`${primaryButton} mt-6`}>
        {loading ? copy.sendingOtp : copy.sendOtp}
      </button>
    </form>
  );
}
