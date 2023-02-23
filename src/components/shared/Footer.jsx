import React from 'react'
import { FaInstagram  } from "react-icons/fa";
import { AiOutlineFacebook, AiOutlineLinkedin, AiOutlineGithub } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className='bg-p-dark text-white px-2'>
        <div className='py-3 '>
        <h2 className='text-lg ml-2'>Adashi George</h2>
        <p className='font-serif cursor-pointer'>adageorge79@gmail.com</p>
        <p className='font-serif'>+52 2211066608</p>
        </div>
        <div className='flex justify-end text-3xl gap-3 m-5'>
            <FaInstagram className='cursor-pointer'/>
            <AiOutlineFacebook className='cursor-pointer'/>
            <AiOutlineLinkedin className='cursor-pointer'/>
            <AiOutlineGithub className='cursor-pointer'/>
        </div>
        <p className='text-right text-[12px] pb-2'>Copyright &#169; George Adashi 2022</p>
    </footer>
  )
}

export default Footer