import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { NavBar } from "@/components/nav-bar";
import { ButtonWhatsAppFixed } from "@/components/button-whatsapp-fixed";
import { GoogleAnalytics } from "@next/third-parties/google"

const roboto = Roboto({ subsets: ["latin"], weight: ['100', '300', '400', '500', '700', '900'] });


export const metadata: Metadata = {
  title: "SgariaTech - Sites profissionais",
  description: "SgariaTech - Criação de sites profissionais te diferenciando do mercado!",
  icons: "/favicon.png",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt" className="scroll-smooth focus:scroll-auto">
      <GoogleAnalytics gaId="G-PD5592DPG5" />
      <body className={`bg-zinc-50 text-zinc-950 ${roboto.className}`}>
        <NavBar />
        <ButtonWhatsAppFixed />
        {children}
      </body>
    </html>
  );
}
