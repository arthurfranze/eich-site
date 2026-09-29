"use client";

import { useEffect, useRef } from "react";

const BriefcaseIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1E7FC0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
    <path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16" />
  </svg>
);

const UsersIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1E7FC0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 00-3-3.87" />
    <path d="M16 3.13a4 4 0 010 7.75" />
  </svg>
);

const TrendingIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1E7FC0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
    <polyline points="17 6 23 6 23 12" />
  </svg>
);

const ShieldIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1E7FC0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <path d="M9 12l2 2 4-4" />
  </svg>
);

const WhatsAppIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const MailIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);

const benefits = [
  {
    Icon: BriefcaseIcon,
    title: "Oportunidades reais",
    description: "Vagas em diversas áreas com possibilidade de crescimento profissional contínuo.",
  },
  {
    Icon: UsersIcon,
    title: "Equipe qualificada",
    description: "Faça parte de um time com mais de 100 profissionais comprometidos com a excelência.",
  },
  {
    Icon: TrendingIcon,
    title: "Empresa em crescimento",
    description: "A Eich Group está em constante expansão, criando novas oportunidades todos os dias.",
  },
  {
    Icon: ShieldIcon,
    title: "Ambiente certificado",
    description: "Trabalhe em uma empresa com padrão ISO 9001:2015 e processos bem estruturados.",
  },
];

export default function WorkWithUs() {
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
    <section id="trabalhe-conosco" ref={sectionRef} className="pt-16 pb-24 bg-eich-black">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-up">
          <span
            className="text-eich-red font-600 uppercase"
            style={{ fontSize: "13px", letterSpacing: "2px" }}
          >
            Carreiras
          </span>
          <h2 className="text-4xl sm:text-5xl font-800 text-white mt-3 mb-4">
            Trabalhe Conosco
          </h2>
          <p className="text-eich-muted text-lg max-w-2xl mx-auto leading-[1.8]">
            Estamos sempre em busca de profissionais comprometidos e qualificados
            para fazer parte do nosso time.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-14">
          {benefits.map(({ Icon, title, description }, idx) => (
            <div
              key={idx}
              className="fade-up group flex gap-5 bg-eich-card border border-white/5 rounded-2xl p-5 md:p-7 hover:border-eich-red/30 hover:shadow-lg hover:shadow-eich-red/5 transition-all duration-300"
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

        <div className="fade-up">
          <div className="bg-gradient-to-r from-eich-card to-eich-dark border border-white/5 rounded-2xl p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-800 text-white mb-2">
                Quer fazer parte do nosso time?
              </h3>
              <p className="text-eich-muted text-base leading-[1.8] max-w-lg">
                Envie seu currículo pelo WhatsApp ou e-mail e nossa equipe de RH
                entrará em contato com você.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 flex-shrink-0">
              <a
                href="https://wa.me/5519991467504?text=Ol%C3%A1%2C%20gostaria%20de%20enviar%20meu%20curr%C3%ADculo%20para%20trabalhar%20na%20Eich%20Group."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-green-500 hover:bg-green-600 text-white font-700 px-6 py-4 rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-green-500/25 hover:-translate-y-0.5"
              >
                <WhatsAppIcon />
                Enviar currículo
              </a>
              <a
                href="mailto:Rh2@eichservicos.com.br?subject=Curr%C3%ADculo%20-%20Trabalhe%20Conosco"
                className="inline-flex items-center justify-center gap-3 bg-white/5 border border-white/10 hover:border-eich-blue/40 text-white font-700 px-6 py-4 rounded-xl transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5"
              >
                <MailIcon />
                Enviar por e-mail
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
