// Single place to update Sanskaar contact details.
// SANSKAAR_PHONE_DISPLAY is shown on the Contact page; SANSKAAR_WHATSAPP_NUMBER
// is used for the wa.me link (country code + number, digits only, no "+").
export const SANSKAAR_PHONE_DISPLAY = "+91 7090058560";
export const SANSKAAR_PHONE_TEL = "+917090058560";
export const SANSKAAR_WHATSAPP_NUMBER = "917090058560";

export const SANSKAAR_SUPPORT_EMAIL = "contact@byauralabs.com";
export const COMPANY_NAME = "Aura Labs";

// app_name sent to the backend for signup/OTP; must be identical on every call.
export const SANSKAAR_APP_NAME = "SanskaarWebsite";
export const LAST_UPDATED = "October 3, 2026";

export const SANSKAAR_PAGES = [
  { to: "/sanskaar/terms-and-conditions", label: "Terms & Conditions" },
  { to: "/sanskaar/privacy-policy", label: "Privacy Policy" },
  { to: "/sanskaar/refunds-and-cancellation", label: "Refunds & Cancellation" },
  { to: "/sanskaar/shipping-policy", label: "Shipping Policy" },
  { to: "/sanskaar/contact", label: "Contact" },
] as const;
