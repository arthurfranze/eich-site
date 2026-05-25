"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

export default function QualityPolicy() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".fade-up").forEach((el, i) => {
              setTimeout(() => el.classList.add("visible"), i * 150);
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-24 bg-eich-blue relative overflow-hidden"
    >
      {/* Diagonal line texture — premium pattern */}
      <div
        className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, white 0px, white 1px, transparent 1px, transparent 12px)",
        }}
      />

      {/* Dot grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 2px 2px, white 1.5px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* Subtle radial light at center */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_80%_60%_at_50%_50%,rgba(255,255,255,0.06),transparent)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Text */}
          <div className="flex-1 fade-up text-center lg:text-left">
            <span className="text-white/70 font-600 uppercase" style={{ fontSize: "13px", letterSpacing: "2px" }}>
              Compromisso com a excelência
            </span>
            <h2 className="text-3xl sm:text-4xl font-800 text-white mt-4 mb-8">
              Política do Sistema de Gestão da Qualidade
            </h2>

            <ul className="flex flex-col gap-6">
              {[
                "Atender e satisfazer os requisitos dos nossos clientes e partes interessadas envolvidas",
                "Prover estrutura para o desenvolvimento contínuo do nosso Sistema de Gestão da Qualidade e seus processos",
              ].map((item, i) => (
                <li key={i} className="flex flex-col lg:flex-row items-center lg:items-start gap-3 lg:gap-4 text-center lg:text-left">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-white/20 flex items-center justify-center border border-white/30">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <p className="text-white/90 text-lg leading-[1.8]">
                    {item}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          {/* ISO Badge */}
          <div className="fade-up flex-shrink-0">
            <div className="w-48 h-48 sm:w-56 sm:h-56 bg-white rounded-full flex items-center justify-center shadow-2xl shadow-black/30 p-4 ring-4 ring-white/20">
              <Image
                src="/iso-9001.webp"
                alt="ISO 9001:2015 Certified"
                width={180}
                height={180}
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
