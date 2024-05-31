'use client'
import { ButtonContact } from "@/components/button-contact";
import { SectionServices } from "@/components/section-services";
import Image from "next/image";
import { SlideCustomers } from "@/components/slide-customers";


//images
import gabrielImage from '/public/image/gabriel1.jpeg'
import Link from "next/link";
import { GithubLogo, InstagramLogo, LinkedinLogo } from "@phosphor-icons/react";


export default function Home() {
  return (
    <main>
      <section className="relative h-full py-40 md:py-48 bg-zinc-50 border-zinc-500/50 mb-10 bg-[url('../../public/image/background/home.png')]">
        <div className="flex flex-col md:flex-row container mx-auto gap-16 justify-around items-center px-3">
          <div className="flex flex-col gap-7 w-full md:max-w-[780px] items-center justify-center  md:items-start">
            <p className="text-4xl md:text-5xl font-semibold text-zinc-50 uppercase text-center md:text-start ">
              Especialistas em desenvolvimento para transformar <br />
              <span> sua ideia em realidade digital.</span>
            </p>
            <p className="text-zinc-200 text-center md:text-start">
              Descubra como podemos impulsionar sua presença online hoje mesmo com criação de sites, gestão de tráfego pago, sistemas web personalizados e automação.
            </p>
            <ButtonContact />
          </div>
          <div className="w-64">
            <Image
              width={900}
              height={900}
              quality={100}
              priority={true}
              src='https://sa-east-1.graphassets.com/clwqlca22006e07lv6chcfoo8/clwqokzly01i207kix1xkn0sa'
              alt="Logo Sgaria"
            />
          </div>
        </div>
      </section>

      <section className="bg-zinc-50 container mx-auto mb-10">
        <div className="px-10 md:px-20 py-10 mx-auto flex flex-col gap-10 md:flex-row items-center h-full">
          <div className="flex items-center justify-center text-center gap-4 md:items-start md:justify-start md:text-start md:w-[30%] flex-col md:gap-8">
            <h1 className=" text-5xl font-bold">Nossos Serviços</h1>
            <p className="">Transformamos suas ideias em realidade digital através de uma gama completa de soluções empresariais</p>
            <ButtonContact />
          </div>
          <SectionServices />
        </div>
      </section>
      <section className="py-20 bg-zinc-950 mb-10">
        <div className="flex overflow-hidden text-center justify-center text-4xl font-semibold bebasNeue text-neutral-100">
          <SlideCustomers />
        </div>
      </section>
      <section>
        alguns de nossos projetos ... 1 pg para cada
      </section>

      <section className="py-16 bg-zinc-100">
        NOSSO PORTFÓLIO
      </section>

      <section>
        DEPOIMENTOS
      </section>
      <section className="bg-neutral-50 py-16" id="team">

        <div className="container mx-auto flex flex-row gap-10">
          <div className="flex flex-col justify-center gap-8 sm:flex-col w-1/2 ">
            <h1 className="flex sm:text-5xl text-4xl text-start sm:text-start font-semibold ">
              CONHEÇA O <br /> IDEALIZADOR
            </h1>
            <div className="flex flex-col">
              <h2 className="text-start text-xs sm:text-lg text-neutral-500 font-normal">
                Gabriel Sgaria, Desenvolvedor e Empreendedor desde 2019.
                Especialista na criação de softwares web personalizados e na gestão estratégica de tráfego pago, com mais de 4 anos de experiência em estratégias comprovadas.
                Ativo em redes de networking, busca constantemente novidades para oferecer soluções inovadoras e eficientes aos seus clientes.
                Seu objetivo é ajudar empresas a crescerem e alcançarem seus objetivos.
              </h2>
              <span className="text-start text-xs sm:text-lg text-neutral-500 font-normal">
                Com uma equipe de profissionais talentosos e dedicados, Gabriel Sgaria está pronto para te ajudar a alcançar o sucesso através da tecnologia.
              </span>
              <div className="flex justify-around mt-5 text-red-500 font-bold text-sm uppercase transition-all">
                <div className=" flex items-center justify-center hover:text-red-600 ">
                  <LinkedinLogo size={24} />
                  <Link href='https://www.linkedin.com/in/gabriel-sgaria/'>
                    Linkedin
                  </Link>
                </div>
                <div className="flex items-center justify-center hover:text-red-600">
                  <InstagramLogo size={24} />
                  <Link href='https://www.instagram.com/_gabrielsgaria/'>
                    Instagram Pessoal
                  </Link>
                </div>
                <div className="flex items-center justify-center hover:text-red-600">
                  <InstagramLogo size={24} />
                  <Link href='https://www.instagram.com/sg.sites/'>
                    Instagram Profissional
                  </Link>
                </div>
                <div className="flex items-center justify-center hover:text-red-600">
                  <GithubLogo size={24} />
                  <Link href='https://www.instagram.com/sg.sites/'>
                    Github
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="w-1/2 flex items-center justify-center">
            <Image
              width={900}
              height={900}
              src={gabrielImage}
              alt=""
              quality={100}
              priority={true}
              className="w-[550px] h-[400px] rounded-xl object-cover shadow-xl"
            />
          </div>

        </div>
      </section>
      <section>
        duvidas frequentes
      </section>

    </main >
  );
}
