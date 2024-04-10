import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { NavBar } from "@/components/nav-bar";

const roboto = Roboto({ subsets: ["latin"], weight: ['100', '300', '400', '500', '700', '900'] });


export const metadata: Metadata = {
  title: "SgariaTech - Sites profissionais",
  description: "SgariaTech - Criação de sites profissionais te diferenciando do mercado!",
  icons: "/favicon.svg",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt">
      <body className={`bg-zinc-900 text-zinc-50 ${roboto.className}`}>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
