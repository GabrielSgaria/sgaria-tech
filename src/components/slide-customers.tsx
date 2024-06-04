
'use client'
// @ts-ignore
import { Splide, SplideSlide } from "@splidejs/react-splide";
// @ts-ignore
import "@splidejs/react-splide/css";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import Image from "next/image";



export function SlideCustomers() {
    return (
        <div className="absolute z-20 bottom-36 ">
            <Splide
                options={{
                    type: "loop",
                    focus: "center",
                    autoPlay: "play",
                    arrows: false,
                    pagination: false,
                    drag: "free",
                    gap: 120,
                    padding: 180,
                    autoWidth: true,
                    autoHeight: true,
                    perPage: 1,
                    autoScroll: {
                        speed: 1,
                        autoStart: true,
                    },
                }}
                extensions={{ AutoScroll }}
            >
                <SplideSlide className="flex items-center">
                    <Image
                        width={9000}
                        height={9000}
                        quality={100}
                        alt=""
                        src='/image/customers/fp.png'
                        className="w-16 max-w-16 md:w-24 md:max-w-24 opacity-65 hover:opacity-100 saturate-0 hover:saturate-100"
                    />
                </SplideSlide>
                <SplideSlide className="flex items-center">
                    <Image
                        width={9000}
                        height={9000}
                        quality={100}
                        alt=""
                        src='/image/customers/izack-automoveis.png'
                        className="w-16 max-w-16 md:w-24 md:max-w-24 opacity-65 hover:opacity-100 saturate-0 hover:saturate-100"
                    />
                </SplideSlide>
                <SplideSlide className="flex items-center">
                    <Image
                        width={9000}
                        height={9000}
                        quality={100}
                        alt=""
                        src="/image/customers/kf.png"
                        className="w-16 max-w-16 md:w-24 md:max-w-24 opacity-65 hover:opacity-100 saturate-0 hover:saturate-100 rounded-md"
                    />
                </SplideSlide>
                <SplideSlide className="flex items-center">
                    <Image
                        width={9000}
                        height={9000}
                        quality={100}
                        alt=""
                        src="/image/customers/m2.png"
                        className="w-16 max-w-16 md:w-24 md:max-w-24 opacity-65 hover:opacity-100 saturate-0 hover:saturate-100"
                    />
                </SplideSlide>
                <SplideSlide className="flex items-center">
                    <Image
                        width={9000}
                        height={9000}
                        quality={100}
                        alt=""
                        src="/image/customers/ripinhais.png"
                        className="w-16 max-w-16 md:w-24 md:max-w-24 opacity-65 hover:opacity-100 saturate-0 hover:saturate-100"
                    />
                </SplideSlide>
                <SplideSlide className="flex items-center">
                    <Image
                        width={9000}
                        height={9000}
                        quality={100}
                        alt=""
                        src="/image/customers/volpress.png"
                        className="w-16 max-w-16 md:w-24 md:max-w-24 opacity-65 hover:opacity-100 saturate-0 hover:saturate-100"
                    />
                </SplideSlide>
                <SplideSlide className="flex items-center">
                    <Image
                        width={9000}
                        height={9000}
                        quality={100}
                        alt=""
                        src="/image/customers/maceno-films-company.png"
                        className="w-16 max-w-16 md:w-24 md:max-w-24 opacity-65 hover:opacity-100 saturate-0 hover:saturate-100 "
                    />
                </SplideSlide>
                <SplideSlide className="flex items-center">
                    <Image
                        width={9000}
                        height={9000}
                        quality={100}
                        alt=""
                        src="/image/customers/agencia-cami.png"
                        className="w-16 max-w-16 md:w-24 md:max-w-24 opacity-65 hover:opacity-100 saturate-0 hover:saturate-100"
                    />
                </SplideSlide>
            </Splide>
        </div>

    )
}