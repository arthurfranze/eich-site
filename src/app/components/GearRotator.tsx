"use client";

import { useEffect, useState } from "react";

const ELEMENTS = [
  { src: "/submarca.png",    alt: "Eich Serviços",  activeWidth: 280, inactiveWidth: 80 },
  { src: "/submarca.png",    alt: "Eich Símbolo",   activeWidth: 120, inactiveWidth: 50 },
  { src: "/iso-9001.webp",   alt: "ISO 9001:2015",  activeWidth: 160, inactiveWidth: 55 },
  { src: "/logo-branca.png", alt: "Eich Logo",      activeWidth: 220, inactiveWidth: 70 },
];

// posIdx: 0 = top | 1 = right (active/highlighted) | 2 = bottom | 3 = left
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
      // clockwise: top → right → bottom → left → top
      // the element that was at top becomes the new active (right)
      setActiveIdx((prev) => (prev - 1 + 4) % 4);
    }, 5000);
    return () => clearInterval(id);
  }, []);

  return (
    <div style={{ position: "relative", width: "400px", height: "400px" }}>
      {ELEMENTS.map((el, i) => {
        // posIdx tells which cross-arm this element occupies right now
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
              padding: isActive ? "16px" : "0px",
              background: isActive ? "rgba(30,127,192,0.05)" : "transparent",
              borderRadius: "12px",
              boxShadow: isActive
                ? "0 0 60px rgba(30,127,192,0.8)"
                : "none",
              zIndex: isActive ? 10 : 1,
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
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
          </div>
        );
      })}
    </div>
  );
}
