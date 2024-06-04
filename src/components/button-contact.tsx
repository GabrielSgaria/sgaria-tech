'use client'
import { WhatsappLogo } from '@phosphor-icons/react';
import Link from "next/link";

export function ButtonContact() {
    return (

        <Link
            href="#contacts"
            className="shadow-lg hover:shadow-inner hover:shadow-zinc-800 flex items-center justify-center gap-2 text-sm sm:text-base bg-red-600 hover:bg-red-600/95 transition-all font-bold text-zinc-50 py-3 px-5 rounded-full"
        >
            ENTRAR EM CONTATO <WhatsappLogo className='size-5 font-bold' />
        </Link>

    )
}
