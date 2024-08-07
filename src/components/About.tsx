"use client"
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

//TabData props
type Tab = {
    title: string;
    id: string;
    content: JSX.Element;
}
const TabData: Tab[] = [
    {
        title: "Skills",
        id: "skills",
        content: (
            <ul>
                <li>React.Js</li>
                <li>Next.Js</li>
                <li>Bootstrap</li>
                <li>Tailwind CSS</li>
                <li>Typescript</li>
            </ul>
        )
    },
    {
        title: "Education",
        id: "education",
        content: (
            <ul>
                <li>The Co-Operative University Of Kenya</li>
                <li>Longisa Boys High School</li>
                <li>St. Johns Primary School</li>
            </ul>
        )
    },
    {
        title: "Certifications",
        id: "certifications",
        content: (
            <ul>
                <li>JavaScript Algorithms and Data Structures ~ freeCodeCamp</li>
                <li>Front-End Developer Carrer Path ~ Codecademy.org</li>
                <li>Google Deveoper Student&apos;s Club ~CUK</li>
            </ul>
        )
    }
]

const About = () => {
    const [tab, setTab] = useState("skills");
    const [isPending, startTransition] = useTransition();
//This constant handes Transitions between skills, Education & Certifications Tabs 
    const handleTabChange = (id: string) => {
        startTransition(() => {
            setTab(id);
        });
    };
    return (
        <section className="text-white">
            <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
                <Image
                    src="/images/about-image.png"
                    alt="SETUP"
                    width={500}
                    height={500}
                />
                <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
                    <h2 className="text-4xl font-bold text-white mb-4 ">About Me</h2>
                    <p className="text-base text-white md:text-lg">
                        I&apos;m a front-end developer with a strong focus on building user-friendly and visually appealing web experiences. I have a knack for crafting clean, maintainable, and performant code using modern frameworks like Next.js and React. I&apos;m constantly expanding my skillset, eager to tackle new challenges, and bring innovative ideas to life on the web. <br />
                        &quot;My code doesnt always work, but when it does, I feel like I could conquer the world. Or at least fix another bug 😁&quot;
                    </p>
                    <div className="flex flex-row justify-start mt-8">
                        <TabButton
                            selectTab={() => handleTabChange("skills")}
                            active={tab === "skills"}
                        >
                            {""}
                            Skills{""}
                        </TabButton>
                        <TabButton
                            selectTab={() => handleTabChange("education")}
                            active={tab === "education"}
                        >
                            {""}
                            Education{""}
                        </TabButton>
                        <TabButton
                            selectTab={() => handleTabChange("certifications")}
                            active={tab === "certifications"}
                        >
                            {""}
                            Certifications{""}
                        </TabButton>
                    </div>
                    <div className="mt-8"> {TabData.find((t) => t.id === tab)?.content} </div>
                </div>
            </div>
        </section>
    );
};

export default About;