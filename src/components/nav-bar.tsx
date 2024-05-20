'use client';
import Link from 'next/link';
import { DotsHorizontalIcon } from '@radix-ui/react-icons';
import { useState } from 'react';
import Image from 'next/image';
import logoTech from '../../public/image/logo.svg';
import { WhatsappLogo } from '@phosphor-icons/react';

export function NavBar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleMenuToggle = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <header className='fixed top-0 z-50 w-full'>
            <div className="shadow-sm bg-zinc-950 border-b border-zinc-500/20">
                <div
                    className={`container mx-auto flex flex-row items-center justify-around sm:justify-between gap-8 py-3 px-4 sm:px-0 text-base lg:px-8 ${isMenuOpen ? 'flex-col' : 'flex-row'}`}
                >
                    <div className="flex h-9 w-9 items-center justify-center lg:hidden">
                        <DotsHorizontalIcon
                            onClick={handleMenuToggle}
                            className="size-8 text-zinc-50 hover:size-9 focus:outline-none lg:hidden"
                        />
                    </div>
                    <div className='w-16'>
                        <Link
                            href="/"
                            onClick={closeMenu}
                            className="item text-xl font-bold  sm:text-2xl text-red-600"
                        >
                            <Image
                                width={9000}
                                height={9000}
                                src={logoTech}
                                alt='Logo SgariaTech'

                            />
                        </Link>
                    </div>
                    <div className='flex justify-end w-full'>

                        <div
                            className={`lg:flex lg:items-center lg:gap-8 ${isMenuOpen ? 'flex' : 'hidden'}`}
                        >
                            <nav className="md:flex-row justify-center">
                                <div
                                    className={`flex min-w-0 flex-row items-center justify-center gap-3 text-lg ${isMenuOpen ? 'flex-col' : 'flex-row'}`}
                                >
                                    <Link
                                        onClick={closeMenu}
                                        href="/"
                                        className="cursor-pointer rounded-xl bg-transparent px-3 py-2 text-zinc-200 transition-all duration-200 hover:bg-zinc-800 font-light"
                                    >
                                        Inicio
                                    </Link>
                                    <Link
                                        onClick={closeMenu}
                                        href="/#studies"
                                        className="cursor-pointer rounded-xl bg-transparent px-3 py-2 text-zinc-200 transition-all duration-200 hover:bg-zinc-800 font-light"
                                    >
                                        Sobre nós
                                    </Link>
                                    <Link
                                        onClick={closeMenu}
                                        href="/#undertaking"
                                        className="cursor-pointer rounded-xl bg-transparent px-3 py-2 text-zinc-200 transition-all duration-200 hover:bg-zinc-800 font-light"
                                    >
                                        Serviços
                                    </Link>
                                    <Link
                                        onClick={closeMenu}
                                        href="/#certificates"
                                        className="cursor-pointer rounded-xl bg-transparent px-3 py-2 text-zinc-200 transition-all duration-200 hover:bg-zinc-800 font-light"
                                    >
                                        Portfólio
                                    </Link>
                                    <Link
                                        onClick={closeMenu}
                                        href="/#certificates"
                                        className="cursor-pointer rounded-xl bg-transparent px-3 py-2 text-zinc-200 transition-all duration-200 hover:bg-zinc-800 font-light"
                                    >
                                        Contato
                                    </Link>
                                </div>
                            </nav>
                        </div>
                    </div>
                    <div className={`${isMenuOpen ? 'hidden' : 'h-10 border-l border-zinc-50/20'}`} />
                    <Link
                        onClick={closeMenu}
                        href="#contatos"
                        className="flex w-[300px] items-center justify-center gap-2 font-semibold bg-transparent text-sm sm:text-base text-zinc-200 py-2 rounded-xl transition-all duration-200 border border-red-600 hover:bg-red-600"
                    >
                        ENTRAR EM CONTATO <WhatsappLogo className='size-5 sm:size-5' />
                    </Link>
                </div>
            </div>
        </header>
    );
}
