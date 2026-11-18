import { useEffect, useState } from "react";

type Twinkle = {
  id: number;
  kind: "star" | "aura";
  left: number;
  top: number;
  size: number;
  duration: number;
};

const MAX_ACTIVE = 100;
let nextId = 0;

function createTwinkle(): Twinkle {
  const isStar = Math.random() < 0.75;
  return {
    id: nextId++,
    kind: isStar ? "star" : "aura",
    left: 3 + Math.random() * 94,
    top: 3 + Math.random() * 94,
    size: isStar ? 10 + Math.random() * 18 : 90 + Math.random() * 130,
    duration: isStar ? 2.5 + Math.random() * 2 : 4 + Math.random() * 2.5,
  };
}

export default function Twinkles() {
  const [items, setItems] = useState<Twinkle[]>([]);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const spawn = () => {
      if (document.hidden) return;
      setItems((prev) => (prev.length >= MAX_ACTIVE ? prev : [...prev, createTwinkle()]));
    };
    spawn();
    const timer = window.setInterval(spawn, 50);
    return () => window.clearInterval(timer);
  }, []);

  const remove = (id: number) => setItems((prev) => prev.filter((t) => t.id !== id));

  return (
    <>
      {items.map((t) => (
        <span
          key={t.id}
          onAnimationEnd={() => remove(t.id)}
          className={t.kind === "star" ? "twinkle-star" : "twinkle-aura"}
          style={{
            left: `${t.left}%`,
            top: `${t.top}%`,
            width: t.size,
            height: t.size,
            animationDuration: `${t.duration}s`,
          }}
        />
      ))}
    </>
  );
}
