"use client";

import React from "react";
import { ContainerScroll } from "../ui/container-scroll-animation";
import Image from "next/image";
import { Compare } from "../ui/compare";

export function HeroScrollDemo() {
    return (
        (<div className="flex flex-col overflow-hidden">
            <ContainerScroll
                titleComponent={
                    <>
                        <h1 className="text-4xl font-semibold text-black dark:text-white">
                            Меня зовут YA3  <br />
                            <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                                Цау цау цау
                            </span>
                        </h1>
                    </>
                }>
                <Compare
                    firstImage="/raslan.jpg"
                    secondImage="https://i0.wp.com/anthill.kokrash.com/wp-content/uploads/2024/06/ya3_1.jpg?zoom=2&resize=750%2C370&ssl=1"
                    firstImageClassName="object-cover object-left-top w-full"
                    secondImageClassname="object-cover object-left-top w-full"
                    className="w-full h-full rounded-[22px] md:rounded-lg"
                    slideMode="hover"
                    autoplay={true} />
            </ContainerScroll>
        </div>)
    );
}
