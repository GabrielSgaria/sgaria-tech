import { RocketLaunch } from "@phosphor-icons/react";

interface CardServicesProps {
  icon: JSX.Element;
  textTitle: string;
  textContent: string;
}

export function CardServices({ icon, textTitle, textContent }: CardServicesProps) {
  return (
    <div
      className="hover-icon w-full md:w-[340px] md:h-[250px] rounded-xl border shadow-sm border-zinc-950/20 bg-zinc-50 p-2 flex flex-col justify-around hover:shadow-xl hover:shadow-blue-400/80 hover:transition-all hover:bg-zinc-100"
    >
      <div className="flex flex-col items-center justify-start gap-5 mx-5">
        <div className="text-zinc-900  h-10 items-center justify-start flex">
          <div className="icon-card p-2 text-5xl rounded-full mt-2 transition-all w-full">
            {icon}
          </div>
        </div>
        <h1 className="text-zinc-900 font-bold text-lg md:text-xl uppercase text-center w-full justify-start">
          {textTitle}
        </h1>
      </div>
      <p className="text-zinc-600 text-start text-sm md:text-base mx-5">
        {textContent}
      </p>
    </div>
  );
}
