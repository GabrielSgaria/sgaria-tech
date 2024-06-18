/* eslint-disable react/no-unescaped-entities */
import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDownIcon } from "@radix-ui/react-icons";

export function AccordionQuestions() {
    return (


        <Accordion.Root
            className="rounded-md w-full sm:mx-1 bg-cover bg-[url('../../public/image/background/home.png')] text-neutral-100 shadow-2xl text-center"
            type="single"
            collapsible
            id="quests"
        >
            <Accordion.Item value="item-1">
                <Accordion.Trigger className="AccordionTrigger flex flex-row justify-between w-full items-center p-4 rounded-md ">
                    <span className="font-black text-lg sm:text-xl w-full text-start">
                        Quais serviços vocês oferecem?
                    </span>
                    <ChevronDownIcon
                        className="AccordionChevron size-8"
                        aria-hidden
                    />
                </Accordion.Trigger>
                <Accordion.Content className="AccordionContent py-4 px-3 saira text-base text-neutral-100 bg-zinc-900/45 text-justify">
                    <p>
                        Nós oferecemos uma gama completa de serviços digitais, incluindo o desenvolvimento de sites e landing pages personalizadas,
                        criação de sistemas web sob medida, implementação de soluções de automação de processos,
                        e gestão estratégica de tráfego pago para aumentar a visibilidade e conversão da sua marca.
                    </p>
                </Accordion.Content>
            </Accordion.Item>

            <Accordion.Item value="item-2">
                <Accordion.Trigger className="AccordionTrigger flex flex-row justify-between w-full items-center p-4 border-t rounded-md border-solid border-zinc-950/45">
                    <span className="font-bold text-lg sm:text-xl w-full text-start">
                        Como funciona o processo de desenvolvimento de um site ou sistema web?
                    </span>
                    <ChevronDownIcon
                        className="AccordionChevron size-8"
                        aria-hidden
                    />
                </Accordion.Trigger>
                <Accordion.Content className="AccordionContent py-4 px-3 saira text-base text-neutral-100 bg-zinc-900/45 text-justify">
                    <p>
                        Nosso processo de desenvolvimento começa com uma reunião de consultoria para entender suas necessidades e objetivos.
                        Em seguida, criamos um plano detalhado e desenvolvemos o design e a funcionalidade do site ou sistema. Você terá revisões periódicas durante o desenvolvimento e, após a conclusão,
                        fornecemos suporte contínuo e manutenção.
                    </p>
                </Accordion.Content>
            </Accordion.Item>

            <Accordion.Item value="item-3">
                <Accordion.Trigger className="AccordionTrigger  flex flex-row justify-between w-full items-center p-4 border-t rounded-md border-solid border-zinc-950/45">
                    <span className="font-black text-lg sm:text-xl w-full text-start">
                        Quanto tempo leva para desenvolver um site ou sistema web?
                    </span>
                    <ChevronDownIcon
                        className="AccordionChevron size-8"
                        aria-hidden
                    />
                </Accordion.Trigger>
                <Accordion.Content className="AccordionContent py-4 px-3 saira text-base text-neutral-100 bg-zinc-900/45 rounded-md text-justify">
                    <p>
                        O tempo de desenvolvimento varia conforme a complexidade e os requisitos específicos do projeto. Em média, um site pode levar de 1 a 2 semanas,
                        enquanto sistemas web mais complexos podem levar de 1 a 4 meses. Fornecemos um cronograma detalhado após a análise do seu projeto.
                    </p>
                </Accordion.Content>
            </Accordion.Item>

            <Accordion.Item value="item-4">
                <Accordion.Trigger className="AccordionTrigger  flex flex-row justify-between w-full items-center p-4 border-t rounded-md border-solid border-zinc-950/45">
                    <span className="font-black text-lg sm:text-xl w-full text-start">
                        O que é automação de processos e como pode beneficiar minha empresa?
                    </span>
                    <ChevronDownIcon
                        className="AccordionChevron size-8"
                        aria-hidden
                    />
                </Accordion.Trigger>
                <Accordion.Content className="AccordionContent py-4 px-3 saira text-base text-neutral-100 bg-zinc-900/45 rounded-md text-justify">
                    <p>
                        A automação de processos envolve o uso de tecnologia para executar tarefas repetitivas e demoradas de forma automática.
                        Isso pode aumentar a eficiência operacional, reduzir erros, economizar tempo e custos, e permitir que sua equipe se concentre em atividades estratégicas e de maior valor.
                    </p>
                </Accordion.Content>
            </Accordion.Item>

            <Accordion.Item value="item-5">
                <Accordion.Trigger className="AccordionTrigger  flex flex-row justify-between w-full items-center p-4 border-t rounded-md border-solid border-zinc-950/45">
                    <span className="font-black text-lg sm:text-xl w-full text-start">
                        Como vocês gerenciam campanhas de tráfego pago?
                    </span>
                    <ChevronDownIcon
                        className="AccordionChevron size-8"
                        aria-hidden
                    />
                </Accordion.Trigger>
                <Accordion.Content className="AccordionContent py-4 px-3 saira text-base text-neutral-100 bg-zinc-900/45 text-justify">
                    <p>
                        Nosso gerenciamento de campanhas de tráfego pago inclui a criação de estratégias personalizadas,
                        configuração e otimização de anúncios, monitoramento contínuo e ajustes para maximizar o retorno sobre o investimento (ROI).
                        Utilizamos plataformas como Google Ads, Facebook Ads e outras redes sociais para atrair clientes qualificados.
                    </p>
                </Accordion.Content>
            </Accordion.Item>

            <Accordion.Item value="item-6">
                <Accordion.Trigger className="AccordionTrigger  flex flex-row justify-between w-full items-center p-4 border-t rounded-md border-solid border-zinc-950/45">
                    <span className="font-black text-lg sm:text-xl w-full text-start">
                        Oferecem suporte e manutenção após a entrega do projeto?
                    </span>
                    <ChevronDownIcon
                        className="AccordionChevron size-8"
                        aria-hidden
                    />
                </Accordion.Trigger>
                <Accordion.Content className="AccordionContent py-4 px-3 saira text-base text-neutral-100 bg-zinc-900/45 rounded-md text-justify">
                    <p>
                        Sim, oferecemos suporte e manutenção contínuos após a entrega do projeto.
                        Isso inclui atualizações regulares, correção de bugs, e assistência técnica para garantir que seu site ou sistema web continue funcionando de maneira eficiente e segura.
                    </p>
                </Accordion.Content>
            </Accordion.Item>

        </Accordion.Root>

    );
}
