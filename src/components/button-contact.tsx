'use client'
import { WhatsappLogo } from '@phosphor-icons/react';
import Link from "next/link";

export function ButtonContact() {
    return (
        <div>
            <Link
                href="#contacts"
                className="ButtonContact  transition-colors drop-shadow-md flex w-[265px] items-center justify-center gap-2 font-semibold text-sm sm:text-xl text-zinc-50 py-2 rounded-xl"
            >
                ENTRAR EM CONTATO <WhatsappLogo className='size-5 font-bold' />
            </Link>
        </div>
    )
}
