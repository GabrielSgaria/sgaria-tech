import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { NavBar } from "@/components/nav-bar";
import { ButtonWhatsAppFixed } from "@/components/button-whatsapp-fixed";
import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google"


const roboto = Roboto({ subsets: ["latin"], weight: ['100', '300', '400', '500', '700', '900'] });


export const metadata: Metadata = {
  title: "SgariaTech - Sites profissionais",
  description: "SgariaTech - Criação de sites profissionais te diferenciando do mercado!",
  icons: "/favicon.png",
  metadataBase: new URL("https://www.sgariatech.com.br"),
  openGraph: {
    title: "SgariaTech - Sites profissionais",
    description: "SgariaTech - Criação de sites profissionais te diferenciando do mercado!",
    url: "https://www.sgariatech.com.br",
    siteName: "SgariaTech - Sites profissionais",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: 'https://sa-east-1.graphassets.com/clwqlca22006e07lv6chcfoo8/clxknt8uv089x07kdxn6a2qb5',
        width: 1250,
        height: 1250,
      }
    ],
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
    },
  },
  keywords: [
    "desenvolvimento de sites", "criação de sites", "sites profissionais", "design de websites", "marketing digital", "otimização de SEO",
    "experiência do usuário", "sites responsivos", "plataformas digitais", "presença online", "estratégias de marketing", "sites atraentes",
    "layout personalizado", "hospedagem de sites", "design de interface", "conteúdo relevante", "branding digital", "consultoria em websites",
    "soluções web", "sites modernos", "inovação digital", "sites acessíveis", "engajamento do usuário", "análise de dados", "otimização de conversão",
    "SEO local", "marketing de conteúdo", "redes sociais", "comércio eletrônico", "e-commerce", "criação de blogs", "portfólio online",
    "sites corporativos", "sistemas web", "aplicações web", "desenvolvimento frontend", "desenvolvimento backend", "tecnologia web",
    "interface intuitiva", "performance de sites", "experiência de compra", "suporte técnico", "manutenção de sites", "segurança digital",
    "sites rápidos", "integração de sistemas", "personalização de websites", "sistemas CMS", "gestão de conteúdo",
  ]
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt" className="scroll-smooth focus:scroll-auto">
      <body className={`bg-zinc-50 text-zinc-950 ${roboto.className}`}>
        <NavBar />
        <ButtonWhatsAppFixed />
        {children}
      </body>
      <GoogleAnalytics gaId="G-PD5592DPG5" />
      <GoogleTagManager gtmId="GTM-5L336KFG" />
    </html>
  );
}
