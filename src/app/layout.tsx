import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Eich Serviços — Inspeção e Análise de Peças Automotivas",
  description:
    "Precisão técnica, confiabilidade e qualidade certificada ISO 9001:2015 para sua cadeia produtiva automotiva. Inspeção 100%, GP12, montagem e sub montagem.",
  keywords:
    "inspeção de peças, análise automotiva, GP12, embarque controlado, ISO 9001, Indaiatuba, qualidade automotiva",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={inter.variable}>
      <body className="font-inter bg-eich-black text-eich-text antialiased">
        {children}
      </body>
    </html>
  );
}
