import React from "react";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from '../../assets/logoAG.png'


const navLinks = [{value: "HOME", link: '/'}, {value: "ABOUT ME", link:'/aboutme'}, {value: "PORTFOLIO", link: '/projects'}, {value: "CONTACT", link: '/contact'}, {value: "BLOG", link: 'blog'}];

const Navbar = () => {
  
  const openMenu = () => {
    let link = document.getElementById("links");
    link.classList.toggle("max-md:hidden");
  };

  const links = navLinks.map((link) => {
    return (
      <li className="max-md:m-4 animate-fadeInUp" key={link.value}>
        <Link 
        className="
        cursor-pointer 
        hover:text-m-clear
        max-md:relative
        max-md:after:content-['']
        max-md:after:absolute
        max-md:after:bg-m-clear
        max-md:after:h-[2px]
        max-md:after:w-0
        max-md:after:left-0
        max-md:after:-bottom-2
        max-md:after:duration-300
        max-md:after:hover:w-full
        max-md:after:active:w-full
        " 
        onClick={openMenu} 
        to={link.link}
        >
          {link.value}
        </Link>
      </li>
    );
  });

  return (
    <nav className="flex justify-between content-center p-4 bg-p-clear-2">
      <div
        id="links"
        className=" leading-10
          max-md:hidden 
          max-md:absolute 
          max-md:top-11 
          max-md:left-0
          max-md:h-fit
          bg-p-clear-2 
          max-md:w-screen 
          max-md:opacity-90 
          max-md:text-center
          max-md:text-1xl
          max-md:border-b-2
          max-md:border-p-dark
          max-md:border-solid
          "
      >
        <ul className={`flex max-md:flex-col max-md:mt-20 max-md:mb-20 gap-4`}>
          {links}
        </ul>
      </div>
      <div className="w-20">
        <img src={logo} alt="LOGO" />
      </div>

      <button onClick={openMenu} className="md:hidden">
        <FaBars className="nav-menu" />
      </button>
    </nav>
  );
};

export default Navbar;
