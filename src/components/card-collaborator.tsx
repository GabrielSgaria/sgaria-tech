import Image from "next/image";

export interface CardsCollaboratorProps {
  srcCollaborator: string;
  altCollaborator: string;
  titleCardCollaborator: string;
  textCardCollaborator: string;
}

export function CardCollaborator({
  srcCollaborator,
  altCollaborator,
  titleCardCollaborator,
  textCardCollaborator,
}: CardsCollaboratorProps) {
  return (
    <div className="w-[160px] sm:w-[230px] h-full flex flex-col gap-4 items-center my-2 sm:my-8">
      <div className="rounded-full w-28 h-28 sm:w-40 sm:h-40 shadow-2xl">
        <Image
          src={srcCollaborator}
          alt={altCollaborator}
          width={400}
          height={400}
          className="rounded-full object-cover w-full h-full"
        ></Image>
      </div>
      <div className="w-full gap-2 items-center flex flex-col">
        <h1 className="uppercase text-center text-neutral-900 bebasNeue text-xl sm:text-2xl leading-6">
          {titleCardCollaborator}
        </h1>
        <p className="text-center text-neutral-900 saira text-lg sm:text-xl leading-7 max-w-[200px]">
          {textCardCollaborator}
        </p>
      </div>
    </div>
  );
}
