import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { NavBar } from "@/components/nav-bar";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

export const metadata: Metadata = {
  title: {
    default: "Tarefas+ | Organize suas tarefas de forma fácil",
    template: "%s - Tarefas+",
  },
  description: "Gerenciador de tarefas",
  openGraph: {
    title: "Tarefas+ |",
    description: "Gerenciador de tarefas | ",
  },
};

export default function RootLayout( {
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className=''>
        <NavBar />
          {children}
      </body>
    </html>
  );
}
