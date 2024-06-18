'use client'
import { sendMensage } from '@/lib/utils';
import { WhatsappLogo } from '@phosphor-icons/react';
import {
  DesktopIcon,
  DoubleArrowDownIcon,
  EnvelopeClosedIcon,
  GitHubLogoIcon,
  InstagramLogoIcon,
  LinkedInLogoIcon,
  RocketIcon,
} from '@radix-ui/react-icons';

import Link from 'next/link';

export function Footer() {
  return (
    <footer id='contatos' className="mt-16 border-t-[1px] border-zinc-200 pb-8 ">
      <div className="container mx-auto mt-16 flex flex-col gap-16 sm:flex-row sm:justify-between sm:gap-0">
        <div className="flex flex-col items-center sm:items-start ">
          <h1 className="text-2xl font-black text-zinc-800 ">
            Informações <br />
            para contato
          </h1>
          <p className="mt-8 max-w-[300px] text-center text-sm text-zinc-500 sm:text-start sm:text-base">
            Sinta-se à vontade para entrar em contato comigo a qualquer momento.
          </p>
          <div className="mt-8 flex flex-col gap-4 text-center sm:items-start sm:justify-start">
            <a
            onClick={() =>
              sendMensage(
                  5541995373052,
                  "Olá! Vim através do site Sgaria Tech."
              )
          }
              target="blank"
              className="flex cursor-pointer items-center justify-center gap-4 text-zinc-800"
            >
              <WhatsappLogo className="size-6" />
              <p className="h-6 items-center  justify-center font-semibold transition-all duration-500 hover:border-b-[1px] hover:border-zinc-800">
                (41) 99537-3052
              </p>
            </a>



            <Link
              target="blank"
              href="mailto:gabriel_sgaria2@outlook.com"
              className="flex cursor-pointer  items-center gap-4 text-zinc-800"
            >
              <EnvelopeClosedIcon className="size-6" />
              <p className="h-6 font-semibold transition-all duration-500 hover:border-b-[1px] hover:border-zinc-800">
                gabriel_sgaria2@outlook.com
              </p>
            </Link>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center sm:items-start ">
          <h1 className="text-2xl font-black text-zinc-800 ">
            Projetos <br />
            recentes
          </h1>
          <ul className="mt-8 flex flex-col gap-4 ">
            <a href="https://www.camiagencia.com.br">
              <li className="h-6 text-center font-semibold transition-all duration-500 hover:border-b-[1px] hover:border-zinc-800 sm:text-start">
                Cami Agencia Criativa
              </li>
            </a>
            <a href="https://www.macenofilms.com.br">
              <li className="h-6 text-center font-semibold transition-all duration-500 hover:border-b-[1px] hover:border-zinc-800 sm:text-start">
                Maceno Films Company
              </li>
            </a>
            <a href="https://www.mdois.com.br">
              <li className="h-6 text-center font-semibold transition-all duration-500 hover:border-b-[1px] hover:border-zinc-800 sm:text-start">
                M2 Agência de Marketing
              </li>
            </a>
            <a href="https://www.volpress.com.br">
              <li className="h-6 text-center font-semibold transition-all duration-500 hover:border-b-[1px] hover:border-zinc-800 sm:text-start">
                Volpress Transportes
              </li>
            </a>
            <a href="https://izackautomoveis.com">
              <li className="h-6 text-center font-semibold transition-all duration-500 hover:border-b-[1px] hover:border-zinc-800 sm:text-start">
                Izack Automóveis
              </li>
            </a>
          </ul>
        </div>
        <div className="flex flex-col items-center sm:items-start">
          <h1 className="text-center text-2xl font-black text-zinc-800 sm:text-start ">
            Atual <br /> disponibilidade
          </h1>
          <p className="mt-8 max-w-[300px] text-center text-sm text-zinc-500 sm:text-start sm:text-base">
            Estou sempre aberto a novos projetos e colaborações, disponível
            imediatamente para explorar novas oportunidades!
          </p>
        </div>
        <div className="flex flex-col items-center sm:items-start">
          <h1 className="text-center text-2xl font-black text-zinc-800 sm:text-start ">
            Nos encontre nas <br />
            redes sociais
          </h1>
          <div className="mt-8 flex flex-col items-center gap-4 sm:items-start">
            {/* <Link
              target="blank"
              href="https://github.com/GabrielSgaria"
              className="flex cursor-pointer flex-row items-center gap-4 text-zinc-800"
            >
              <GitHubLogoIcon className="size-6" />
              <p className="h-6 font-semibold transition-all duration-500 hover:border-b-[1px] hover:border-zinc-800">
                github.com/GabrielSgaria
              </p>
            </Link> */}
            <Link
              target="blank"
              href="https://www.linkedin.com/company/sgaria-tech/"
              className="flex cursor-pointer flex-row items-center gap-4 text-zinc-800"
            >
              <LinkedInLogoIcon className="size-6" />
              <p className="h-6 font-semibold transition-all duration-500 hover:border-b-[1px] hover:border-zinc-800">
              www.linkedin.com/company/sgaria-tech/
              </p>
            </Link>
            <Link
              target="blank"
              href="https://www.instagram.com/sg.sites/"
              className="flex cursor-pointer flex-row items-center gap-4 text-zinc-800"
            >
              <InstagramLogoIcon className="size-6" />
              <p className="h-6 font-semibold transition-all duration-500 hover:border-b-[1px] hover:border-zinc-800">
                @sg.sites
              </p>
            </Link>
          </div>
        </div>
      </div>
      <div className="container mx-auto mt-16 flex h-8 cursor-pointer items-center justify-center space-x-2 text-zinc-500 transition-all  hover:font-semibold hover:text-zinc-950">
        <h1 className="max-w-[300px] text-sm sm:text-start ">
          Desenvolvido por Gabriel Sgaria
        </h1>
        <div>
          <DesktopIcon className="size-4 items-center  " />
        </div>
      </div>
    </footer>
  );
}
