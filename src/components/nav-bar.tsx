'use client'
import Link from 'next/link';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import logoTech from '../../public/image/logoWhiteLetras.png'
import { List, WhatsappLogo } from '@phosphor-icons/react';
import { sendMensage } from '@/lib/utils';

export function NavBar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    const handleScroll = () => {
        setIsVisible(window.scrollY > window.innerHeight);
    };

    const handleMenuToggle = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1024) {
                setIsMenuOpen(false);
            }
        };

        window.addEventListener('resize', handleResize);
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);



    return (
        <header className={`w-full absolute top-0 z-50 ${isMenuOpen ? ' bg-zinc-950 bg-opacity-95' : 'bg-transparent'} `}>
            <div className="shadow-sm bg-transparent py-2">
                <div className="container mx-auto flex flex-row items-center justify-between gap-8 py-3 px-4 sm:px-0 text-base lg:justify-between ">
                    <div className="flex items-center justify-between w-full lg:w-36">
                        <Link href="/" className='w-36'>
                            <Image
                                width={9000}
                                height={9000}
                                quality={100}
                                priority={true}
                                src={logoTech}
                                alt='Logo SgariaTech'
                                className='w-full'
                            />
                        </Link>
                        <List
                            onClick={handleMenuToggle}
                            className="size-8 text-zinc-50 hover:size-9 focus:outline-none lg:hidden"
                        />
                    </div>

                    <nav className={`lg:flex lg:flex-row lg:items-center lg:gap-8 ${isMenuOpen ? 'transition-all duration-500 flex-col flex items-center justify-around absolute top-[75px] left-0 bg-zinc-950 bg-opacity-95 bg w-full mt-[11px] h-[300px] shadow-lg ' : 'hidden'}`}>
                        <Link href="/" onClick={closeMenu} className="cursor-pointer rounded-xl bg-transparent text-zinc-50 transition-all duration-200 font-bold hover:underline">
                            Início
                        </Link>
                        <Link href={`/#services`} onClick={closeMenu} className="cursor-pointer rounded-xl bg-transparent text-zinc-50 transition-all duration-200 font-bold hover:underline">
                            Serviços
                        </Link>
                        <Link href="/#projects" onClick={closeMenu} className="cursor-pointer rounded-xl bg-transparent text-zinc-50 transition-all duration-200 font-bold hover:underline">
                            Portfólio
                        </Link>
                        <Link href="/#plans" onClick={closeMenu} className="cursor-pointer rounded-xl bg-transparent text-zinc-50 transition-all duration-200 font-bold hover:underline">
                            Planos
                        </Link>
                       
                        <Link href="/#quests" onClick={closeMenu} className="cursor-pointer rounded-xl bg-transparent text-zinc-50 transition-all duration-200 font-bold hover:underline">
                            Perguntas Frequentes
                        </Link>
                        <div className={`${isMenuOpen ? 'hidden' : 'h-10 border-l border-zinc-950/20'}`} />

                        <a
                            onClick={() =>
                                sendMensage(
                                    5541992652259,
                                    "Olá! Vim através do site Sgaria Tech!."
                                )
                            }
                            className="cursor-pointer hover:bg-zinc-50 hover:text-zinc-950 flex w-[230px] items-center justify-center gap-2 font-semibold bg-transparent text-sm sm:text-base border border-zinc-600 bg-zinc-950 text-zinc-50 py-2 rounded-full transition-all"
                        >
                            <WhatsappLogo className="size-6" />
                            <p className="h-6 text-base items-center justify-center font-semibold  uppercase">
                                Entrar em contato
                            </p>
                        </a>
                    </nav>
                </div>
            </div>
        </header>
    );
}
