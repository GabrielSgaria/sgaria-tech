'use client'
import { Devices, HeadCircuit, PresentationChart, Robot } from "@phosphor-icons/react";
import { CardServices } from "./cards-services";

export function SectionServices() {
    return (

        <div className="columns-2 space-y-10 xl:grid-cols-2 xl:gap-x-12 gap-y-5 xl:gap-y-3 w-full mx-auto">
            <CardServices
                icon={<Devices />}
                textTitle="Lading Pages"
                textContent="Desenvolvemos landing pages personalizadas, garantindo uma presença online profissional e eficaz."
            />
            <CardServices
                icon={<Devices />}
                textTitle="Sites Institucionais"
                textContent="Desenvolvemos sites e landing pages personalizados que combinam design atraente com funcionalidade robusta, garantindo uma presença online profissional e eficaz."
            />
            <CardServices
                icon={<Devices />}
                textTitle="Página de Vendas"
                textContent="Desenvolvemos sites e landing pages personalizados que combinam design atraente com funcionalidade robusta, garantindo uma presença online profissional e eficaz."
            />
            <div className="">

             <CardServices
                icon={<HeadCircuit />}
                textTitle="Sistemas Web"
                textContent="Criamos sistemas web sob medida que otimizam a gestão e operação do seu negócio, integrando as melhores práticas de usabilidade e segurança."
            />
            </div>
             <CardServices
                icon={<Robot />}
                textTitle="Automação de Processos"
                textContent="Implementamos soluções de automação que aumentam a eficiência operacional, reduzindo custos e melhorando a produtividade da sua empresa."
            />
            <div className="">
             <CardServices
                icon={<PresentationChart />}
                textTitle="Trafego Pago"
                textContent="Gerenciamos campanhas de tráfego pago para maximizar a visibilidade da sua marca, atraindo clientes qualificados e aumentando suas conversões."
            />

            </div>
            
        </div>

    )
}


