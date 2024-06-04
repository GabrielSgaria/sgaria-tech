import { RocketLaunch } from "@phosphor-icons/react";

interface CardServicesProps {
  icon: JSX.Element;
  textTitle: string;
  textContent: string;
}

export function CardServices({ icon, textTitle, textContent }: CardServicesProps) {
  return (
    <div
      className=" relative w-full md:w-[400px] h-[250px] hover-icon rounded-3xl border border-red-600 shadow-md border-zinc-950/20 bg-cover bg-[url('../../public/image/background/home.png')] p-3 flex flex-col justify-around hover:shadow-xl hover:transition-all hover:bg-zinc-100"
    >
      <div className="flex flex-col items-start justify-start gap-5 p-5">
        <div className="icon-card bg-red-600 border-4 border-zinc-50 p-2 text-5xl rounded-3xl transition-all text-zinc-50 w-20 h-20 flex items-center justify-center absolute -top-10 left-4">
          {icon}
        </div>
       
        <h1 className="text-zinc-50 font-bold text-lg lg:text-2xl justify-start items-start text-wrap text-start mt-5">
          {textTitle}
        </h1>
        <p className="text-zinc-200 text-start text-sm lg:text-sm ">
          {textContent}
        </p>
      </div>
    </div>
  );
}
