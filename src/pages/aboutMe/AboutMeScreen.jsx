import React from "react";
import ArticleAboutMe from "./ArticleAboutMe";
import CardFreedom from "./CardFreedom";
import WhatPeopleSay from "./WhatPeopleSay";

const AboutMeScreen = () => {
  return (
    <>
      <header className='relative overflow-hidden w-screen h-64 max-sm:h-52 -z-10 bg-[url("https://www.goodfreephotos.com/albums/other-landscapes/pink-sunset-on-the-beach-of-castillo-en-el-mar.jpg")] bg-no-repeat bg-cover bg-center drop-shadow-[0_0_3px_rgba(0,0,0,0.25)]'>
        <div className="absolute bottom-7 max-sm:left-2 max-lg:left-10 lg:left-20 lg:ml-20 font-sans">
          <h3 className="text-4xl max-sm:text-2xl text-black bg-p-clear opacity-50 max-sm:py-2 max-sm:px-10 py-5 px-32 rounded-md">
            ABOUT ME
          </h3>
        </div>
      </header>
      <ArticleAboutMe/>
      <CardFreedom/>
      <WhatPeopleSay/>
    </>
  );
};

export default AboutMeScreen;
