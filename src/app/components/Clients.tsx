"use client";

import { useEffect, useRef, useState } from "react";

const LOGO_FILES: string[] = [
  "1.png","2.png","3.svg","4.png","5.png","6.svg","7.jpg","8.png","9.png",
  "10.png","11.png","12.png","13.png","14.png","15.png","16.png","17.png",
  "18.png","19.png","20.png","21.svg","22.png","23.png","24.png","25.png",
  "26.png","27.png","28.svg","29.png","30.png","31.jpg","32.png","33.png",
  "34.png","35.png","36.png","37.png","38.png","39.png","40.png","41.webp",
  "42.png","43.png","44.png","45.png","46.png","47.png","48.png","49.png",
  "50.jpg","51.png","52.png","53.png","54.png","55.png","56.png","57.jpg",
  "58.png","59.png","60.jpg","61.png","62.png","63.png","64.png","65.png",
  "66.png","67.png","68.jpeg","69.jpeg","70.jpeg","71.jpeg","72.png",
  "73.png","74.png","75.png","76.png","77.jpg","78.png","79.png","80.png",
  "81.png",
];

const DARK_BG_LOGOS = new Set([8, 9, 78]);

const ALL_LOGOS = LOGO_FILES.map((f, i) => ({
  src: `/logos/${f}`,
  num: i + 1,
}));

const half = Math.ceil(ALL_LOGOS.length / 2);
const row1 = ALL_LOGOS.slice(0, half);
const row2 = ALL_LOGOS.slice(half);

function LogoCard({ src, num }: { src: string; num: number }) {
  const [hidden, setHidden] = useState(false);
  const needsDark = DARK_BG_LOGOS.has(num);

  if (hidden) return null;

  return (
    <div
      className="flex-shrink-0 mx-2 flex items-center justify-center rounded-xl border"
      style={{
        width: "170px",
        height: "95px",
        padding: "10px 14px",
        background: needsDark ? "#1A1A2E" : "#FFFFFF",
        borderColor: needsDark
          ? "rgba(30,127,192,0.3)"
          : "rgba(30,127,192,0.15)",
      }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt=""
        onError={() => setHidden(true)}
        style={{
          maxHeight: "100%",
          maxWidth: "100%",
          width: "auto",
          height: "auto",
          objectFit: "contain",
          display: "block",
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
            Empresas líderes que confiam na Eich Group
          </p>
        </div>
      </div>

      {/* Row 1 — left to right */}
      <div className="carousel-wrapper mb-5 fade-up">
        <div className="carousel-track carousel-track-left flex py-3 items-center">
          {[...row1, ...row1].map((logo, i) => (
            <LogoCard key={`r1-${i}`} src={logo.src} num={logo.num} />
          ))}
        </div>
      </div>

      {/* Row 2 — right to left */}
      <div className="carousel-wrapper fade-up">
        <div className="carousel-track carousel-track-right flex py-3 items-center">
          {[...row2, ...row2].map((logo, i) => (
            <LogoCard key={`r2-${i}`} src={logo.src} num={logo.num} />
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 mt-14">
        <div className="fade-up text-center">
          <p className="text-eich-muted text-sm">
            Mais de{" "}
            <span className="text-white font-700">80 empresas</span> confiam
            na qualidade dos nossos serviços
          </p>
        </div>
      </div>
    </section>
  );
}
