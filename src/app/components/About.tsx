"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

const pillars = [
  {
    label: "Missão",
    barColor: "bg-eich-blue",
    labelColor: "text-eich-blue",
    text: "Oferecer serviços com qualidade, proporcionando resultados que atendam aos objetivos dos clientes, fazendo com que a satisfação total seja alcançada em todos os níveis.",
  },
  {
    label: "Visão",
    barColor: "bg-eich-red",
    labelColor: "text-eich-red",
    text: "Ser referência no setor, contribuindo para o crescimento do setor automotivo do país, com fundamentos éticos nos valores dos direitos humanísticos e no respeito ao meio ambiente.",
  },
  {
    label: "Valores",
    barColor: "bg-white/30",
    labelColor: "text-white/50",
    text: "Agilidade, confiabilidade, resultados, ética, respeito às pessoas e ao meio ambiente.",
  },
];

export default function About() {
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
    <section id="sobre" ref={sectionRef} className="py-24 bg-eich-black">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Text Column */}
          <div>
            <div className="fade-up">
              <span className="text-eich-blue font-600 uppercase" style={{ fontSize: "13px", letterSpacing: "2px" }}>
                Quem somos
              </span>
              <h2 className="text-4xl sm:text-5xl font-800 text-white mt-3 mb-6">
                Sobre a Eich Serviços
              </h2>
            </div>

            <div className="fade-up">
              <p className="text-eich-muted text-base leading-[1.8] mb-4">
                A Eich Serviços é uma prestadora de serviços de inspeção e
                análise técnica, realizando inspeções de peças, retrabalhos e
                limpeza de peças representando nossos clientes.
              </p>
              <p className="text-eich-muted text-base leading-relaxed mb-10">
                Fundada em 2015, a Eich vem crescendo gradativamente, sendo
                referência em nossa região. Contamos com mais de 100
                profissionais qualificados e certificação{" "}
                <span className="text-eich-blue font-600">ISO 9001:2015</span>.
              </p>
            </div>

            {/* Pillars */}
            <div className="flex flex-col gap-5">
              {pillars.map((pillar, idx) => (
                <div key={idx} className="fade-up flex gap-4 items-start">
                  <div className={`w-1 flex-shrink-0 rounded-full min-h-[60px] ${pillar.barColor}`} />
                  <div>
                    <span className={`font-700 uppercase ${pillar.labelColor}`} style={{ fontSize: "13px", letterSpacing: "2px" }}>
                      {pillar.label}
                    </span>
                    <p className="text-white/80 text-base leading-[1.8] mt-1">
                      {pillar.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image Column — professional treatment */}
          <div className="fade-up order-first lg:order-last">
            <div className="relative rounded-xl overflow-hidden border border-eich-blue/30 shadow-2xl shadow-eich-blue/10">
              {/* The photo */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80&auto=format&fit=crop"
                alt="Equipe Eich em ação"
                className="w-full h-[420px] object-cover"
              />

              {/* Edge fade to blend with dark background */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    "radial-gradient(ellipse 100% 100% at 50% 50%, transparent 45%, rgba(10,10,10,0.6) 75%, rgba(10,10,10,0.95) 100%)",
                }}
              />

              {/* Bottom fade for smooth transition */}
              <div
                className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(to bottom, transparent, rgba(10,10,10,0.85))",
                }}
              />

              {/* Metrics overlay at bottom */}
              <div className="absolute bottom-0 left-0 right-0 p-5 flex gap-4">
                <div className="bg-black/70 backdrop-blur-sm border border-eich-blue/30 rounded-lg px-4 py-3 flex-1 text-center">
                  <div className="text-2xl font-800 text-eich-blue">2015</div>
                  <div className="text-white/60 text-xs mt-0.5">Fundação</div>
                </div>
                <div className="bg-black/70 backdrop-blur-sm border border-eich-red/30 rounded-lg px-4 py-3 flex-1 text-center">
                  <div className="text-2xl font-800 text-eich-red">+100</div>
                  <div className="text-white/60 text-xs mt-0.5">Profissionais</div>
                </div>
                <div className="bg-black/70 backdrop-blur-sm border border-white/20 rounded-lg px-4 py-3 flex-1 text-center">
                  <Image
                    src="/iso-9001.webp"
                    alt="ISO 9001:2015"
                    width={40}
                    height={40}
                    className="w-8 h-8 object-contain mx-auto"
                  />
                  <div className="text-white/60 text-xs mt-0.5">ISO 9001</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
