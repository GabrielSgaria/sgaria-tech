'use client'
import { ButtonContact } from "@/components/button-contact";
import { SectionServices } from "@/components/section-services";
import Image from "next/image";
import { SlideCustomers } from "@/components/slide-customers";
import logo from '/public/image/logo.png'
import Link from "next/link";
import { ChevronRightIcon, DoubleArrowRightIcon, GitHubLogoIcon, InstagramLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import { AccordionQuestions } from "@/components/accordion-questions";
import { imageProjects } from "@/lib/image-projetcts";
import { Check, WhatsappLogo } from "@phosphor-icons/react";
import { Footer } from "@/components/footer";
import { sendMensage } from "@/lib/utils";
import { plansSt, plansTp } from "@/lib/plans";
import { CardPlans } from "@/components/card-plans";
import { GoogleAnalytics } from "@next/third-parties/google";


export default function Home() {
  return (
    <main>
      <GoogleAnalytics gaId="G-PD5592DPG5" />
      <section className="w-full h-full py-40 md:py-48 bg-zinc-50 border-zinc-500/50 bg-cover bg-[url('../../public/image/background/home.png')]">
        <div className="flex flex-col-reverse md:flex-row container mx-auto gap-20 justify-around items-center px-3">
          <div className="flex flex-col gap-10 w-full md:max-w-[700px] items-center justify-start  md:items-start">
            <p className="text-4xl md:text-5xl font-semibold text-zinc-50 uppercase text-center md:text-start ">
              Especialistas em <br />desenvolvimento
              para transformar sua ideia em
              <span className=""> realidade digital.</span>
            </p>
            <p className="text-zinc-200 text-center md:text-start max-w-[530px]">
              Descubra como podemos impulsionar sua presença online hoje mesmo com criação de sites, gestão de tráfego pago, sistemas web personalizados e automação.
            </p>
            <div className="flex gap-2 md:gap-10 items-center justify-start h-16 md:w-[480px]">
              <ButtonContact />
              <Link href={`/#about`} className="w-28 md:w-40 h-12 uppercase text-center text-zinc-50 justify-center rounded-full hover:border border-zinc-400 cursor-pointer font-bold hover:text-zinc-400 transition-all sm:text-base text-sm flex items-center gap-2">
                Sobre Nós <DoubleArrowRightIcon className="size-4" />
              </Link>
            </div>
          </div>
          <div className="flex w-full md:w-[450px]">
            <Image
              width={9000}
              height={9000}
              src={logo}
              alt="Logo SG TECH"
              priority={true}
              quality={100}
              className='w-full object-fill'
            />

          </div>
        </div>
      </section>

      <section className="bg-zinc-50 container mx-auto py-10 lg:py-20" id="services">
        <div className="md:px-10 px-3 mx-auto flex flex-col gap-10">
          <div className="md:px-10 px-3 mx-auto flex-col flex md:flex-row gap-10 justify-around items-center w-full h-full">
            <h1 className="text-5xl font-bold text-start">Nossos <br /> Serviços</h1>
            <p className="text-center xl:text-start text-base md:text-lg text-zinc-500 font-normal md:max-w-[500px]">
              Transformamos suas ideias em realidade digital
              oferecemos uma gama completa de soluções empresariais para levar sua empresa ao próximo nível.
            </p>
          </div>
          <SectionServices />
        </div>
        <div className="flex items-center justify-center w-full">

        </div>
      </section>


      <section className="py-10 container mx-auto px-3 md:px-20 flex justify-center">
        <div className="bg-bottom bg-cover md:bg-top bg-no-repeat max-w-[1120px] w-full h-[700px] bg-[url('../../public/image/background/bg-wpp-mobile.png')] md:bg-[url('../../public/image/background/bg-wpp.png')] rounded-3xl flex md:h-[500px] items-start justify-center md:items-center md:justify-end shadow-lg">
          <div className="md:w-1/2 h-1/2 w-full md:h-full flex flex-col gap-10 items-start justify-center px-10 pt-10 md:pt-0">
            <p className="text-zinc-50 font-bold text-4xl md:text-5xl">PRECISA DE UM <span className="text-green-500">PROJETO</span> SOB MEDIDA?</p>
            <span className="text-zinc-300 text-lg md:text-xl">Estamos prontos para ouvir suas ideias e oferecer soluções personalizadas.</span>
            <a
              onClick={() =>
                sendMensage(
                  5541992652259,
                  "Olá! Vim através do site Sgaria Tech, Preciso de um Projeto Sob medida"
                )
              }
              className="cursor-pointer shadow-lg hover:shadow-inner hover:shadow-zinc-800 flex items-center justify-center gap-2 text-sm sm:text-base bg-green-600 hover:bg-green-600/95 transition-all font-bold text-zinc-50 py-3 px-5 rounded-full"
            >
              <p className="font-bold">
                Solicitar um Orçamento Personalizado
              </p>
              <WhatsappLogo className="size-5 font-bold" />
            </a>
          </div>
        </div>
      </section>


      <section className="py-10 bg-zinc-50 px-3" id="projects">
        <div className="flex flex-col container mx-auto">
          <div className="flex flex-col md:flex-row justify-center items-center w-full">
            <h1 className="flex md:text-5xl text-4xl text-start md:text-start font-semibold">
              Projetos Recentes
            </h1>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 grid-flow-row md:gap-x-32 gap-y-10  mt-20 mx-auto">
            {imageProjects.map((imageProjects, index) => (
              <div key={index} className="flex flex-col overflow-hidden gap-5 drop-shadow-md hover:drop-shadow-xl transition-all">
                <Link href={`/portfolio/${imageProjects.slug}`}>
                  <Image
                    width={9000}
                    height={9000}
                    quality={100}
                    alt={imageProjects.alt}
                    src={imageProjects.src}
                    className="object-fill rounded-3xl w-full hover:opacity-75 transition-all" />
                </Link>
                <div className="flex flex-col gap-2">
                  <h1 className="text-2xl font-bold text-zinc-800 drop-shadow-none"> {imageProjects.title}</h1>
                  <span className="text-base text-zinc-600 text-wrap drop-shadow-none">{imageProjects.textContent}</span>
                </div>
              </div>
            ))}

          </div>
          <div className="flex items-center justify-center mt-20">
            <ButtonContact />
          </div>
        </div>
      </section>

      <section className="py-28 bg-cover bg-[url('../../public/image/background/home.png')] mb-10  overflow-hidden">
        <div className="mx-auto flex container px-3 relative flex-col">
          <div className="w-full flex flex-col gap-48 justify-center items-center text-4xl font-semibold text-zinc-100 ">
            <div className="flex flex-col justify-center gap-10 items-center w-full">
              <h1 className="text-5xl font-bold text-start ">Nossos Clientes</h1>
              <span className="mt-10 md:mt-0 md:text-center text-base md:text-lg text-zinc-300 font-normal max-w-[580px]">
                Temos o orgulho de colaborar com diversas empresas inovadoras e líderes em seus setores.
                Nossa dedicação em fornecer soluções digitais personalizadas e eficazes nos permitiu construir parcerias duradouras e de sucesso.
                Aqui estão alguns dos nossos clientes que confiaram em nós para transformar suas ideias em realidade.
              </span>
            </div>
            <SlideCustomers />
          </div>
          <div className="mt-72 w-full flex items-center justify-center">
            <ButtonContact />
          </div>
        </div>
      </section>

      <section className="py-16" id='plans'>
        <div className="mx-auto container flex flex-col px-3 items-center justify-center">
          <div className="flex flex-col items-center justify-center mt-10 gap-5">
            <h1 className="text-3xl md:text-4xl font-bold text-center md:text-start">Planos Personalizados para Gestão de Tráfego Pago</h1>
            <p className="text-center text-base md:text-lg text-zinc-600 max-w-2xl ">
              Descubra o potencial do tráfego pago com nossos planos personalizados. Potencialize sua presença online e alcance seu público-alvo de forma estratégica e eficaz.
            </p>
            <div className="grid grid-flow-row  md:grid-cols-3 gap-7 mt-5">
              {plansTp.map((plan, index) => (
                <CardPlans
                  key={index}
                  title={plan.title}
                  desc={plan.desc}
                  value={plan.value}
                  duration={plan.duration}
                  benefits={plan.benefits}
                />
              ))}
            </div>
          </div>
          <div className="flex flex-col items-center justify-center mt-10 gap-5">
            <h1 className="text-3xl md:text-4xl font-bold text-center md:text-start"> Nossos Planos Exclusivos para Desenvolvimento de Site </h1>
            <p className="text-center text-base md:text-lg text-zinc-600 max-w-2xl ">
              Todos os nossos sites são desenvolvidos com Next.js e React, garantindo máxima eficiência, escalabilidade e qualidade. Nossa abordagem moderna e otimizada proporciona sites rápidos e responsivos, perfeitamente adaptados às necessidades do seu negócio.
            </p>
            <div className="grid grid-flow-row  md:grid-cols-3 gap-7 mt-5">
              {plansSt.map((plan, index) => (
                <CardPlans
                  key={index}
                  title={plan.title}
                  desc={plan.desc}
                  value={plan.value}
                  duration={plan.duration}
                  benefits={plan.benefits}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 container mx-auto px-3 md:px-20 flex justify-center">
        <div className="bg-bottom bg-cover md:bg-top bg-no-repeat max-w-[1120px] w-full h-[700px] bg-[url('../../public/image/background/bg-wpp-mobile.png')] md:bg-[url('../../public/image/background/bg-wpp.png')] rounded-3xl flex md:h-[500px] items-start justify-center md:items-center md:justify-end shadow-lg">
          <div className="md:w-1/2 h-1/2 w-full md:h-full flex flex-col gap-10 items-start justify-center px-10 pt-10 md:pt-0">
            <p className="text-zinc-50 font-bold text-4xl md:text-5xl">PRECISA DE UM <span className="text-green-500">SISTEMA WEB</span> SOB MEDIDA?</p>
            <span className="text-zinc-300 text-lg md:text-xl">Estamos prontos para entender o seu negócio e oferecer soluções personalizadas.</span>
            <a
              onClick={() =>
                sendMensage(
                  5541992652259,
                  "Olá! Vim através do site Sgaria Tech, Preciso de um Sistiema Web sob medida."
                )
              }
              className="cursor-pointer shadow-lg hover:shadow-inner hover:shadow-zinc-800 flex items-center justify-center gap-2 text-sm sm:text-base bg-green-600 hover:bg-green-600/95 transition-all font-bold text-zinc-50 py-3 px-5 rounded-full"
            >
              <p className="font-bold">
                Solicitar um Orçamento Personalizado
              </p>
              <WhatsappLogo className="size-5 font-bold" />
            </a>
          </div>
        </div>
      </section>

      {/* <section>
        DEPOIMENTOS
      </section> */}

      <section className="bg-zinc-50 py-16" id="about">
        <div className="container mx-auto flex flex-col-reverse md:flex-row gap-10 px-3">
          <div className="flex flex-col items-center justify-center md:items-start gap-8  md:w-1/2 ">
            <h1 className="flex md:text-5xl text-4xl text-start md:text-start font-semibold ">
              Conheça o <br /> Fundador e CEO
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
                  className="flex cursor-pointer flex-row transition-all items-center gap-2 text-red-600/70 hover:text-red-600"
                >
                  <GitHubLogoIcon className="size-6" />
                  <p className="h-6 font-semibold hover:border-b-[1px] hover:border-red-600">
                    GabrielSgaria
                  </p>
                </Link>
                <Link
                  target="blank"
                  href="https://www.linkedin.com/in/gabriel-sgaria/"
                  className="flex cursor-pointer transition-all  flex-row items-center gap-2 text-red-600/70 hover:text-red-600"
                >
                  <LinkedInLogoIcon className="size-6" />
                  <p className="h-6 font-semibold hover:border-b-[1px] hover:border-red-600">
                    gabriel-sgaria
                  </p>
                </Link>
                <Link
                  target="blank"
                  href="https://www.instagram.com/_gabrielsgaria"
                  className="flex cursor-pointer transition-all  flex-row items-center gap-2 text-red-600/70 hover:text-red-600"
                >
                  <InstagramLogoIcon className="size-6" />
                  <p className="h-6 font-semibold hover:border-b-[1px] hover:border-red-600">
                    @_gabrielsgaria
                  </p>
                </Link>
                <Link
                  target="blank"
                  href="https://www.instagram.com/sg.sites/"
                  className="flex cursor-pointer transition-all  flex-row items-center gap-2 text-red-600/70 hover:text-red-600"
                >
                  <InstagramLogoIcon className="size-6" />
                  <p className="h-6 font-semibold hover:border-b-[1px] hover:border-red-600">
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
              src={`https://sa-east-1.graphassets.com/clwqlca22006e07lv6chcfoo8/clxkg2emp03uk07ln5x1owebp`}
              alt="CEO Image"
              quality={100}
              priority={true}
              className="w-[550px] h-[450px] rounded-xl object-cover shadow-xl object-top"
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
        <Footer />
      </section>
    </main >
  );
}
