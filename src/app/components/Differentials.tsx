"use client";

import { useEffect, useRef } from "react";

const LightningIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1E7FC0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
  </svg>
);

const HandshakeIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1E7FC0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2v4l.586-.586z" />
  </svg>
);

const ClipboardCheckIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1E7FC0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2" />
    <rect x="9" y="3" width="6" height="4" rx="1" />
    <path d="M9 12l2 2 4-4" />
  </svg>
);

const TrendingUpIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1E7FC0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
    <polyline points="17 6 23 6 23 12" />
  </svg>
);

const differentials = [
  {
    Icon: LightningIcon,
    title: "Agilidade",
    description:
      "Mão de obra qualificada com maior agilidade, poupando tempo de deslocamento dos seus colaboradores.",
  },
  {
    Icon: HandshakeIcon,
    title: "Suporte dedicado",
    description:
      "Equipe presente para garantir sua satisfação em todos os serviços prestados.",
  },
  {
    Icon: ClipboardCheckIcon,
    title: "Fácil contratação",
    description:
      "Facilidade e agilidade na contratação, sem burocracia e com processos simplificados.",
  },
  {
    Icon: TrendingUpIcon,
    title: "Expanda seu negócio",
    description:
      "Menos custos com contratações, férias, rescisões e impostos para sua empresa.",
  },
];

export default function Differentials() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".fade-up").forEach((el, i) => {
              setTimeout(() => el.classList.add("visible"), i * 120);
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
    <section ref={sectionRef} className="py-24 bg-eich-dark">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-up">
          <span className="text-eich-blue font-600 uppercase" style={{ fontSize: "13px", letterSpacing: "2px" }}>Diferenciais</span>
          <h2 className="text-4xl sm:text-5xl font-800 text-white mt-3">
            Por que escolher a Eich?
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {differentials.map(({ Icon, title, description }, idx) => (
            <div
              key={idx}
              className="fade-up group flex gap-5 bg-eich-card border border-white/5 rounded-2xl p-5 md:p-7 hover:border-eich-blue/30 hover:shadow-lg hover:shadow-eich-blue/5 transition-all duration-300"
            >
              <div className="w-12 h-12 flex-shrink-0 bg-eich-blue/10 rounded-xl flex items-center justify-center group-hover:bg-eich-blue/20 transition-colors duration-300">
                <Icon />
              </div>
              <div>
                <h3 className="text-lg font-700 text-white mb-2">{title}</h3>
                <p className="text-eich-muted text-base leading-[1.8]">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
