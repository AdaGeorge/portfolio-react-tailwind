import React from "react";
import mePic from "../../assets/aboutMe/ada1.jpg";
import CommentCard from "./CommentCard";

const AboutMeScreen = () => {
  return (
    <>
      <div className='bg-p-clear relative overflow-hidden w-screen h-64 -z-10 bg-[url("https://www.goodfreephotos.com/albums/other-landscapes/pink-sunset-on-the-beach-of-castillo-en-el-mar.jpg")] bg-no-repeat bg-cover bg-center'>
        {/* <img 
        className='w-screen object-cover object-bottom'
        src={playa} alt="" /> */}
        <div className="absolute bottom-7 left-11 overflow-hidden lg:ml-20 font-sans">
          <h3 className="text-2xl text-black bg-p-clear opacity-50 sm:py-2 py-5 px-32 rounded-md">
            ABOUT ME
          </h3>
        </div>
      </div>
      <article className="md:columns-2 lg:m-auto lg:my-20 my-20 sm:m-20 max-w-screen-lg">
        <p className="font-sans">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla mattis,
          magna ut rhoncus fermentum, nisl purus semper dui, in mollis ante enim
          nec elit. Sed pharetra velit at urna pharetra auctor. Mauris in ipsum
          ut lacus cursus dignissim. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Etiam eu imperdiet justo, sed ultricies velit.
          Vestibulum pharetra aliquam rhoncus. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Nulla mattis, magna ut rhoncus fermentum,
          nisl purus semper dui, in mollis ante enim nec elit. Sed pharetra
          velit at urna pharetra auctor. Mauris in ipsum ut lacus cursus
          dignissim.
        </p>
        <span className="flex justify-end text-4xl mt-24 font-dancing">
          Ada George
        </span>
      </article>
      <article className="bg-p-dark p-20 ">
        <div className="p-20 flex max-w-screen-lg m-auto bg-p-clear-2 rounded-lg">
          <div className="bg-m-clear">
            <p className="text-8xl font-dancing text-white">Freedom</p>
            <p className="font-sans">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              mattis, magna ut rhoncus fermentum
            </p>
          </div>
          <div className="w-1/2  overflow-hidden">
            <img className="object-fill" src={mePic} alt="" />
          </div>
        </div>
      </article>
      <section className="max-w-screen-lg m-auto my-20">
        <h3 className="text-5xl text-center text-s-dark drop-shadow-[0_0_3px_rgba(0,0,0,0.25)] my-6 max-w-md leading-relaxed mx-auto mb-16 max-sm:text-4xl max-sm:mx-8">What People says about me</h3>
        <div className="flex max-md:flex-col max-md:items-center gap-10 m-auto">
          <CommentCard
            comment={
              "Working with Ada is a rewarding experience, she is always looking to do a good job and make improvements in whatever she does."
            }
            author={"Humberto Rocha"}
            rol={"former employer"}
          />
          <CommentCard
            comment={
              "She has clear and concise proposals on how to support and make any project grow."
            }
            author={"Guillermo Vidal"}
            rol={"former coworker"}
          />
          <CommentCard
            comment={
              "Miss Adashi has leadership characteristics, needs-solving skills, punctuality and is characterized by her communication skills."
            }
            author={"Jonnathan Salas"}
            rol={"former coworker"}
          />
        </div>
      </section>
    </>
  );
};

export default AboutMeScreen;
