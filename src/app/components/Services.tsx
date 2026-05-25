"use client";

import { useEffect, useRef } from "react";

const SearchIcon = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#1E7FC0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="10.5" cy="10.5" r="6.5" />
    <path d="M15.5 15.5L20 20" />
    <path d="M8 10.5h5M10.5 8v5" />
  </svg>
);

const ClipboardIcon = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#E03C31" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2" />
    <rect x="9" y="3" width="6" height="4" rx="1" />
    <path d="M9 12l2 2 4-4" />
    <path d="M9 17h4" />
  </svg>
);

const GearIcon = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#1E7FC0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="3" />
    <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
  </svg>
);

const services = [
  {
    Icon: SearchIcon,
    iconBg: "bg-eich-blue/10 group-hover:bg-eich-blue/20",
    title: "Inspeção de Qualidade",
    description:
      "Realizamos inspeções 100% dimensional e visual das peças, garantindo que os produtos estejam dentro das especificações do cliente. Incluímos inspeção de recebimento, inspeção no processo e retrabalho quando necessário.",
    highlights: ["Inspeção 100%", "Dimensional e Visual", "Retrabalho incluso"],
    ctaColor: "text-eich-blue hover:text-blue-400",
  },
  {
    Icon: ClipboardIcon,
    iconBg: "bg-eich-red/10 group-hover:bg-eich-red/20",
    title: "GP12 / Embarque Controlado",
    description:
      "Processo de inspeção ao final de uma produção que previne eventuais problemas de não conformidade. Metodologia baseada no plano de controle do próprio cliente.",
    highlights: [
      "Metodologia referenciada",
      "Prevenção de não conformidades",
      "Mão de obra qualificada",
    ],
    ctaColor: "text-eich-red hover:text-red-400",
  },
  {
    Icon: GearIcon,
    iconBg: "bg-eich-blue/10 group-hover:bg-eich-blue/20",
    title: "Montagem e Sub Montagem",
    description:
      "Dispomos de mão de obra qualificada para montagem e sub montagem em linhas de produção. Alinhamos ao ritmo de produção do cliente com total responsabilidade.",
    highlights: [
      "Mão de obra especializada",
      "Nas instalações do cliente",
      "Flexibilidade total",
    ],
    ctaColor: "text-eich-blue hover:text-blue-400",
  },
];

export default function Services() {
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

  const scrollToContact = () => {
    document.querySelector("#contato")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="servicos" ref={sectionRef} className="py-24 bg-eich-dark">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 fade-up">
          <span className="text-eich-blue font-600 uppercase" style={{ fontSize: "13px", letterSpacing: "2px" }}>
            O que fazemos
          </span>
          <h2 className="text-4xl sm:text-5xl font-800 text-white mt-3 mb-4">
            Nossos Serviços
          </h2>
          <p className="text-eich-muted text-lg max-w-xl mx-auto">
            Soluções completas para garantir a qualidade das suas peças
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {services.map(({ Icon, iconBg, title, description, highlights, ctaColor }, idx) => (
            <div
              key={idx}
              className="fade-up group bg-eich-card border border-white/5 rounded-2xl p-5 md:p-8 flex flex-col hover:border-eich-blue/30 hover:shadow-xl hover:shadow-eich-blue/10 transition-all duration-300"
            >
              {/* Icon */}
              <div
                className={`w-16 h-16 ${iconBg} rounded-xl flex items-center justify-center mb-6 transition-colors duration-300`}
              >
                <Icon />
              </div>

              {/* Title */}
              <h3 className="text-2xl font-700 text-white mb-4">{title}</h3>

              {/* Description */}
              <p className="text-eich-muted text-base leading-[1.8] mb-6 flex-1">
                {description}
              </p>

              {/* Highlights */}
              <ul className="flex flex-col gap-2 mb-8">
                {highlights.map((h, i) => (
                  <li key={i} className="flex items-center gap-2 text-base text-white/70">
                    <span className="w-1.5 h-1.5 rounded-full bg-eich-blue flex-shrink-0" />
                    {h}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <button
                onClick={scrollToContact}
                className={`flex items-center gap-2 ${ctaColor} text-base font-600 transition-colors duration-200 group/btn mt-auto`}
              >
                Agendar serviço
                <span className="transition-transform duration-200 group-hover/btn:translate-x-1">
                  →
                </span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
