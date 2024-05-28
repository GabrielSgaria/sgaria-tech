import { ButtonContact } from "@/components/button-contact";
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
      <section className="h-screen">

      </section>

    </main >
  );
}
