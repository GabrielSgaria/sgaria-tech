'use client'
import { Devices, HeadCircuit, PresentationChart, Robot, RocketLaunch } from "@phosphor-icons/react";
import { CardServices } from "./cards-services";

export function SectionServices() {
    return (

        <div className="grid grid-flow-row grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-5 md:gap-y-3">
            <CardServices
                icon={<Devices />}
                textTitle="Sites e Lading Pages"
                textContent="Desenvolvemos sites e landing pages personalizados que combinam design atraente com funcionalidade robusta, garantindo uma presença online profissional e eficaz."
            />
            <div className="md:mt-10 ">

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
            <div className="md:mt-10">
             <CardServices
                icon={<PresentationChart />}
                textTitle="Trafego Pago"
                textContent="Gerenciamos campanhas de tráfego pago para maximizar a visibilidade da sua marca, atraindo clientes qualificados e aumentando suas conversões."
            />

            </div>
        </div>

    )
}


