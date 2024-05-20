'use client'
import { RocketLaunch } from "@phosphor-icons/react";
import { CardServices } from "./cards-services";

export function SectionServices() {
    return (

        <div className="grid grid-flow-row grid-cols-2 gap-x-16 gap-y-4">
            <CardServices
                icon={<RocketLaunch />}
                textTitle="SITES INSTITUCIONAIS"
                textContent="Desenvolvemos sites personalizados que combinam design atraente com funcionalidade robusta, garantindo uma presença online profissional e eficaz."
            />
            <div className="mt-10">

             <CardServices
                icon={<RocketLaunch />}
                textTitle="SITES INSTITUCIONAIS"
                textContent="Desenvolvemos sites personalizados que combinam design atraente com funcionalidade robusta, garantindo uma presença online profissional e eficaz."
            />
            </div>
             <CardServices
                icon={<RocketLaunch />}
                textTitle="SITES INSTITUCIONAIS"
                textContent="Desenvolvemos sites personalizados que combinam design atraente com funcionalidade robusta, garantindo uma presença online profissional e eficaz."
            />
            <div className="mt-10">
             <CardServices
                icon={<RocketLaunch />}
                textTitle="SITES INSTITUCIONAIS"
                textContent="Desenvolvemos sites personalizados que combinam design atraente com funcionalidade robusta, garantindo uma presença online profissional e eficaz."
            />

            </div>
        </div>

    )
}


