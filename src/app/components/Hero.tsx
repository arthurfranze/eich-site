"use client";

import { useEffect, useRef, useState } from "react";
import GearRotator from "./GearRotator";

function useCountUp(target: number, duration = 1500, active = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!active) return;
    let startTime: number | null = null;
    const tick = (ts: number) => {
      if (!startTime) startTime = ts;
      const progress = Math.min((ts - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(tick);
      else setCount(target);
    };
    requestAnimationFrame(tick);
  }, [active, target, duration]);
  return count;
}


export default function Hero() {
  const scrollTo = (id: string) =>
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });

  const [counting, setCounting] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);

  const count10 = useCountUp(10, 1200, counting);
  const count100 = useCountUp(100, 1500, counting);
  const countISO = useCountUp(9001, 1800, counting);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setCounting(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="inicio"
      className="relative min-h-screen bg-[#0A0A0A] overflow-hidden flex items-center"
    >
      {/* Tech grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(30,127,192,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(30,127,192,0.04) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Vignette — corners darker */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 80% at 35% 50%, transparent 50%, rgba(10,10,10,0.7) 100%)",
        }}
      />

      {/* Atmospheric glow — right side, behind stripes */}
      <div
        className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none hidden lg:block"
        style={{
          width: "600px",
          height: "400px",
          background:
            "radial-gradient(ellipse at right center, rgba(30,127,192,0.07) 0%, rgba(224,60,49,0.03) 50%, transparent 75%)",
        }}
      />

      {/* Main layout — 2 columns */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 lg:min-h-screen flex items-center py-28 lg:py-0">
        <div className="w-full grid grid-cols-1 lg:grid-cols-[60%_40%] items-center gap-16 lg:gap-0">

          {/* ── LEFT COLUMN — Content ── */}
          <div className="flex flex-col items-center md:items-start">

            {/* Badge — desktop: ISO cert | mobile: Eich Group */}
            <div
              className="hidden md:inline-flex items-center gap-2 border border-eich-blue/60 bg-eich-blue/10 text-eich-blue px-4 py-2 rounded-full mb-8 backdrop-blur-sm"
              style={{ fontSize: "13px", fontWeight: 600, letterSpacing: "0.5px" }}
            >
              <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              ISO 9001:2015 Certified
            </div>

            {/* Badge mobile — Eich Group */}
            <div
              className="inline-flex md:hidden flex-col items-center gap-2 mb-8"
            >
              {/* Retângulo animado 3 cores */}
              <div className="eich-color-bar" />
              <span
                className="text-white tracking-widest uppercase"
                style={{ fontSize: "13px", fontWeight: 700, letterSpacing: "3px" }}
              >
                Eich Group
              </span>
            </div>

            {/* Title */}
            <h1
              className="text-white font-800 mb-6 text-center md:text-left"
              style={{
                fontSize: "clamp(36px, 5.5vw, 64px)",
                fontWeight: 800,
                lineHeight: 1.2,
                letterSpacing: "-0.5px",
              }}
            >
              {/* Mobile: 3 linhas | Desktop: 2 linhas */}
              <span className="block md:hidden">
                Inspeção e{" "}
                <span className="text-eich-red">Análise</span>
                <br />
                de Peças
                <br />
                Automotivas
              </span>
              <span className="hidden md:block">
                Inspeção e{" "}
                <span className="text-eich-red">Análise</span>
                <br />
                de Peças Automotivas
              </span>
            </h1>

            {/* Subtitle */}
            <p
              className="text-eich-muted mb-10 text-center md:text-left"
              style={{ fontSize: "18px", maxWidth: "480px", lineHeight: 1.7 }}
            >
              Precisão técnica, confiabilidade e qualidade certificada para
              sua cadeia produtiva automotiva.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col md:flex-row gap-4 mb-16">
              <button
                onClick={() => scrollTo("#servicos")}
                className="w-full md:w-auto bg-eich-blue hover:bg-blue-600 text-white font-600 rounded-md transition-all duration-200 hover:shadow-xl hover:shadow-eich-blue/30 hover:-translate-y-0.5"
                style={{ padding: "16px 32px", fontSize: "16px" }}
              >
                Conheça nossos serviços
              </button>
              <button
                onClick={() => scrollTo("#contato")}
                className="w-full md:w-auto border border-white/40 hover:border-white text-white font-600 rounded-md transition-all duration-200 hover:bg-white/5 hover:-translate-y-0.5"
                style={{ padding: "16px 32px", fontSize: "16px" }}
              >
                Fale com um especialista
              </button>
            </div>

            {/* Stats — triângulo invertido no mobile, linha no desktop */}
            <div
              ref={statsRef}
              className="grid grid-cols-2 md:flex md:flex-row md:divide-x divide-white/10 w-full gap-y-5 md:gap-y-0"
            >
              {/* +10 anos */}
              <div className="flex flex-col items-center md:items-start md:pr-10">
                <span
                  className="text-white tabular-nums text-[32px] md:text-[48px]"
                  style={{ fontWeight: 800, lineHeight: 1 }}
                >
                  +{count10}
                </span>
                <span className="text-eich-muted mt-1.5 text-center md:text-left" style={{ fontSize: "13px", letterSpacing: "1px" }}>
                  anos de experiência
                </span>
              </div>

              {/* +100 clientes */}
              <div className="flex flex-col items-center md:items-start md:px-10">
                <span
                  className="text-eich-blue tabular-nums text-[32px] md:text-[48px]"
                  style={{ fontWeight: 800, lineHeight: 1 }}
                >
                  +{count100}
                </span>
                <span className="text-eich-muted mt-1.5 text-center md:text-left" style={{ fontSize: "13px", letterSpacing: "1px" }}>
                  clientes atendidos
                </span>
              </div>

              {/* ISO 9001 — ponta do triângulo: span 2 colunas, centralizado, maior */}
              <div className="col-span-2 md:col-span-1 flex flex-col items-center md:items-start md:pl-10
                              border-t border-white/10 md:border-t-0 pt-4 md:pt-0">
                <span
                  className="text-white tabular-nums text-[38px] md:text-[48px]"
                  style={{ fontWeight: 800, lineHeight: 1 }}
                >
                  ISO {countISO}
                </span>
                <span className="text-eich-muted mt-1.5 text-center md:text-left" style={{ fontSize: "13px", letterSpacing: "1px" }}>
                  certificado
                </span>
              </div>
            </div>
          </div>

          {/* ── RIGHT COLUMN — Gear Rotator ── */}
          <div className="hidden lg:flex items-center justify-center">
            <GearRotator />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-0 right-0 z-20 flex flex-col items-center gap-2 animate-bounce pointer-events-none">
        <span className="text-white/30" style={{ fontSize: "12px" }}>
          Role para baixo
        </span>
        <svg className="w-5 h-5 text-white/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}
