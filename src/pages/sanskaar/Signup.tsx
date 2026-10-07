import { useEffect } from "react";
import SanskaarLayout from "../../components/sanskaar/SanskaarLayout";
import {
  SANSKAAR_APP_NAME,
  SANSKAAR_WHATSAPP_NUMBER,
} from "../../components/sanskaar/config";
import SignupFlow from "../../components/signup/SignupFlow";
import { primaryButton } from "../../components/signup/styles";
import { initMetaPixel, trackCompleteRegistration } from "../../lib/metaPixel";
import { sanskaarSignupCopy } from "./signupCopy";

export default function SanskaarSignup() {
  useEffect(() => {
    initMetaPixel(import.meta.env.VITE_META_PIXEL_ID);
  }, []);

  return (
    <SanskaarLayout title="साइन अप करें" showLastUpdated={false} showHeader={false} showFooter={false} centerTitle>
      <SignupFlow
        appName={SANSKAAR_APP_NAME}
        apiBaseUrl={import.meta.env.VITE_API_BASE_URL}
        googleClientId={import.meta.env.GOOGLE_CLIENT_ID}
        googleLocale="hi"
        copy={sanskaarSignupCopy}
        onComplete={(result) => {
          // Existing users (isNew: false) are not a new sign-up.
          if (result.isNew) trackCompleteRegistration();
        }}
        renderDone={() => (
          <div className="text-center">
            <div className="text-4xl">🙏</div>
            <h2 className="mt-4 font-display text-2xl font-semibold">
              <span className="text-gradient">धन्यवाद!</span>
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-white/60">
              जल्द ही ऐप का लिंक आपके WhatsApp नंबर पर भेज दिया जाएगा।
            </p>
            <p className="mt-6 text-sm leading-relaxed text-white/60">
              किसी भी प्रश्न के लिए आप हमें WhatsApp पर संदेश भेज सकते हैं।
            </p>
            <a
              href={`https://wa.me/${SANSKAAR_WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noreferrer"
              className={`${primaryButton} mt-6 inline-block`}
            >
              WhatsApp पर संदेश भेजें
            </a>
          </div>
        )}
      />
    </SanskaarLayout>
  );
}
