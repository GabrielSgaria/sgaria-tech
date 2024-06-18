import { fetchHygraphQuery } from "@/lib/fetch-hygraph";
import { PageProjectsData } from "../../../../types/portfolio-info";
import { cn } from "@/lib/utils";
import Image from "next/image";

import { ButtonContact } from "@/components/button-contact";

interface PageJobProps {
    params: {
        slug: string;
    }
}

const colorBgMap: Record<string, string> = {
    'cami-agencia': "bg-cami-agencia",
    'maceno-films-company': 'bg-maceno-films-company',
    'm2-agencia': 'bg-m2-agencia',
    'grupo-fp-sinais': 'bg-grupo-fp-sinais',

}


const getProjectDetails = async (slugProjeto: string): Promise<PageProjectsData> => {

    const query = `
    query MyQuery {
        portfolio(where: {slug: "${slugProjeto}"}) {
            id    
            slug
            title
            description
            imageCapa {
                url
            }
            images {
                    url
            }
        }
    }   
    `;

    const data = await fetchHygraphQuery(query);
    return { portfolio: data?.portfolio || null };

}

export default async function PageJob({ params: { slug } }: PageJobProps) {
    const data = await getProjectDetails(slug);
    const portfolio = data.portfolio;

    if (!portfolio) {
        return <div className="flex text-2xl text-red-600 items-center justify-center h-screen w-full">Projetos não encontrados</div>;
    }


    return (

        <div className={cn(`h-full `, colorBgMap[slug])}>
            <div className="flex container mx-auto py-40 h-full">
                <section className="w-full flex flex-col justify-center items-center px-20 gap-10">
                    <div className="flex flex-col gap-3 items-start w-full pl-5">
                        <h1 className="text-5xl text-zinc-50 font-bold text-start">{portfolio.title}</h1>
                        <p className="text-lg text-zinc-200 max-w-[930px]">{portfolio.description}</p>
                    </div>
                    <div className="w-10/12 rounded-lg">
                        <Image 
                            width={1480}
                            height={690}
                            quality={100}
                            src={portfolio.imageCapa.url}
                            alt={`image ${portfolio.slug}`}
                            className="w-full rounded-lg "
                        />
                    </div>
                    <div className="grid gap-5 grid-cols-1 md:grid-cols-2 w-10/12">
                        {portfolio.images.map((item, index) => (
                            <div key={index} className="shadow-xl w-full">
                                <Image
                                    width={780}
                                    height={780}
                                    quality={100}
                                    src={item.url || ''}
                                    alt={`image ${item}`}
                                    className="object-cover h-full w-full rounded-lg "

                                />
                            </div>
                        ))}
                    </div>
                    <ButtonContact />
                </section>
            </div>
        </div>

    )
}