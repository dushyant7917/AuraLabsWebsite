type Fbq = {
  (...args: unknown[]): void;
  callMethod?: (...args: unknown[]) => void;
  queue: unknown[][];
  push: Fbq;
  loaded: boolean;
  version: string;
};

declare global {
  interface Window {
    fbq?: Fbq;
    _fbq?: Fbq;
  }
}

let initialised = false;

// Standard Meta Pixel base code, loaded lazily. No-op without a pixel ID.
export function initMetaPixel(pixelId?: string) {
  if (!pixelId || initialised || typeof window === "undefined") return;
  initialised = true;

  if (!window.fbq) {
    const fbq = function (...args: unknown[]) {
      if (fbq.callMethod) fbq.callMethod(...args);
      else fbq.queue.push(args);
    } as Fbq;
    fbq.push = fbq;
    fbq.loaded = true;
    fbq.version = "2.0";
    fbq.queue = [];
    window.fbq = fbq;
    window._fbq = fbq;

    const script = document.createElement("script");
    script.async = true;
    script.src = "https://connect.facebook.net/en_US/fbevents.js";
    document.head.appendChild(script);
  }

  window.fbq!("init", pixelId);
  window.fbq!("track", "PageView");
}

// Standard "sign up" event. Safe no-op if the pixel isn't loaded.
export function trackCompleteRegistration() {
  window.fbq?.("track", "CompleteRegistration");
}
