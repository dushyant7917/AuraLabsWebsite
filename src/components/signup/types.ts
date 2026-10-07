import type { SignupErrorCode, SignupUser } from "../../lib/signup/api";

export type SignupErrorKey = SignupErrorCode | "invalid_phone" | "invalid_otp" | "google_failed" | "config_missing";

// Every user-facing string of the flow, so each app/language supplies its own.
export type SignupCopy = {
  googleTitle: string;
  googleSubtitle: string;
  checkingAccount: string;
  phoneTitle: string;
  phoneSubtitle: (email: string) => string;
  phonePlaceholder: string;
  sendOtp: string;
  sendingOtp: string;
  otpTitle: string;
  otpSubtitle: (fullPhone: string) => string;
  otpPlaceholder: string;
  verify: string;
  verifying: string;
  changeNumber: string;
  resendOtp: string;
  resendIn: (seconds: number) => string;
  errors: Record<SignupErrorKey, string>;
};

export type SignupResult = { user: SignupUser; isNew: boolean };
