export default function AuraBackdrop() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-ink">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_55%_at_50%_-10%,rgba(255,255,255,0.04),transparent)]" />
      <div className="absolute right-[-10%] top-[-10%] h-[30rem] w-[30rem] rounded-full bg-gold/6 blur-[160px]" />
      <div className="absolute left-[-15%] bottom-[-15%] h-[26rem] w-[26rem] rounded-full bg-gold-dark/5 blur-[160px]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_90%_70%_at_50%_35%,transparent_30%,rgba(0,0,0,0.75)_100%)]" />
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />
    </div>
  );
}
