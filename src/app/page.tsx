import Image from "next/image";
import logoIcon from '../../public/image/logo.svg'

export default function Home() {
  return (
    <main>
      <section className="relative pb-28 pt-32 bg-gradient-to-bl from-45% from-zinc-950 via-zinc-800 to-zinc-950 border-b border-zinc-500/50">
        <div className="flex flex-row container mx-auto gap-16 justify-around items-center mb-14">
          <div className=" flex flex-col gap-7 max-w-[700px]">
            <h1 className="text-8xl font-extrabold tracking-wider text-zinc-200">SGARIA TECH</h1>
            <p className="text-2xl font-semibold text-zinc-200">
              Especialistas em desenvolvimento de soluções empresarias para transformar <span className="to-red-600 via-red-200 from-red-600 bg-clip-text bg-gradient-to-r text-transparent">sua ideia em realidade digital</span>.
            </p>
            <p className="text-zinc-200">Descubra como podemos impulsionar sua presença online hoje mesmo.</p>
          </div>
          <div className="w-64">
            <Image
              width={9000}
              height={9000}
              src={logoIcon}
              alt="Logo SgariaTech"
            />
          </div>
        </div>
        <div className="absolute w-full h-screen">
          <div className="flex flex-row container mx-auto justify-around">
            <div className="w-96 h-72 bg-zinc-950 text-zinc-200 rounded-t-xl px-4 py-8 flex flex-col gap-7 border-b-2 rounded-b-sm border-zinc-50">
              <h1 className="text-center uppercase text-3xl font-bold">
                sites sob medida
              </h1>
              <p className="text-center text-base">
                Desenvolvemos sites
                personalizados e responsivos
                para destacar
                sua marca na web.
                Do design à funcionalidade,
                oferecemos soluções
                sob medida para
                suas necessidades digitais.
              </p>
            </div>

            <div className="w-96 h-72 bg-zinc-950 text-zinc-200 rounded-t-xl px-4 py-8 flex flex-col gap-7 border-b-2 rounded-b-sm border-zinc-50">
              <h1 className="text-center uppercase text-3xl font-bold">
                Otimização de Desempenho
              </h1>
              <p className="text-center text-base">
                Entregamos o seu site
                com as tecnologias mais
                atualizadas do mercado
              </p>
            </div>

            <div className="w-96 h-72 bg-zinc-950 text-zinc-200 rounded-t-xl px-4 py-8 flex flex-col gap-7 border-b-2 rounded-b-sm border-zinc-50">
              <h1 className="text-center uppercase text-3xl font-bold">
                Manutenção e Suporte
              </h1>
              <p className="text-center text-base">
                Oferecemos serviços contínuos
                de manutenção e suporte
                técnico para garantir que
                seu site funcione perfeitamente.
                Conte conosco para manter
                sua presença online
                confiável e atualizada.
              </p>
            </div>
          </div>
        </div>
      </section>

    </main >
  );
}
