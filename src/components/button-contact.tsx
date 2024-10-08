'use client'
import { sendMensage } from '@/lib/utils';
import {WhatsappLogo } from '@phosphor-icons/react';

export function ButtonContact() {
    return (

        <>
            <a
                onClick={() =>
                    sendMensage(
                        5541992652259,
                        "Olá! Vim através do site Sgaria Tech."
                    )
                }
                className="cursor-pointer hover:underline shadow-lg hover:shadow-zinc-800 flex items-center justify-center gap-2 text-sm sm:text-base bg-zinc-950 transition-all font-bold text-zinc-50 py-3 px-5 rounded-full"
            >
                <WhatsappLogo className="size-5 md:size-6" />
                <p className="h-6 text-base items-center justify-center font-semibold transition-all duration-500 uppercase text-nowrap">
                    Entrar em contato
                </p>
            </a>
        </>
    )
}
