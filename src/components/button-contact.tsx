'use client'
import { WhatsappLogo } from '@phosphor-icons/react';
import Link from "next/link";

export function ButtonContact() {
    return (
        <div>
            <Link
                href="#contacts"
                className="flex w-[300px] items-center justify-center gap-2 font-semibold bg-transparent text-sm sm:text-base text-zinc-200 py-2 rounded-xl transition-all duration-200 border border-red-600 hover:bg-red-600"
            >
                ENTRAR EM CONTATO <WhatsappLogo className='size-5 sm:size-5' />
            </Link>
        </div>
    )
}