import { sendMensage } from "@/lib/utils";
import { Check, WhatsappLogo } from "@phosphor-icons/react";

interface CardPlansProps {
    title: string,
    desc: string,
    value: string,
    duration: string,
    benefits: string[]
}

export function CardPlans({ title, desc, value, duration, benefits }: CardPlansProps) {
    return (
        <div className="bg-zinc-50 border border-zinc-100 w-full max-w-[420px] h-full rounded-3xl shadow-2xl py-10 px-5 flex flex-col justify-between gap-5">
            <div className="flex flex-col gap-3">
                <h1 className="text-3xl font-bold">{title}</h1>
                <span className="text-lg text-zinc-600">{desc}</span>
                <div className="flex flex-row gap-2 items-end justify-start">
                    <span className="text-3xl font-bold ">{value}</span>
                    <span className="text-lg font-bold">{duration}</span>
                </div>
            </div>
            <ul className="flex flex-col gap-6 mt-10">
                {Object.values(benefits).map((benefit, index) => (
                    <li key={index} className="text-zinc-950 flex items-center justify-start gap-3 text-lg font-medium">
                        <Check className="size-8 p-1 bg-green-600 rounded-xl text-zinc-50" weight="bold" />
                        <span>{benefit}</span>
                    </li>
                ))}
            </ul>
            <div className="w-full">
                <a
                    onClick={() =>
                        sendMensage(
                            5541995373052,
                            `Olá! Vim pelo plano ${title}, que vi no site Sgaria Tech. `
                        )
                    }
                    className="cursor-pointer hover:underline shadow-lg hover:shadow-zinc-800 flex items-center justify-center gap-2 text-sm sm:text-base bg-green-600 transition-all font-bold text-zinc-50 py-3 px-5 rounded-full"
                >
                    <WhatsappLogo className="size-6" />
                    <p className="h-6 text-base items-center justify-center font-semibold transition-all duration-500 uppercase">
                        Entrar em contato
                    </p>
                </a>
            </div>
        </div>
    )
}