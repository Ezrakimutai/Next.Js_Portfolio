"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

const IntroSection = () => {
  return (
    /**Added animation text slider for skill section 
     * using react-type-animation
    */
    <section className="grid grid-cols-1 lg:grid-cols-12 my-4">
      <div className="col-span-7 place-self-center place-items-center grid lg:place-items-start">
        <h1 className="text-white max-w-2xl mb-4 lg:text-6xl text-4xl font-extrabold">
          <span className="text-transparent text-6xl bg-clip-text bg-gradient-to-r from-blue-500 to-green-600">
            Hello, I'm Ezra Kimutai{" "}
          </span>{" "}
          <br></br>
          <TypeAnimation
            sequence={[
              "Web Developer",
              1000,
              "UI/UX Designer",
              1000,
              "FreeLancer",
              1000,
            ]}
            wrapper="span"
            repeat={Infinity}
            speed={50}
          />
        </h1>
        <p className="text-[#ADB7BE] mb-6 textl-lg lg:text-xl">
          I am a passionate Software Developer who aims at solving real world problems using technology. Advancing my skills and learning new ones is what I enjoy doing the most. Dive deeper into my projects and skills to see what I can bring to the table!
        </p>
        <div>
          <button className="bg-gradient-to-br from-blue-500  to-green-500 hover:bg-slate-200 text-white px-6 py-3 rounded-full mr-4">
            Hire Me
          </button>
          <button className="m-4 bg-gradient-to-br from-blue-500  to-green-500 px-1 py-1  text-white rounded-full">
            <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
              Download CV
            </span>
          </button>
        </div>
      </div>
      <div className="col-span-5 place-self-center mt-4 lg:mt-0">
        <div className="bg-[#181818] lg:w-[400px] lg:h-[400px] w-[250px] h-[250px] rounded-full relative ">
          <Image
            src="/images/memoji3.jpg"
            alt="MEMOJI"
            className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 rounded-full border-4 border-black"
            width={400}
            height={400}
          />
        </div>
      </div>
    </section>
  );
};

export default IntroSection;