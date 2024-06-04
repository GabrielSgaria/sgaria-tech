'use client'
import { Devices, HeadCircuit, Images, Newspaper, PresentationChart, Robot } from "@phosphor-icons/react";
import { CardServices } from "./cards-services";

export function SectionServices() {
    return (
        <div className="grid grid-flow-row md:grid-cols-3 mx-auto md:gap-x-5 gap-y-14 mt-20">
            <CardServices
                icon={<Images />}
                textTitle="Landing Pages"
                textContent="Criamos landing pages personalizadas que destacam sua marca e capturam leads com eficiência."
            />
            <CardServices
                icon={<Devices />}
                textTitle="Sites Institucionais"
                textContent="Desenvolvemos sites institucionais com design atrativo e funcionalidades avançadas, garantindo uma presença online sólida e profissional."
            />
            <CardServices
                icon={<Newspaper />}
                textTitle="Páginas de Vendas"
                textContent="Projetamos páginas de vendas que convertem visitantes em clientes, utilizando estratégias eficazes de marketing digital."
            />
            <div className="">
                <CardServices
                    icon={<HeadCircuit />}
                    textTitle="Sistemas Web"
                    textContent="Criamos sistemas web personalizados que melhoram a gestão e operação do seu negócio, focando em usabilidade e segurança."
                />
            </div>
            <CardServices
                icon={<Robot />}
                textTitle="Automação de Processos"
                textContent="Implementamos soluções de automação para aumentar a eficiência operacional, reduzir custos e melhorar a produtividade da sua empresa."
            />
            <div className="">
                <CardServices
                    icon={<PresentationChart />}
                    textTitle="Tráfego Pago"
                    textContent="Gerenciamos campanhas de tráfego pago para aumentar a visibilidade da sua marca e atrair clientes qualificados."
                />
            </div>
        </div>
    )
}
