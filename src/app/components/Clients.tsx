"use client";

import { useEffect, useRef, useState } from "react";

const ALL_LOGOS = Array.from({ length: 96 }, (_, i) => `/logos/${i + 1}.png`);
const row1 = ALL_LOGOS.slice(0, 48);
const row2 = ALL_LOGOS.slice(48, 96);

function LogoCard({ src }: { src: string }) {
  const [hidden, setHidden] = useState(false);

  if (hidden) return null;

  return (
    <div className="flex-shrink-0 mx-3 flex items-center justify-center"
      style={{ height: "45px" }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt=""
        onError={() => setHidden(true)}
        style={{
          height: "45px",
          width: "auto",
          objectFit: "contain",
          maxWidth: "120px",
        }}
      />
    </div>
  );
}

export default function Clients() {
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
      id="clientes"
      ref={sectionRef}
      className="py-24 bg-eich-dark overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 mb-14">
        <div className="text-center fade-up">
          <span
            className="text-eich-blue font-600 uppercase"
            style={{ fontSize: "13px", letterSpacing: "2px" }}
          >
            Quem confia em nós
          </span>
          <h2 className="text-4xl sm:text-5xl font-800 text-white mt-3 mb-4">
            Nossos Clientes
          </h2>
          <p className="text-eich-muted text-lg">
            Empresas líderes que confiam na Eich
          </p>
        </div>
      </div>

      {/* Row 1 — left to right (logos 1–48) */}
      <div className="carousel-wrapper mb-5 fade-up">
        <div className="carousel-track carousel-track-left flex py-3 items-center">
          {[...row1, ...row1].map((src, i) => (
            <LogoCard key={`r1-${i}`} src={src} />
          ))}
        </div>
      </div>

      {/* Row 2 — right to left (logos 49–96) */}
      <div className="carousel-wrapper fade-up">
        <div className="carousel-track carousel-track-right flex py-3 items-center">
          {[...row2, ...row2].map((src, i) => (
            <LogoCard key={`r2-${i}`} src={src} />
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 mt-14">
        <div className="fade-up text-center">
          <p className="text-eich-muted text-sm">
            Mais de{" "}
            <span className="text-white font-700">100 empresas</span> confiam
            na qualidade dos nossos serviços
          </p>
        </div>
      </div>
    </section>
  );
}
