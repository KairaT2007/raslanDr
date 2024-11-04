import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/ui/timeline";

export function TimelineDemo() {
    const data = [
        {
            title: "Зинат",
            content: (
                <div>
                    <p
                        className="text-neutral-800 dark:text-neutral-200 text-lg md:text-md font-normal mb-8">
                        Котенька, С днём рождения! Сегодня особенный день, и я хочу пожелать тебе всего, о чем ты мечтаешь. Пусть каждый твой день будет наполнен яркими моментами, успехами и вдохновением. Ты сильный, добрый и невероятно талантливый человек, и я верю, что впереди тебя ждут только самые большие свершения и победы. Хочу, чтобы ты знал, как много ты для меня значишь. С тобой рядом я чувствую себя счастливой и уверенной.
                        Я всегда буду рядом, чтобы разделить с тобой радости и трудности.
                        Твоя Зинат
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                        <Image
                            src="/zinat1.jpeg"
                            alt="startup template"
                            width={500}
                            height={500}
                            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]" />
                        <Image
                            src="/zinat3.jpeg"
                            alt="startup template"
                            width={500}
                            height={500}
                            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]" />
                        <Image
                            src="/zinat2.jpeg"
                            alt="startup template"
                            width={500}
                            height={500}
                            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]" />
                        <Image
                            src="/zinat4.jpeg"
                            alt="startup template"
                            width={500}
                            height={500}
                            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]" />
                    </div>
                </div>
            ),
        },
        {
            title: "Нурик",
            content: (
                <div>
                    <p className="text-neutral-800 dark:text-neutral-200 text-lg md:text-md font-normal mb-8">
                        Салам алейкум, Раслан!
                        Поздравляю тебя с днем рождения! Я искренне рад, что ты есть в моей жизни. Ты действительно удивительный человек, и я горжусь тем, что могу назвать тебя своим другом.
                        С каждым годом ты становишься только лучше, и я восхищаюсь твоей целеустремленностью. Ты проживаешь свою молодость с любимой девушкой, и я верю, что это придаёт тебе сил и вдохновения. Все твои планы и мечты обязательно сбудутся, и ты достигнешь тех высот, о которых мечтаешь.
                        Помни, что я всегда рядом и верю в тебя. Желаю тебе крепкого здоровья, удачи и ярких моментов в жизни. Счастливого дня рождения!
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                        <Image
                            src="/nurik1.jpeg"
                            alt="hero template"
                            width={500}
                            height={500}
                            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]" />
                        <Image
                            src="/nurik2.jpeg"
                            alt="feature template"
                            width={500}
                            height={500}
                            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]" />
                        <Image
                            src="/nurik3.jpeg"
                            alt="bento template"
                            width={500}
                            height={500}
                            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]" />
                        <Image
                            src="/nurik4.jpeg"
                            alt="cards template"
                            width={500}
                            height={500}
                            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]" />
                    </div>
                </div>
            ),
        },
        {
            title: "Биатрис",
            content: (
                <div>
                    <p
                        className="text-neutral-800 dark:text-neutral-200 text-lg md:text-md font-normal mb-8">
                        Дорогой Раслан! поздравляю тебя с твоим днём рождения! желаю тебе всего самого наилучшего, крепкого здоровья, счастья в обоих мирах, не болей, не грусти и оставайся всегда таким же классным товарищем. мы с тобой уже знакомы два года, спасибо тебе за эти прекрасные два года! Рада очень нашему знакомству. желаю счастья с Зинат,не расставайтесь 😘
                        Желаю тебе, чтобы каждый день был полон радости, удачи и новых возможностей. Пусть здоровье никогда не подводит, успех всегда сопровождает тебя в каждом деле, а вокруг будут только верные друзья и близкие люди, готовые поддержать в любой момент. Счастья тебе, ярких эмоций, и чтобы все твои мечты стали реальностью!

                        С праздником, мой друг!
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                        <Image
                            src="/bio1.jpeg"
                            alt="hero template"
                            width={500}
                            height={500}
                            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]" />
                        <Image
                            src="/bio2.jpeg"
                            alt="feature template"
                            width={500}
                            height={500}
                            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]" />
                        <Image
                            src="/bio3.jpeg"
                            alt="bento template"
                            width={500}
                            height={500}
                            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]" />
                        <Image
                            src="/bio4.jpeg"
                            alt="cards template"
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
                <div>
                    <p
                        className="text-neutral-800 dark:text-neutral-200 text-lg md:text-md font-normal mb-8">
                        Ассяламу алейкум ва рахмату ва баракатуху, с днем рождения Эль Джалад Раслан Самир Саад Хасн 🥳
                        Желаю тебе счастья, здоровья, удачи, благополучия, личностного роста и спокойной жизни, знакомы мы не долго конечно, но я очень рад что из близких друзей могу назвать тебя, помню как тебя увидел в первый раз, это была доска и нарисованная шаурма с оазиса, подружились мы с тобой из за твоего кикоза 😶‍🌫️, но из за этого я влился вашу компашку и обрел из за тебя много друзей (особенно нашего красавчика), ты очень веселый и смешной человек, если что-то случится и мы перестанем общаться ты знай, что я буду с улыбкой рассказывать другим что у меня такой друг и разные истории связанные с тобой ты однозначно тот человек которого я не забуду, как минимум буду помнить тот самый друг который мне должен денег (шутка не заводись обратно из за этого), еще раз с днем рождения Эль Джалад Раслан Самир Саад Хасн
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                        <Image
                            src="/kairat1.jpeg"
                            alt="hero template"
                            width={500}
                            height={500}
                            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]" />
                        <Image
                            src="/kairat2.jpeg"
                            alt="feature template"
                            width={500}
                            height={500}
                            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]" />
                        <Image
                            src="/kairat3.jpeg"
                            alt="bento template"
                            width={500}
                            height={500}
                            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]" />
                        <Image
                            src="/kairat4.jpg"
                            alt="cards template"
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
