'use client'
import { RocketLaunch } from "@phosphor-icons/react";

interface CardServicesProps {
    icon: JSX.Element,
    textTitle: string,
    textContent: string
}

export function CardServices({ icon, textTitle, textContent }: CardServicesProps) {
    return (
        <div className="w-[340px] h-[200px] rounded-xl border shadow-sm border-zinc-950/20 bg-zinc-50 p-2 flex flex-col justify-around hover:shadow-xl transition-all hover:bg-zinc-100">
            <div className="flex flex-row items-center justify-center gap-2">
                <div className="text-zinc-900 text-4xl rounded-full">{icon}</div>
                <h1 className="text-zinc-900 font-bold text-xl">{textTitle}</h1>
            </div>
            <p className="text-zinc-600 p-2 text-center text-base">
                {textContent}
            </p>
        </div>
    )
}