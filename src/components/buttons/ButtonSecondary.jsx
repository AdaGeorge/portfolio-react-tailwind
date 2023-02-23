import React from "react";
import { Link } from "react-router-dom";

const ButtonSecondary = ({ btnName, className, link, linkWeb, submitType }) => {

  return (
    submitType ?
      <input 
      type="submit" 
      value={btnName}
      className={
        className
        ? `${className} bg-p-clear border-2 border-solid border-m-clear p-2 rounded-sm mx-2 my-1 text-m-clear hover:opacity-80 cursor-pointer`
        : " bg-p-clear border-2 border-solid border-m-clear p-2 rounded-sm mx-2 my-1 text-m-clear hover:opacity-80 cursor-pointer"
      }
      />
      :
      linkWeb ?
      <a 
      href={linkWeb} 
      className={
        className
        ? `${className} bg-p-clear border-2 border-solid border-m-clear p-2 rounded-sm mx-2 my-1 text-m-clear hover:opacity-80`
        : " bg-p-clear border-2 border-solid border-m-clear p-2 rounded-sm mx-2 my-1 text-m-clear hover:opacity-80"
      }
      target='_blank'>
        {btnName}
      </a>
      :
      <Link
      className={
        className
        ? `${className} bg-p-clear border-2 border-solid border-m-clear p-2 rounded-sm mx-2 my-1 text-m-clear hover:opacity-80`
        : " bg-p-clear border-2 border-solid border-m-clear p-2 rounded-sm mx-2 my-1 text-m-clear hover:opacity-80"
      }
      to={link} 
      >
      {btnName}
      </Link>
      );
    };
    
    export default ButtonSecondary;
