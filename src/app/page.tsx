"use client";

import { useEffect, useMemo, useRef, useState } from "react";

type Ring = {
  id: number;
  leftPercent: number;
  topPercent: number;
  collected: boolean;
};

function RingIcon({ size = 36 }: { size?: number }) {
  const stroke = Math.max(3, Math.floor(size * 0.12));
  const r = size / 2 - stroke;
  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} aria-hidden>
      <circle cx={size / 2} cy={size / 2} r={r} fill="#fffb" />
      <circle
        cx={size / 2}
        cy={size / 2}
        r={r}
        fill="none"
        stroke="url(#gold)"
        strokeWidth={stroke}
        strokeLinecap="round"
      />
      <defs>
        <linearGradient id="gold" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#f5c542" />
          <stop offset="50%" stopColor="#ffd774" />
          <stop offset="100%" stopColor="#d7a905" />
        </linearGradient>
      </defs>
    </svg>
  );
}

function Emerald({ label }: { label: string }) {
  return (
    <div className="animate-emerald inline-flex items-center gap-2 rounded-xl px-3 py-2" style={{ boxShadow: "0 0 24px rgba(41,214,127,0.35)" }}>
      <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden>
        <polygon points="12,2 22,9 19,22 5,22 2,9" fill="#29d67f" opacity="0.85" />
        <polygon points="12,2 22,9 12,9" fill="#36f495" opacity="0.9" />
        <polygon points="12,2 2,9 12,9" fill="#22c173" opacity="0.9" />
      </svg>
      <span className="text-sm font-semibold" style={{ color: "#29d67f" }}>{label}</span>
    </div>
  );
}

export default function Home() {
  const [ringCount, setRingCount] = useState(0);
  const [runningKey, setRunningKey] = useState(0);

  const [rings, setRings] = useState<Ring[]>(() => {
    return Array.from({ length: 8 }).map((_, i) => ({
      id: i,
      leftPercent: Math.random() * 80 + 10,
      topPercent: Math.random() * 60 + 15,
      collected: false,
    }));
  });

  useEffect(() => {
    let timeout: number | undefined;
    const onScroll = () => {
      setRunningKey((k) => k + 1);
      window.clearTimeout(timeout);
      timeout = window.setTimeout(() => {
        // cooldown between runs
      }, 300);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const collectRing = (id: number) => {
    setRings((prev) => prev.map((r) => (r.id === id ? { ...r, collected: true } : r)));
    setRingCount((c) => c + 1);
    // respawn after short delay
    setTimeout(() => {
      setRings((prev) => {
        return prev.map((r) =>
          r.id === id
            ? {
                id,
                leftPercent: Math.random() * 80 + 10,
                topPercent: Math.random() * 60 + 15,
                collected: false,
              }
            : r
        );
      });
    }, 900);
  };

  const ringGoalReached = ringCount >= 7;

  return (
    <div className="min-h-screen bg-sonic-gradient text-white">
      {/* Hero */}
      <section className="relative overflow-hidden px-6 sm:px-10 pt-16 pb-24 sm:pt-24 sm:pb-28 speedlines">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col gap-6">
            <div className="inline-flex items-center gap-3">
              <Emerald label={ringGoalReached ? "Chaos Control Unlocked" : "Chaos Energy Charging"} />
              <span className="text-xs sm:text-sm opacity-80">Collect rings to power up</span>
            </div>
            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight" style={{ color: "#e6f2ff", textShadow: "0 4px 30px rgba(30,144,255,0.35)" }}>
              Sonic Vibes AI
            </h1>
            <p className="max-w-2xl text-sm sm:text-base opacity-90">
              "I’m Sonic! And this is Sonic AI — a speedy, ring-powered intelligence that helps you ship at the speed of sound."
            </p>
            <div className="flex items-center gap-4 flex-wrap">
              <button className="cta-button rounded-full px-6 py-3 text-sm sm:text-base font-bold">Join Sonic's Adventure</button>
              <div className="flex items-center gap-2 rounded-full glass px-3 py-2">
                <RingIcon size={20} />
                <span className="text-sm font-semibold">{ringCount} rings</span>
              </div>
            </div>
          </div>
        </div>

        {/* Runner */}
        <div key={runningKey} className="pointer-events-none absolute left-[-12%] bottom-10 sm:bottom-16 w-[80px] h-[80px] sm:w-[110px] sm:h-[110px] animate-runner">
          <div className="w-full h-full rounded-full" style={{ background: "radial-gradient(circle at 40% 40%, #2aa4ff, #0b5bd3)", boxShadow: "0 0 30px rgba(30,144,255,0.8)" }} />
          <div className="absolute -z-10 -right-10 top-1/2 -translate-y-1/2 w-[160px] h-[4px] sm:h-[6px]" style={{ background: "linear-gradient(90deg, rgba(30,144,255,0.85), transparent)" }} />
        </div>

        {/* Clickable Rings in hero */}
        {rings.map((r) => (
          <button
            key={r.id + (r.collected ? "-collected" : "")}
            aria-label="Collect ring"
            onClick={() => !r.collected && collectRing(r.id)}
            className={`absolute animate-ring transition-all duration-300 ${r.collected ? "opacity-0 scale-50" : "opacity-100 scale-100"}`}
            style={{ left: `${r.leftPercent}%`, top: `${r.topPercent}%` }}
          >
            <RingIcon size={36} />
          </button>
        ))}
      </section>

      {/* Gotta Go Fast */}
      <section className="px-6 sm:px-10 py-14">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6" style={{ color: "#bfe3ff" }}>
            Gotta Go Fast — Model Speed Demos
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { title: "Token Turbo", metric: "> 600 tok/s", desc: "Streaming generation at super-sonic rates." },
              { title: "Latency Dash", metric: "~ 80 ms", desc: "Cold starts crushed with speed optimizations." },
              { title: "Search Spin", metric: "x4 faster", desc: "RAG retrieval with ring-buffer caching." },
            ].map((c) => (
              <div key={c.title} className="card p-5 hover:translate-y-[-4px] transition-transform duration-200">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-semibold">{c.title}</span>
                  <div className="inline-flex items-center gap-1">
                    <RingIcon size={18} />
                    <RingIcon size={18} />
                  </div>
                </div>
                <div className="text-2xl font-extrabold" style={{ color: "#7cc7ff" }}>{c.metric}</div>
                <p className="text-sm opacity-80 mt-1">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Eggman Testimonial */}
      <section className="px-6 sm:px-10 pb-12">
        <div className="max-w-6xl mx-auto eggman-card rounded-2xl p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
            <div className="w-14 h-14 rounded-full flex items-center justify-center" style={{ background: "linear-gradient(120deg, #58111a, #d31027)" }}>
              <span className="text-xl" aria-hidden>🦺</span>
            </div>
            <div className="flex-1">
              <p className="text-lg sm:text-xl font-semibold" style={{ color: "#ffd1d7" }}>
                Dr. Robotnik says:
              </p>
              <p className="opacity-90">
                "Infuriatingly efficient. If I had Sonic Vibes AI in my arsenal, I'd have caught that blue nuisance ages ago. Its predictive routing and speed heuristics are almost worthy of my genius. Almost."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Showcase with Gamification */}
      <section className="px-6 sm:px-10 pb-16">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-xl sm:text-2xl font-bold mb-6" style={{ color: "#bfe3ff" }}>Features — Charge them with Rings</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { title: "Chaos Context", body: "Long-context understanding with emerald stability.", charged: ringGoalReached },
              { title: "SpinDash Tools", body: "Tool use and function calling without friction.", charged: ringGoalReached },
              { title: "Ring RAG", body: "Hybrid retrieval with ring-index acceleration.", charged: ringGoalReached },
              { title: "Tails Assist", body: "Agentic plans with safe copiloting.", charged: ringGoalReached },
              { title: "Boss Battle Safety", body: "Guardrails that actually help, not hinder.", charged: ringGoalReached },
              { title: "Green Hill UX", body: "Speedy UI patterns tuned for user delight.", charged: ringGoalReached },
            ].map((f) => (
              <div key={f.title} className={`card p-5 transition-all duration-200 ${f.charged ? "ring-2 ring-[#29d67f]/60" : "hover:ring-1 hover:ring-white/15"}`}>
                <div className="flex items-center justify-between mb-2">
                  <span className="font-semibold">{f.title}</span>
                  {f.charged ? <Emerald label="Powered" /> : <RingIcon size={18} />}
                </div>
                <p className="text-sm opacity-90">{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 sm:px-10 pb-24">
        <div className="max-w-6xl mx-auto text-center">
          <p className="mb-3 opacity-85">Ready to enter Sonic's world?</p>
          <button className="cta-button rounded-full px-7 py-3 text-base font-extrabold">
            Start the Adventure
          </button>
          <div className="mt-4 text-xs opacity-70">
            No movie assets used. Inspired by the Sonic universe aesthetic.
          </div>
        </div>
      </section>
    </div>
  );
}
