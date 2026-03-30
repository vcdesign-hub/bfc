import DarkVeil from "./DarkVeil";

export default function HeroDarkVeil() {
  return (
    <div className="absolute inset-0">
      <div className="absolute inset-0 bg-slate-950" />
      <DarkVeil
        hueShift={220}
        noiseIntensity={0.01}
        scanlineIntensity={0}
        speed={0.3}
        scanlineFrequency={0}
        warpAmount={0.03}
        resolutionScale={1}
        className="opacity-80"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/30 via-slate-950/45 to-slate-950/80" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(37,99,235,0.18),transparent_40%)]" />
    </div>
  );
}