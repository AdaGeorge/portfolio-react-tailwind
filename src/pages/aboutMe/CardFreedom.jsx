import React from 'react'
import mePic from "../../assets/aboutMe/ada1.jpg";

const CardFreedom = () => {
  return (
    <article className="relative bg-p-dark p-10 overflow-hidden">
    <div className="absolute left-9 border-2 border-p-clear-2 border-solid h-96 w-96 rotate-45"></div>
    <div className="absolute left-0 border-2 border-p-clear-2 border-solid h-96 w-96 rotate-45"></div>
    <div className="absolute right-9 border-2 border-p-clear-2 border-solid h-96 w-96 rotate-45"></div>
    <div className="absolute right-0 border-2 border-p-clear-2 border-solid h-96 w-96 rotate-45"></div>

    <div className="p-2 flex max-md:flex-col-reverse max-w-screen-md m-auto bg-p-clear-2 rounded-lg shadow-[0_0_15px_rgba(0,0,0)]">
      <div className="md:bg-m-clear h-80 max-md:h-60 relative md:left-16 flex flex-col self-center justify-center">
        <p className="text-8xl max-sm:text-6xl font-dancing absolute top-6 max-md:top-3 text-white drop-shadow-[0_0_3px_rgba(0,0,0,0.25)]">
          Freedom
        </p>
        <p className="font-sans p-6 pt-10 md:pr-10">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
          mattis, magna ut rhoncus fermentum
        </p>
      </div>
      <div className=" md:w-3/4 z-10 md:clippy md:mr-10 md:py-3">
        <img src={mePic} alt="" />
      </div>
    </div>
  </article>
  )
}

export default CardFreedom