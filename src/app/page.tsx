import { ButtonContact } from "@/components/button-contact";
import { CardCounter } from "@/components/counter-up";
import { SectionServices } from "@/components/section-services";
import Image from "next/image";


export default function Home() {
  return (
    <main>
      <section className="relative h-full py-48 bg-zinc-50 border-zinc-500/50 mb-10 bg-[url('../../public/image/background/home.png')]">
        <div className="flex flex-row container mx-auto gap-16 justify-around items-center ">
          <div className="flex flex-col gap-7 max-w-[780px]">
            <p className="text-5xl font-semibold text-zinc-50 uppercase">
              Especialistas em desenvolvimento para transformar <br />
              <span className=""> sua ideia em realidade digital.</span>
            </p>
            <p className="text-zinc-200">
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
        <div className="px-20 py-10 mx-auto flex flex-row items-center h-full">
          <div className="flex items-start w-[30%] flex-col gap-8">
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
