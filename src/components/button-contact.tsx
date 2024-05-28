'use client'
import { WhatsappLogo } from '@phosphor-icons/react';
import Link from "next/link";

export function ButtonContact() {
    return (
        <div>
            <Link
                href="#contacts"
                className="hover:bg-zinc-50 flex w-[230px] items-center justify-center gap-2 font-semibold bg-transparent text-sm sm:text-base border border-zinc-300 bg-zinc-300 text-zinc-950 py-2 rounded-xl transition-all duration-200"
            >
                ENTRAR EM CONTATO <WhatsappLogo className='size-5 sm:size-5' />
            </Link>
        </div>
    )
}