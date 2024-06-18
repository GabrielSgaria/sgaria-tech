import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

export function sendMensage(numeroTelefone: number, mensagemPadrao: string) {
    var linkWhatsApp =
      "https://wa.me/" +
      numeroTelefone +
      "?text=" +
      encodeURIComponent(mensagemPadrao);

    window.open(linkWhatsApp, "_blank");
  }