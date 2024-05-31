import { ButtonContact } from "@/components/button-contact";
import { CardCollaborator } from "@/components/card-collaborator";
import { CardCounter } from "@/components/counter-up";
import { SectionServices } from "@/components/section-services";
import Image from "next/image";


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
      <section>
        clientes
      </section>

      <section className="bg-zinc-50 container mx-auto">
        <div className="px-10 md:px-20 py-10 mx-auto flex flex-col gap-10 md:flex-row items-center h-full">
          <div className="flex items-center justify-center text-center gap-4 md:items-start md:justify-start md:text-start md:w-[30%] flex-col md:gap-8">
            <h1 className=" text-5xl font-bold">Nossos Serviços</h1>
            <p className="">Transformamos suas ideias em realidade digital através de uma gama completa de soluções empresariais</p>
            <ButtonContact />
          </div>
          <SectionServices />
        </div>
        
      </section>

      <section className="py-16 bg-zinc-100">
        NOSSO PORTFÓLIO
      </section>

      <section className="bg-neutral-100 py-16" id="team">
        <div className="container mx-auto flex flex-col gap-8">
          <div className="flex flex-col items-center justify-around gap-16 sm:flex-row w-full sm:mb-8">
            <div className="flex sm:text-5xl text-4xl  text-center sm:text-start font-semibold bebasNeue">
              CONHEÇA A <br /> NOSSA EQUIPE
            </div>
          </div>
          <div>
            <h1 className="text-center bebasNeue text-xl sm:text-2xl text-neutral-900 ">
              Para além de estereótipos, estilos de vestimenta ou preferências
              musicais, reunimos um time de mentes criativas e abertas.
            </h1>
          </div>
          <div className="flex justify-center items-center">
            <div className="sm:flex grid grid-cols-2 gap-8 sm:flex-row sm:justify-between sm:w-full">
              <CardCollaborator
                srcCollaborator="/image/collaborator/marcely1x1.jpg"
                altCollaborator="Marcely CEO"
                titleCardCollaborator="CEO E ESPECIALISTA GOOGLE MEU NEGÓCIO"
                textCardCollaborator="Marcely Granado Nied, 22 anos. Fotógrafa e especialista em posicionar marcas no Google."
              />
              <CardCollaborator
                srcCollaborator="/image/collaborator/nied.png"
                altCollaborator="Nied CEO"
                titleCardCollaborator="CEO E GROWTH MARKETING"
                textCardCollaborator="Mateus Nied, 26 anos.
            Especialista em Social Media e
            growth Marketing pela FSM."
              />
              <CardCollaborator
                srcCollaborator="/image/collaborator/sgaria1x1.jpeg"
                altCollaborator="Gabriel Sgaria Dev"
                titleCardCollaborator="Desenvolvedor de sistemas"
                textCardCollaborator="Gabriel Sgaria, 26 anos. Desenvolvedor de Sistemas especialista em front-end."
              />
              <CardCollaborator
                srcCollaborator="/image/collaborator/andre1x1.jpg"
                altCollaborator="Andre Gestor de trafego"
                titleCardCollaborator="GESTOR DE TRÁFEGO"
                textCardCollaborator="André Granado, 33 anos. Especialista em anúncios patrocinados Instagram, Facebook e Google ADS."
              />
            </div>
          </div>
        </div>
      </section>
      <section>
        DEPOIMENTOS
      </section>

    </main >
  );
}
