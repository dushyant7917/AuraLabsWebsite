import { useCallback, useEffect, useState } from "react";

// Whole seconds remaining until `start(n)`'s deadline; 0 when idle or finished.
export function useCountdown() {
  const [endsAt, setEndsAt] = useState(0);
  const [now, setNow] = useState(0);

  useEffect(() => {
    if (!endsAt) return;
    const id = setInterval(() => {
      const t = Date.now();
      setNow(t);
      if (t >= endsAt) clearInterval(id);
    }, 250);
    return () => clearInterval(id);
  }, [endsAt]);

  const start = useCallback((seconds: number) => {
    const t = Date.now();
    setNow(t);
    setEndsAt(t + seconds * 1000);
  }, []);

  return { seconds: endsAt ? Math.max(0, Math.ceil((endsAt - now) / 1000)) : 0, start };
}
