"use client";

import Image from "next/image";

const navLinks = [
  { label: "Início", href: "#inicio" },
  { label: "Serviços", href: "#servicos" },
  { label: "Como Funciona", href: "#como-funciona" },
  { label: "Sobre", href: "#sobre" },
  { label: "Clientes", href: "#clientes" },
  { label: "Contato", href: "#contato" },
];

const PhoneIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#1E7FC0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.08 1.18 2 2 0 012.07 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 14.18v2.74z" />
  </svg>
);

const MailIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#1E7FC0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);

const MapPinIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#1E7FC0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const WhatsAppIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="#4ade80">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

export default function Footer() {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-[#050505] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Logo + tagline */}
          <div className="flex flex-col gap-4">
            <Image
              src="/logo-branca.png"
              alt="Eich Serviços"
              width={130}
              height={52}
              className="h-12 w-auto object-contain"
            />
            <p className="text-eich-muted text-base leading-[1.8] max-w-xs">
              Inspeção e análise de peças automotivas com qualidade certificada
              ISO 9001:2015.
            </p>
          </div>

          {/* Nav links */}
          <div className="flex flex-col gap-3">
            <h4 className="text-white font-700 text-[13px] uppercase tracking-[2px] mb-1">Navegação</h4>
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className="text-left text-eich-muted hover:text-white text-base transition-colors duration-200"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Contact info */}
          <div className="flex flex-col gap-3">
            <h4 className="text-white font-700 text-[13px] uppercase tracking-[2px] mb-1">Contato</h4>
            <a href="tel:+551939355565" className="text-eich-muted hover:text-white text-base transition-colors flex items-center gap-2">
              <PhoneIcon /> (19) 3935-5565
            </a>
            <a href="mailto:comercial@eichservicos.com.br" className="text-eich-muted hover:text-white text-base transition-colors flex items-center gap-2">
              <MailIcon /> comercial@eichservicos.com.br
            </a>
            <p className="text-eich-muted text-base flex items-center gap-2">
              <MapPinIcon /> Indaiatuba, SP
            </p>
            <a
              href="https://wa.me/551939355565"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-green-400 hover:text-green-300 text-base transition-colors mt-2"
            >
              <WhatsAppIcon /> WhatsApp
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-eich-muted text-xs text-center sm:text-left">
            © 2025 Eich Serviços · Todos os direitos reservados
          </p>
          <div className="flex items-center gap-2">
            <Image src="/iso-9001.webp" alt="ISO 9001:2015" width={24} height={24} className="w-6 h-6 object-contain opacity-60" />
            <span className="text-eich-muted text-xs">ISO 9001:2015</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
