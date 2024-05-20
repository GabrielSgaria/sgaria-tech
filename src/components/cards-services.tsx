'use client'
import { RocketLaunch } from "@phosphor-icons/react";

interface CardServicesProps {
    icon: JSX.Element,
    textTitle: string,
    textContent: string
}

export function CardServices({ icon, textTitle, textContent }: CardServicesProps) {
    return (
        <div className="w-[380px] h-[280px] rounded-xl border border-zinc-50 bg-zinc-100 p-3 flex flex-col justify-around hover:shadow-white hover:shadow-xl transition-all hover:bg-zinc-50">
            <div className="flex flex-row items-center justify-center gap-5">
                <div className="text-zinc-900 text-5xl rounded-full p-2">{icon}</div>
                <h1 className="text-zinc-900 font-bold text-xl">{textTitle}</h1>
            </div>
            <p className="text-zinc-600 p-2 text-start text-lg">
                {textContent}
            </p>
        </div>
    )
}