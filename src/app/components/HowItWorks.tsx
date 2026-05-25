"use client";

import { useEffect, useRef } from "react";

const ChatIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#1E7FC0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
    <path d="M8 10h8M8 14h5" />
  </svg>
);

const DocIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#1E7FC0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
    <polyline points="14 2 14 8 20 8" />
    <line x1="9" y1="13" x2="15" y2="13" />
    <line x1="9" y1="17" x2="13" y2="17" />
  </svg>
);

const WrenchIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#1E7FC0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" />
  </svg>
);

const CheckCircleIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#1E7FC0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
    <polyline points="22 4 12 14.01 9 11.01" />
  </svg>
);

const steps = [
  {
    Icon: ChatIcon,
    number: "01",
    title: "Contato",
    description: "Você nos conta sua necessidade e avaliamos a melhor solução para o seu caso.",
  },
  {
    Icon: DocIcon,
    number: "02",
    title: "Proposta",
    description: "Enviamos uma proposta personalizada e detalhada para o seu caso específico.",
  },
  {
    Icon: WrenchIcon,
    number: "03",
    title: "Execução",
    description: "Nossa equipe qualificada realiza o serviço com precisão e total comprometimento.",
  },
  {
    Icon: CheckCircleIcon,
    number: "04",
    title: "Entrega",
    description: "Relatório completo e garantia de qualidade certificada em cada serviço entregue.",
  },
];

export default function HowItWorks() {
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
    <section id="como-funciona" ref={sectionRef} className="py-24 bg-eich-black">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-up">
          <span className="text-eich-blue font-600 uppercase" style={{ fontSize: "13px", letterSpacing: "2px" }}>Processo</span>
          <h2 className="text-4xl sm:text-5xl font-800 text-white mt-3 mb-4">
            Como Funciona
          </h2>
          <p className="text-eich-muted text-lg">
            Processo simples, resultado extraordinário
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connector line desktop — horizontal */}
          <div className="hidden lg:block absolute top-10 left-[12.5%] right-[12.5%] h-px border-t-2 border-dashed border-eich-blue/25 z-0" />
          {/* Connector line mobile — vertical */}
          <div className="block md:hidden absolute top-10 bottom-10 left-1/2 -translate-x-1/2 border-l-2 border-dashed border-eich-blue/25 z-0" />

          {steps.map(({ Icon, number, title, description }, idx) => (
            <div key={idx} className="fade-up relative z-10 flex flex-col items-center text-center">
              <div className="w-20 h-20 rounded-full bg-eich-card border-2 border-eich-blue/40 flex flex-col items-center justify-center mb-6 shadow-lg shadow-eich-blue/10">
                <span className="text-eich-blue text-[10px] font-700 leading-none mb-1">{number}</span>
                <Icon />
              </div>
              <h3 className="text-xl font-700 text-white mb-3">{title}</h3>
              <p className="text-eich-muted text-base leading-[1.8]">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
