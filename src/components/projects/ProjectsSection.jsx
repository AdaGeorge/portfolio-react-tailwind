import React from "react";
import ProjectCard from "./ProjectCard";
import rick from "../../assets/projects/rickandmorty.png";
import ecommerce from "../../assets/projects/ecommerce.png";
import weather from "../../assets/projects/weatherapp.png";
import calculator from "../../assets/projects/calculator.png";

const ProjectsSection = () => {
  return (
    <section className="bg-p-dark py-6">
      <h3 className="text-center text-4xl text-p-clear-2 py-6">My Projects</h3>
      <div className="flex flex-wrap justify-center gap-4 py-10">
        <ProjectCard
          srcImg={rick}
          altImg="rick and morty project image"
          description={`Responsive site where you can search for any location in the serie
          "Rick and Morty" and see all its residents`}
          techs="JavaScript, React, Css, React-hook-form"
          linkWeb={"https://rickandmortyapplocationfinder.netlify.app"}
        />
        <ProjectCard
          srcImg={ecommerce}
          altImg="ecommerce project image"
          description={
            "Responsive electronic commerce site with Neon design. Using Redux Toolkit and React-router-dom"
          }
          techs="JavaScript, React, Css, React-hook-form, Redux Toolkit"
          linkWeb={"https://ecommerce-neon.netlify.app"}
        />
        <ProjectCard
          srcImg={weather}
          altImg="Weather app project image"
          description={
            "Weather app where you can see your location temperature using geolocation"
          }
          techs="JavaScript, React, Css, Geolocation"
          linkWeb={"https://weather-app-ada.netlify.app"}
        />
        <ProjectCard
          srcImg={calculator}
          altImg="Weather app project image"
          description={"Simple calculator with react and useReducer"}
          techs="JavaScript, React, Css, UseReducer"
          linkWeb={"https://calculator-react-usereducer.netlify.app"}
        />
      </div>
    </section>
  );
};

export default ProjectsSection;
