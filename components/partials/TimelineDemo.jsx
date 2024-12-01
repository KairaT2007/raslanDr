import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/ui/timeline";

export function TimelineDemo() {
    const data = [
        {
            title: "Бема",
            content: (
                <div className="backdrop-blur-sm p-6 rounded-lg ring-4 ring-orange-300 bg-gradient-to-br from-orange-200 to-amber-300">
                    <p
                        className="text-neutral-800 text-lg md:text-md font-medium mb-8 ">
                        С твоим днем принцесса 🎀
                        Желаю много-много любви, здоровья,  приключений и бесконечных денег. Заводи новых друзей, стеби их и копи сплетни.
                        Ты — мой человек, и я рада, что могу делить с тобой все свои лучшие моменты. За 8 лет ты стала для меня не только подгоном со школы, а психологом, братом, моей половинкой и сааамым близком другом.
                        Ты — моя поддержка, мой смех и мой главный источник всех мемов. Я не представляю себя без тебя и тебя без меня. Лучше быть не могло.
                        Обнимаю крепко и безумно ценю ❤️
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                        <Image
                            src="/bema1.jpg"
                            alt="startup template"
                            width={500}
                            height={500}
                            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]" />
                        <Image
                            src="/bema3.jpg"
                            alt="startup template"
                            width={500}
                            height={500}
                            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]" />
                        <Image
                            src="/bema2.jpeg"
                            alt="startup template"
                            width={500}
                            height={500}
                            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]" />
                        <Image
                            src="/bema4.jpeg"
                            alt="startup template"
                            width={500}
                            height={500}
                            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]" />
                    </div>
                </div>
            ),
        },
        {
            title: "Арууке",
            content: (
                <div className="backdrop-blur-sm p-6 rounded-lg ring-4 ring-orange-300 bg-gradient-to-br from-orange-200 to-amber-300">
                    <p
                        className="text-neutral-800 text-lg md:text-md font-medium mb-8 ">
                        Каночка, с твоим днем любимая
                        Я очень очень сильно рада что
                        познакомилась с тобой и общаюсь
                        до нынешних дней, ты мой лучик
                        солнца
                        Хочу пожелать тебе всего всего
                        самого наилучшего, потому что ты
                        достойна только этого, я очень
                        сильно ценю нашу дружбу и тебя
                        Рада что мы с тобой прошли все
                        трудности в наших жизнях и ты
                        стала одним из тех людей кому я
                        могу довериться, рассказать все,
                        смеяться до болей в животе,
                        обсуждать разные темы, ты всегда
                        была тем человеком кому можно
                        высказываться обо всем, кто даст
                        верный совет и будет всегда рядом
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                        <Image
                            src="/aru1.jpeg"
                            alt="startup template"
                            width={500}
                            height={500}
                            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]" />
                        <Image
                            src="/aru2.jpeg"
                            alt="startup template"
                            width={500}
                            height={500}
                            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]" />
                        <Image
                            src="/aru3.jpeg"
                            alt="startup template"
                            width={500}
                            height={500}
                            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]" />
                        <Image
                            src="/bema4.jpg"
                            alt="startup template"
                            width={500}
                            height={500}
                            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]" />
                    </div>
                </div>
            ),
        },
        {
            title: "Жаная",
            content: (
                <div className="backdrop-blur-sm p-6 rounded-lg ring-4 ring-orange-300 bg-gradient-to-br from-orange-200 to-amber-300">
                    <p
                        className="text-neutral-800 text-lg md:text-md font-medium mb-8 ">
                        с твоим днем мой Канывек, люблю тебя сильно будь счастлива моя красотуля 🤍🤍🤍🤍🤍🤍🤍🤍🤍🤍🤍🤍🤍🤍🤍🤍🤍🤍🤍🤍🤍🤍🤍🤍🤍🤍🤍🤍🤍🤍🤍🤍🤍🤍🤍🤍🤍🤍🤍🤍🤍🤍🤍🤍🤍🤍🤍🤍🤍🤍🤍🤍🤍🤍🤍🤍🤍🤍🤍🤍🤍🤍🤍🤍🤍🤍🤍🤍🤍🤍🤍🤍🤍🤍🤍🤍🤍🤍🤍🤍🤍🤍🤍🤍🤍🤍🤍🤍🤍🤍🤍🤍🤍🤍🤍🤍🤍🤍🤍🤍🤍🤍🤍🥺🥺🥺🥺🥺🥺🥺🥺🥺🥺🥺🥺🥺🥺🥺🥺🥺🥺🥺🥺🥺🥺🥺🥺🥺🥺🥺🥺🥺🥺🥺🥺🥺🥺🥺🥺🥺🥺🥺🥺🥺🥺🥺🥺🥺🥺🥺🥺🥺🥺🥺🥺🥺🥺🥺🥺🥺🥺🥺🥺🥺🥺🥺🥺🥺🥺🥺🥺🥺🥺🥺🥺🥺🥺🥺🥺🥺🥺🥺🥺🥺🥺🥺🥺🥺🥺🥺🥺🥺🥺🥺🥺🥺🥺🥺🥺🥺🥺
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                        <Image
                            src="/c2.jpeg"
                            alt="startup template"
                            width={500}
                            height={500}
                            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]" />
                        <Image
                            src="/14.jpeg"
                            alt="startup template"
                            width={500}
                            height={500}
                            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]" />
                        <Image
                            src="/13.jpeg"
                            alt="startup template"
                            width={500}
                            height={500}
                            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]" />
                        <Image
                            src="/aru3.jpeg"
                            alt="startup template"
                            width={500}
                            height={500}
                            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]" />
                    </div>
                </div>
            ),
        },
        {
            title: "Кайрат",
            content: (
                <div className="backdrop-blur-sm p-6 rounded-lg ring-4 ring-orange-300 bg-gradient-to-br from-orange-200 to-amber-300">
                    <p
                        className="text-neutral-800 text-lg md:text-md font-medium mb-8 ">
                        С днем рождения ведьма 🧙‍♀️, тебе исполнилось 17 лет и к сожалению я не могу называть тебя пиздюком (пока что), желаю счастья, здоровья удачи, любви, поменьше обижай пацанов (меня в том числе), побольше пятерок, поменьше мужланов и женоненавистников в твоей жизни, поменьше ссориться с подругами, жить в каеф и быть жаст чил герл, я до сих пор не понимаю как мы вообще заобщались, ты свалилась просто на мою годову с начала 2024 года а уже конец и начало 2025, спасибо тебе большое за твое общение, буллинг и факи, без них я бы уж точно не прожил бы, как ты любишь говорить «это судьба, если бы не я ты бы попал в аварию, заболел, убили, и вообще умер бы от чего еще», в целом спасибо тебе за все, наслаждайся жизнью и с днем рождения Каныкей 🧙‍♀️🧙‍♀️🧙‍♀️🧙‍♀️🧙‍♀️🧙‍♀️🧙‍♀️🧙‍♀️🧙‍♀️🧙‍♀️🧙‍♀️🧙‍♀️🧙‍♀️🧙‍♀️🧙‍♀️🧙‍♀️🧙‍♀️🧙‍♀️🧙‍♀️🧙‍♀️🧙‍♀️🧙‍♀️🧙‍♀️🧙‍♀️🧙‍♀️🧙‍♀️🧙‍♀️🧙‍♀️🧙‍♀️🧙‍♀️🧙‍♀️🧙‍♀️🧙‍♀️🧙‍♀️🧙‍♀️🧙‍♀️🧙‍♀️🧙‍♀️🧙‍♀️🧙‍♀️ у меня особо нет совместных фоток с тобой поэтому вставлю херню какую-то
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                        <Image
                            src="/k1.JPG"
                            alt="startup template"
                            width={500}
                            height={500}
                            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]" />
                        <Image
                            src="/k2.JPG"
                            alt="startup template"
                            width={500}
                            height={500}
                            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]" />
                        <Image
                            src="/k3.JPG"
                            alt="startup template"
                            width={500}
                            height={500}
                            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]" />
                        <Image
                            src="/k4.JPG"
                            alt="startup template"
                            width={500}
                            height={500}
                            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]" />
                    </div>
                </div>
            ),
        },
    ];
    return (
        (<div className="w-full">
            <Timeline data={data} />
        </div>)
    );
}
