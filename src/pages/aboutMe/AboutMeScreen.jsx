import React from "react";
import mePic from "../../assets/aboutMe/ada1.jpg";

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
      <article className="bg-p-dark p-20 my-2">
        <div className="p-20 relative max-w-screen-lg m-auto bg-p-clear">
          <div className="bg-m-clear w-3/4">
            <h2 className="text-8xl font-dancing text-white">Freedom</h2>
            <p className="font-sans ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              mattis, magna ut rhoncus fermentum
            </p>
          </div>
          <div className="border-4 border-p-clear w-36 h-56 absolute top-10 right-20 rounded-rad rotate-[15deg] overflow-hidden">
            <img
              className="object-fill"
              src={mePic}
              alt=""
            />
          </div>
        </div>
      </article>
    </>
  );
};

export default AboutMeScreen;
