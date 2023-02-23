import React from 'react'
import ButtonPrimary from '../buttons/ButtonPrimary'
import ButtonSecondary from '../buttons/ButtonSecondary'
import { AiOutlineGithub } from "react-icons/ai";

const ProjectCard = ({srcImg, altImg, description, techs, linkWeb}) => {
  return (
    <article className='relative overflow-hidden max-w-xs p-2 bg-s-clear rounded-md'>
        <img src={srcImg} alt={altImg} />
        <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden opacity-0 transition duration-700 ease-in-out bg-gradient-to-r from-p-clear-2 via-s-clear to-m-clear hover:opacity-100 focus:opacity-100 focus-visible:opacity-100 text-center rounded-md">
        <p className='my-6 px-6'>{description}</p>
        <p className='mb-8 px-7'>{techs}</p>
        <div className='translate-y-[100%]'>
        <ButtonPrimary btnName={'See more'}/>
        <ButtonSecondary btnName={'Deployed Project'} linkWeb={linkWeb}/>
        </div>
        </div>
    </article>
  )
}

export default ProjectCard