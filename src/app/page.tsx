import { ButtonContact } from "@/components/button-contact";
import { CardCounter } from "@/components/counter-up";
import { CardServices } from "@/components/cards-services";
import { SectionServices } from "@/components/section-services";

export default function Home() {
  return (
    <main>
      <section className="relative h-full pt-40 bg-zinc-950 border-zinc-500/50 mb-20">
        <div className="flex flex-row container mx-auto gap-16 justify-around items-center ">
          <div className="flex flex-col gap-7 max-w-[780px]">
            <p className="text-5xl font-semibold text-zinc-200 uppercase">
              Especialistas em desenvolvimento para transformar <br />
              <span className="to-red-700 via-red-500 from-red-700 bg-clip-text bg-gradient-to-r text-transparent"> sua ideia em realidade digital.</span>
            </p>
            <p className="text-zinc-200">
              Descubra como podemos impulsionar sua presença online hoje mesmo com criação de sites, gestão de tráfego pago, sistemas web personalizados e automação.
            </p>
            <ButtonContact />
          </div>
          <div className="w-64">

          </div>
        </div>
        <div className="container mx-auto flex justify-center items-center mt-24">
          <div className="grid px-4 grid-flow-row md:grid-flow-col grid-cols-2 sm:grid-cols-4 gap-3">
            <CardCounter
              andMoney=""
              numberCardCounter={80}
              textCardCounter="Das pequenas empresas relataram um aumento de vendas após lançar um novo site."
              porcents="%"
            />
            <CardCounter
              andMoney=""
              numberCardCounter={200000}
              textCardCounter="No último mês, alcançamos 200.000 contas para nossos clientes através de tráfego pago."
              porcents=""
            />
            <CardCounter
              andMoney=""
              numberCardCounter={94}
              textCardCounter="Dos consumidores afirmam que uma presença online aumenta a confiabilidade de uma empresa."
              porcents="%"
            />
            <CardCounter
              andMoney=""
              numberCardCounter={150}
              textCardCounter="Implementamos automações que podem economizar até 150 horas de trabalho manual por mês."
              porcents="hrs"
            />
          </div>
        </div>
      </section>

      <section className="bg-zinc-900 h-screen container mx-auto rounded-2xl px-0">
        <div className="px-20 py-10 mx-auto flex flex-row items-center h-full">
          <div className="flex items-start w-[30%] flex-col gap-5">
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
