"use client";
import Image from "next/image";
import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";

export function AppleCardsCarouselDemo() {
    const cards = data.map((card, index) => (
        <Card key={card.src} card={card} index={index} layout={true} />
    ));

    return (
        (<div className="w-full h-full py-20">
            <h2
                className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 font-sans">
                Какие то рандомные фотки
            </h2>
            <Carousel items={cards} />
        </div>)
    );
}

const DummyContent = () => {
    return (<>
        {[...new Array(3).fill(1)].map((_, index) => {
            return (
                (<div
                    key={"dummy-content" + index}
                    className="bg-[#F5F5F7] p-8 md:p-14 rounded-3xl mb-4">
                    <p
                        className="text-neutral-600 text-base md:text-2xl font-sans max-w-3xl mx-auto">
                        <span className="font-bold text-neutral-700">
                            The first rule of Apple club is that you boast about Apple club.
                        </span>{" "}
                        Keep a journal, quickly jot down a grocery list, and take amazing
                        class notes. Want to convert those notes to text? No problem.
                        Langotiya jeetu ka mara hua yaar is ready to capture every
                        thought.
                    </p>
                    <Image
                        src="https://assets.aceternity.com/macbook.png"
                        alt="Macbook mockup from Aceternity UI"
                        height="500"
                        width="500"
                        className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain" />
                </div>)
            );
        })}
    </>);
};

const data = [
    {
        category: "1",
        title: "XD XD XD", 
        src: "/carousel1.jpeg",
        content: <></>,
    },
    {
        category: "2",
        title: "Нефоры",
        src: "/carousel2.jpg",
        content: <></>,
    },
    {
        category: "3",
        title: "Один Мозг на двоих",
        src: "/carousel3.jpeg",
        content: <></>,
    },

    {
        category: "4",
        title: "ХЗ как коментировать это",
        src: "/carousel4.jpeg",
        content: <></>,
    },
    {
        category: "5",
        title: "Бомжы в ЮГ-2",
        src: "/carousel5.jpg",
        content: <></>,
    },
    {
        category: "6",
        title: "👶👶👶👶🍼🍼🍼🍼🍼",
        src: "/carousel6.jpg",
        content: <></>,
    },
    {
        category: "7",
        title: "Typical kanykey:",
        src: "/carousel7.jpg",
        content: <></>,
    },
];
