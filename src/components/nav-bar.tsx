'use client'
import Link from 'next/link';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import logoTech from '../../public/image/logoWhiteLetras.png'
import { List, WhatsappLogo } from '@phosphor-icons/react';

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
        <header className={`fixed top-0 z-50 w-full transition-all duration-500 ${isVisible ? 'bg-zinc-950/95' : 'bg-transparent'}`}>
            <div className="shadow-sm bg-transparent py-2">
                <div className="container mx-auto flex flex-row items-center justify-between gap-8 py-3 px-4 sm:px-0 text-base lg:justify-between">
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
                        <Link href="/#studies" onClick={closeMenu} className="cursor-pointer rounded-xl bg-transparent text-zinc-50 transition-all duration-200 font-bold hover:underline">
                            Sobre nós
                        </Link>
                        <Link href="/#undertaking" onClick={closeMenu} className="cursor-pointer rounded-xl bg-transparent text-zinc-50 transition-all duration-200 font-bold hover:underline">
                            Serviços
                        </Link>
                        <Link href="/#certificates" onClick={closeMenu} className="cursor-pointer rounded-xl bg-transparent text-zinc-50 transition-all duration-200 font-bold hover:underline">
                            Portfólio
                        </Link>
                        <div className={`${isMenuOpen ? 'hidden' : 'h-10 border-l border-zinc-950/20'}`} />
                        <Link href="#contatos" className="hover:bg-zinc-50 flex w-[230px] items-center justify-center gap-2 font-semibold bg-transparent text-sm sm:text-base border border-zinc-50 bg-zinc-300 text-zinc-950 py-2 rounded-xl transition-all duration-200">
                            ENTRAR EM CONTATO <WhatsappLogo className='size-5 sm:size-5' />
                        </Link>
                    </nav>
                </div>
            </div>
        </header>
    );
}
