"use client";

import { useEffect, useState } from "react";

type ImageElement = {
  kind: "image";
  src: string;
  alt: string;
  activeWidth: number;
  inactiveWidth: number;
};

type TextElement = {
  kind: "text";
  number: string;
  label: string;
  alt: string;
  activeWidth: number;
  inactiveWidth: number;
};

type Element = ImageElement | TextElement;

const ELEMENTS: Element[] = [
  { kind: "image", src: "/logo-branca.png", alt: "Eich Group", activeWidth: 260, inactiveWidth: 80 },
  { kind: "text",  number: "+10",  label: "anos de\nexperiência",       alt: "+10 anos de experiência",      activeWidth: 200, inactiveWidth: 70 },
  { kind: "image", src: "/iso-9001.webp",   alt: "ISO 9001:2015", activeWidth: 160, inactiveWidth: 55 },
  { kind: "text",  number: "+100", label: "clientes\natendidos",         alt: "+100 clientes atendidos",      activeWidth: 200, inactiveWidth: 70 },
];

const POS = [
  { x: 0,    y: -160 },
  { x: 160,  y: 0    },
  { x: 0,    y: 160  },
  { x: -160, y: 0    },
];

export default function GearRotator() {
  const [activeIdx, setActiveIdx] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setActiveIdx((prev) => (prev - 1 + 4) % 4);
    }, 5000);
    return () => clearInterval(id);
  }, []);

  return (
    <div style={{ position: "relative", width: "400px", height: "400px" }}>
      {ELEMENTS.map((el, i) => {
        const posIdx = (i - activeIdx + 1 + 4) % 4;
        const isActive = posIdx === 1;
        const { x, y } = POS[posIdx];
        const w = isActive ? el.activeWidth : el.inactiveWidth;

        return (
          <div
            key={i}
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
              transition:
                "transform 0.8s ease-in-out, opacity 0.6s ease-in-out, width 0.6s ease-in-out, box-shadow 0.6s ease-in-out",
              opacity: isActive ? 1 : 0.35,
              width: `${w}px`,
              padding: isActive ? "16px" : "8px",
              background: isActive ? "rgba(30,127,192,0.05)" : "transparent",
              borderRadius: "12px",
              boxShadow: isActive
                ? "0 0 60px rgba(30,127,192,0.8)"
                : "none",
              zIndex: isActive ? 10 : 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {el.kind === "image" ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={el.src}
                alt={el.alt}
                style={{
                  width: "100%",
                  height: "auto",
                  objectFit: "contain",
                  display: "block",
                  filter: isActive
                    ? "drop-shadow(0 0 20px rgba(30,127,192,0.7))"
                    : "none",
                  transition: "filter 0.6s ease-in-out",
                }}
              />
            ) : (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  textAlign: "center",
                  gap: isActive ? "4px" : "2px",
                  transition: "gap 0.6s ease-in-out",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-geist-sans), system-ui, sans-serif",
                    fontWeight: 800,
                    fontSize: isActive ? "48px" : "18px",
                    lineHeight: 1,
                    color: "#1e7fc0",
                    textShadow: isActive
                      ? "0 0 30px rgba(30,127,192,0.6)"
                      : "none",
                    transition:
                      "font-size 0.6s ease-in-out, text-shadow 0.6s ease-in-out",
                    letterSpacing: "-0.02em",
                  }}
                >
                  {el.number}
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-geist-sans), system-ui, sans-serif",
                    fontWeight: 500,
                    fontSize: isActive ? "14px" : "0px",
                    lineHeight: 1.3,
                    color: "rgba(255,255,255,0.85)",
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                    whiteSpace: "pre-line",
                    opacity: isActive ? 1 : 0,
                    transition:
                      "font-size 0.6s ease-in-out, opacity 0.4s ease-in-out",
                  }}
                >
                  {el.label}
                </span>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
