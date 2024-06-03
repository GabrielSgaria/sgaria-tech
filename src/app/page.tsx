'use client'
import { ButtonContact } from "@/components/button-contact";
import { SectionServices } from "@/components/section-services";
import Image from "next/image";
import { SlideCustomers } from "@/components/slide-customers";


//images
import gabrielImage from '/public/image/gabriel1.jpeg'
import Link from "next/link";
import { GithubLogo, InstagramLogo, LinkedinLogo } from "@phosphor-icons/react";
import { ChevronRightIcon, GitHubLogoIcon, InstagramLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import { AccordionQuestions } from "@/components/accordion-questions";
import { imageProjects } from "@/lib/image-projetcts";


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
        <div className="px-10 md:px-3 py-10 mx-auto flex flex-col gap-10 md:flex-row md:justify-between items-center h-full">
          <div className="flex items-center justify-center text-center gap-10 md:items-start md:justify-start md:text-start md:w-[50%] flex-col">
            <h1 className="text-5xl font-bold ">Nossos <br /> Serviços</h1>
            <p className="text-start text-base md:text-lg text-zinc-500 font-normal max-w-[550px]">Transformamos suas ideias em realidade digital através de uma gama completa de soluções empresariais</p>
            <ButtonContact />
          </div>
          <SectionServices />
        </div>
      </section>
      <section className="py-20 bg-zinc-950 mb-10  overflow-hidden">
        <div className="mx-auto flex container px-3 relative flex-col">
          <div className="w-full flex flex-col gap-48 justify-center items-center text-4xl font-semibold text-zinc-100 ">
            <div className="flex flex-col  md:flex-row justify-between items-center w-full">
              <h1 className="text-5xl font-bold  text-start">Nossos <br /> Clientes</h1>
              <span className="mt-10 md:mt-0 md:text-start text-center text-base md:text-lg text-zinc-300 font-normal max-w-[580px]">
                Temos o orgulho de colaborar com diversas empresas inovadoras e líderes em seus setores.
                Nossa dedicação em fornecer soluções digitais personalizadas e eficazes nos permitiu construir parcerias duradouras e de sucesso.
                Aqui estão alguns dos nossos clientes que confiaram em nós para transformar suas ideias em realidade
              </span>
            </div>
            <SlideCustomers />
          </div>
          <div className="mt-52 w-full flex items-center justify-center">
            <ButtonContact />
          </div>
        </div>
      </section>
      <section className="py-20 bg-zinc-50 px-3">
        <div className="flex flex-col container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center w-full">
            <h1 className="flex md:text-5xl text-4xl text-start md:text-start font-semibold">
              Projetos<br /> Recentes
            </h1>
            <span className="mt-10 md:mt-0 md:text-start text-center text-base md:text-lg text-zinc-950 font-normal max-w-[580px]">
              Estamos orgulhosos de apresentar alguns dos nossos projetos mais recentes. Cada um desses trabalhos reflete nosso compromisso com a excelência,
              inovação e satisfação do cliente. De design de interfaces a soluções completas de desenvolvimento,
              nossos projetos são uma prova do impacto positivo que buscamos criar para nossos parceiros.
            </span>
          </div>
          <div className="grid grid-cols-2 grid-flow-row gap-x-32 gap-y-10  mt-20 mx-auto">
            {imageProjects.map((imageProjects, index) => (
              <div key={index} className="flex w-[600px] flex-col overflow-hidden gap-5 drop-shadow-md hover:drop-shadow-xl">
                <Link href={imageProjects.slug}>
                  <Image
                    width={9000}
                    height={9000}
                    quality={100}
                    alt={imageProjects.alt}
                    src={imageProjects.src}
                    className="object-fill rounded-xl " />
                </Link>
                <div className="flex flex-col gap-2">
                  <h1 className="text-2xl font-bold text-zinc-800"> {imageProjects.title}</h1>
                  <span className="text-base text-zinc-600 text-wrap">{imageProjects.textContent}</span>
                </div>
              </div>
            ))}

          </div>
          <div className="flex items-center justify-center mt-20">
            <Link href='/portfolio' className="px-5 py-2 rounded-xl transition-all hover:bg-zinc-50 hover:text-zinc-950 border-zinc-600 bg-zinc-950 text-zinc-50 font-bold text-xl flex items-center">
              Portfólio Completo <ChevronRightIcon className="size-5 font-bold"/>
            </Link>
          </div>
        </div>
      </section>

      <section>
        DEPOIMENTOS
      </section>
      <section className="bg-zinc-50 py-16" id="team">

        <div className="container mx-auto flex flex-col-reverse md:flex-row gap-10 px-3">
          <div className="flex flex-col items-center justify-center md:items-start gap-8  md:w-1/2 ">
            <h1 className="flex md:text-5xl text-4xl text-start md:text-start font-semibold ">
              Conheça o <br /> Idealizador
            </h1>
            <div className="flex flex-col">
              <h2 className="text-start text-base md:text-lg text-zinc-500 font-normal">
                Gabriel Sgaria, Desenvolvedor e Empreendedor desde 2019.
                Especialista na criação de softwares web personalizados e na gestão estratégica de tráfego pago, com mais de 4 anos de experiência em estratégias comprovadas.
                Ativo em redes de networking, busca constantemente novidades para oferecer soluções inovadoras e eficientes aos seus clientes.
                Seu objetivo é ajudar empresas a crescerem e alcançarem seus objetivos.
              </h2>
              <span className="text-start text-base md:text-lg text-zinc-500 font-normal mt-5">
                Com uma equipe de profissionais talentosos e dedicados, Gabriel Sgaria está pronto para te ajudar a alcançar o sucesso através da tecnologia.
              </span>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-4 md:items-start md:justify-start">
                <Link
                  target="blank"
                  href="https://github.com/GabrielSgaria"
                  className="flex cursor-pointer flex-row transition-all items-center gap-2 text-zinc-800/70 hover:text-zinc-800"
                >
                  <GitHubLogoIcon className="size-6" />
                  <p className="h-6 font-semibold hover:border-b-[1px] hover:border-zinc-800">
                    github.com/GabrielSgaria
                  </p>
                </Link>
                <Link
                  target="blank"
                  href="https://www.linkedin.com/in/gabriel-sgaria/"
                  className="flex cursor-pointer transition-all  flex-row items-center gap-2 text-zinc-800/70 hover:text-zinc-800"
                >
                  <LinkedInLogoIcon className="size-6" />
                  <p className="h-6 font-semibold hover:border-b-[1px] hover:border-zinc-800">
                    gabriel-sgaria
                  </p>
                </Link>
                <Link
                  target="blank"
                  href="https://www.instagram.com/_gabrielsgaria"
                  className="flex cursor-pointer transition-all  flex-row items-center gap-2 text-zinc-800/70 hover:text-zinc-800"
                >
                  <InstagramLogoIcon className="size-6" />
                  <p className="h-6 font-semibold hover:border-b-[1px] hover:border-zinc-800">
                    @_gabrielsgaria
                  </p>
                </Link>
                <Link
                  target="blank"
                  href="https://www.instagram.com/sg.sites/"
                  className="flex cursor-pointer transition-all  flex-row items-center gap-2 text-zinc-800/70 hover:text-zinc-800"
                >
                  <InstagramLogoIcon className="size-6" />
                  <p className="h-6 font-semibold hover:border-b-[1px] hover:border-zinc-800">
                    @sg.sites
                  </p>
                </Link>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 flex items-center justify-center">
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
      <section className="py-16 bg-zinc-50 ">
        <div className="mx-auto container flex flex-col md:flex-row px-3 items-center min-h-[550px] gap-10">
          <div className="md:w-1/3 flex flex-col gap-10 items-center justify-center md:items-start md:justify-start">
            <h1 className="flex md:text-5xl text-4xl text-center md:text-start font-semibold ">
              Perguntas <br /> Frequentes
            </h1>
            <span className="md:text-start text-center text-base md:text-lg text-zinc-500 font-normal md:mr-5">
              Se tiver qualquer dúvida ou precisar de mais informações, por favor, não hesite em nos contatar. Estamos aqui para ajudar!
            </span>
            <ButtonContact />
          </div>
          <div className="md:w-2/3">
            <AccordionQuestions />

          </div>



        </div>
      </section>

    </main >
  );
}
