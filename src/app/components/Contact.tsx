"use client";

import { useEffect, useRef, useState } from "react";

const MapPinIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E7FC0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const PhoneIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E7FC0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.08 1.18 2 2 0 012.07 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 14.18v2.74z" />
  </svg>
);

const MailIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E7FC0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);

const WhatsAppIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const SendIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="22" y1="2" x2="11" y2="13" />
    <polygon points="22 2 15 22 11 13 2 9 22 2" />
  </svg>
);

export default function Contact() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [form, setForm] = useState({ nome: "", telefone: "", email: "", mensagem: "" });
  const [submitted, setSubmitted] = useState(false);

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const contactItems = [
    {
      Icon: MapPinIcon,
      label: "Endereço",
      content: (
        <p className="text-eich-muted text-sm leading-relaxed">
          Rua Lourenço Neves, 228<br />Indaiatuba, SP — 13348-340
        </p>
      ),
    },
    {
      Icon: PhoneIcon,
      label: "Telefone",
      content: (
        <a href="tel:+551939355565" className="text-eich-muted text-sm hover:text-eich-blue transition-colors">
          (19) 3935-5565
        </a>
      ),
    },
    {
      Icon: MailIcon,
      label: "E-mail",
      content: (
        <a href="mailto:comercial@eichservicos.com.br" className="text-eich-muted text-sm hover:text-eich-blue transition-colors">
          comercial@eichservicos.com.br
        </a>
      ),
    },
  ];

  return (
    <section id="contato" ref={sectionRef} className="py-24 bg-eich-dark">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-up">
          <span className="text-eich-blue font-600 uppercase" style={{ fontSize: "13px", letterSpacing: "2px" }}>Fale conosco</span>
          <h2 className="text-4xl sm:text-5xl font-800 text-white mt-3 mb-4">Entre em Contato</h2>
          <p className="text-eich-muted text-lg">Gostaríamos muito de ouvir você</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Info */}
          <div className="fade-up flex flex-col gap-8">
            <div className="flex flex-col gap-6">
              {contactItems.map(({ Icon, label, content }, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-10 h-10 flex-shrink-0 bg-eich-blue/10 rounded-lg flex items-center justify-center">
                    <Icon />
                  </div>
                  <div>
                    <p className="text-white font-600 text-sm mb-1">{label}</p>
                    {content}
                  </div>
                </div>
              ))}
            </div>

            <a
              href="https://wa.me/551939355565"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white font-700 px-6 py-4 rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-green-500/25 hover:-translate-y-0.5 self-start"
            >
              <WhatsAppIcon />
              Falar no WhatsApp
            </a>
          </div>

          {/* Form */}
          <div className="fade-up">
            {submitted ? (
              <div className="bg-eich-card border border-green-500/30 rounded-2xl p-10 flex flex-col items-center justify-center gap-4 min-h-[360px] text-center">
                <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-700 text-white">Mensagem enviada!</h3>
                <p className="text-eich-muted text-sm">Em breve nossa equipe entrará em contato com você.</p>
                <button onClick={() => setSubmitted(false)} className="mt-4 text-eich-blue text-sm hover:underline">
                  Enviar outra mensagem
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-eich-card border border-white/5 rounded-2xl p-8 flex flex-col gap-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {[
                    { name: "nome", label: "Nome", type: "text", placeholder: "Seu nome" },
                    { name: "telefone", label: "Telefone", type: "tel", placeholder: "(19) 99999-9999" },
                  ].map((f) => (
                    <div key={f.name}>
                      <label className="text-[13px] text-eich-muted font-600 uppercase tracking-[2px] mb-2 block">{f.label}</label>
                      <input
                        type={f.type}
                        name={f.name}
                        value={form[f.name as keyof typeof form]}
                        onChange={handleChange}
                        required={f.name === "nome"}
                        placeholder={f.placeholder}
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-base text-white placeholder:text-white/30 focus:outline-none focus:border-eich-blue/60 transition-colors"
                      />
                    </div>
                  ))}
                </div>

                <div>
                  <label className="text-[13px] text-eich-muted font-600 uppercase tracking-[2px] mb-2 block">E-mail</label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder="seu@email.com"
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-base text-white placeholder:text-white/30 focus:outline-none focus:border-eich-blue/60 transition-colors"
                  />
                </div>

                <div>
                  <label className="text-[13px] text-eich-muted font-600 uppercase tracking-[2px] mb-2 block">Mensagem</label>
                  <textarea
                    name="mensagem"
                    value={form.mensagem}
                    onChange={handleChange}
                    required
                    rows={4}
                    placeholder="Como podemos ajudar você?"
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-base text-white placeholder:text-white/30 focus:outline-none focus:border-eich-blue/60 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="flex items-center justify-center gap-2 bg-eich-blue hover:bg-blue-600 text-white font-700 py-4 rounded-lg text-sm transition-all duration-200 hover:shadow-lg hover:shadow-eich-blue/30 hover:-translate-y-0.5"
                >
                  <SendIcon />
                  Enviar mensagem
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
