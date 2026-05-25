"use client";

const LOGOS = [
  { src: "/logos-principais/1.png", alt: "Cliente principal 1" },
  { src: "/logos-principais/2.png", alt: "Cliente principal 2" },
  { src: "/logos-principais/3.png", alt: "Cliente principal 3" },
  { src: "/logos-principais/4.png", alt: "Cliente principal 4" },
];

export default function FeaturedClients() {
  return (
    <section className="bg-[#0C0C0C] border-b border-white/5 py-10">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-8">

          {/* Label */}
          <p
            className="text-white/35 uppercase text-center tracking-widest"
            style={{ fontSize: "11px", letterSpacing: "3px" }}
          >
            Empresas líderes que confiam na Eich
          </p>

          {/* Logo cards — 2×2 mobile, 4 em linha desktop */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 w-full max-w-lg lg:max-w-none">
            {LOGOS.map(({ src, alt }) => (
              <div
                key={src}
                className="featured-logo-card flex items-center justify-center overflow-hidden w-full"
                style={{
                  height: "90px",
                  background: "#FFFFFF",
                  border: "2px solid rgba(30,127,192,0.25)",
                  borderRadius: "16px",
                  padding: "10px 14px",
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={src}
                  alt={alt}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                  }}
                />
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
