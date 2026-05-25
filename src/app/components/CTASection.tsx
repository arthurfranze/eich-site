"use client";

export default function CTASection() {
  const scrollToContact = () => {
    document.querySelector("#contato")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-28 relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-eich-blue/20 via-eich-black to-eich-black" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-eich-blue/15 rounded-full blur-[100px]" />

      <div className="relative z-10 max-w-4xl mx-auto px-5 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl sm:text-5xl font-800 text-white mb-6 leading-tight">
          Pronto para garantir a{" "}
          <span className="text-eich-blue">qualidade</span> das suas peças?
        </h2>
        <p className="text-eich-muted text-lg mb-10 max-w-xl mx-auto leading-[1.8]">
          Entre em contato e descubra como a Eich pode ser a solução que você
          precisa.
        </p>
        <button
          onClick={scrollToContact}
          className="inline-flex items-center gap-3 bg-eich-blue hover:bg-blue-600 text-white font-700 px-10 py-5 rounded-xl text-base sm:text-lg transition-all duration-200 hover:shadow-2xl hover:shadow-eich-blue/40 hover:-translate-y-1"
        >
          Fale com um especialista agora
          <span className="text-xl">→</span>
        </button>
      </div>
    </section>
  );
}
