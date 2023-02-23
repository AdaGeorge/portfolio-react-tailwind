import React from "react";
import Pic from "../assets/prueba.jpeg";
import ButtonPrimary from "./buttons/ButtonPrimary";
import ButtonSecondary from "./buttons/ButtonSecondary";

const HeroSection = () => {
  return (
    <section className="flex max-lg:flex-col">
      <div className="w-6/12 max-lg:w-screen bg-p-clear">
        <img src={Pic} alt="Hero Pic" />
      </div>
      <article className="grid content-center max-md:h-fit p-5 bg-p-clear w-screen lg:w-6/12">
        <h2 className="text-right font-dancing text-4xl mb-2">Ada George</h2>
        <h3 className="text-right mb-11 ">Front-End Developer</h3>
        <p className="mt-7">Web Developer, Tatto Artist and Traveler.</p>
        <p className="mb-7">
          My passion is to solve problems and give form to ideas
        </p>
        <div className="flex max-md:justify-center max-md:flex-col w-full">
          <ButtonPrimary btnName="Contact Me" link={'/contact'}/>
          <ButtonSecondary btnName="Meet me" link={'/aboutme'}/>
        </div>
      </article>  
    </section>
  );
};

export default HeroSection;
