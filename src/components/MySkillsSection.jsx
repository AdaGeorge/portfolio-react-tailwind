import React, { useEffect } from "react";
import { useState } from "react";
import { TagCloud } from "react-tagcloud";
import Modal from "./shared/modals/Modal";

const dataFront = [
  { value: "JavaScript", count: 38, description: 'JavaScript is a scripting language that enables you to create dynamically updating content, control multimedia, animate images, and pretty much everything else.', percent: '89%' },
  { value: "ECMAScript", count: 20, description: 'Is a JavaScript standard intended to ensure the interoperability of web pages across different browsers.', percent: '80%' },
  { value: "React", count: 36, description: 'React is an open source Javascript library designed for creating user interfaces to make it easy to develop single-page applications.', percent: '70%' },
  { value: "Css", count: 38, description: 'CSS is the acronym of “Cascading Style Sheets”. CSS is a computer language for laying out and structuring web pages (HTML or XML).', percent: '90%' },
  { value: "HTML5", count: 33, description: 'HTML stands for Hyper Text Markup Language. HTML is the standard markup language for creating Web pages. HTML describes the structure of a Web page. HTML consists of a series of elements that tell the browser how to display the content.', percent: '90%'  },
  { value: "Tailwind", count: 25, description: 'Tailwind CSS is a utility-first CSS framework designed to enable users to create applications faster and easier. Can be easily applied in HTML code and development flows that allow the weight of CSS code to be greatly optimized', percent: '60%' },
  { value: "Stylus", count: 18, description: 'Stylus is a dynamic style sheet preprocessor language that compiles into cascading style sheets. Its design is influenced by Sass and LESS. It is considered the fourth most widely used CSS preprocessor syntax.', percent: '40%' },
  { value: "Ant Design", count: 18, description: 'Ant Design is a comprehensive design system that includes a complete set of React components.', percent: '60%' },
  { value: "Vite", count: 18, description: 'Vite. js is a rapid development tool for modern web projects. It focuses on speed and performance by improving the development experience.', percent: '50%' },
  { value: "Webpack", count: 18, description: 'Webpack is a free and open-source module bundler for JavaScript. It is made primarily for JavaScript, but it can transform front-end assets such as HTML, CSS, and images if the corresponding loaders are included. Webpack takes modules with dependencies and generates static assets representing those modules.', percent: '50%' },
];

const dataBack = [
  { value: "JavaScript", count: 38, description: 'JavaScript is a scripting language that enables you to create dynamically updating content, control multimedia, animate images, and pretty much everything else.', percent: '89%' },
  { value: "Nodejs", count: 28, description: 'Node.js is a cross-platform, open-source server environment that can run on Windows, Linux, Unix, macOS, and more.', percent: '60%' },
  { value: "Express.js", count: 34, description: 'Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.', percent: '60%' },
  { value: "Php", count: 33, description: 'PHP (recursive acronym for PHP: Hypertext Preprocessor) is a widely-used open source general-purpose scripting language that is especially suited for web development and can be embedded into HTML.', percent: '47%' },
  { value: "Laravel", count: 30, description: 'Laravel is an open-source PHP framework, which is robust and easy to understand. It follows a model-view-controller design pattern.', percent: '45%' },
  { value: "Python", count: 20, description: 'Python is a high-level, general-purpose programming language. Its design philosophy emphasizes code readability with the use of significant indentation. Is dynamically typed and garbage-collected.', percent: '30%' },
];

const MySkillsSection = () => {

  const [hidden, setHidden] = useState(true)
  const [isOpenModal, setIsOpenModal] = useState(false)
  const [infoModal, setInfoModal] = useState({})
  
  useEffect(() => {
    if(window.innerWidth <= 769){
      setHidden(false)
     }
    
  }, [])
  

  const handleBtn = ()=>{
    setHidden(!hidden)
  }

  const customRenderer = (tag, size) => (
    <span
      key={tag.value}
      className="text-s-clear"
      style={{
        fontSize: `${size / 2}em`,
        margin: "5px",
        padding: "5px",
        display: "inline-block",
        cursor: "pointer",
      }}
    >
      {tag.value}
    </span>
  );

  return (
    <section className="bg-s-dark p-12">
      <Modal setIsOpen={setIsOpenModal} isOpen={isOpenModal} infoModal={infoModal}/>
      {
        window.innerWidth <= 769 && <h2 className="text-white text-center pb-10 text-4xl">
        My Skills
      </h2> 
      }
      <div className="flex max-md:flex-col justify-evenly py-4 mt-3">
      <article 
        className={
          hidden ?
          "flex justify-center items-center flex-col" :
          'flex justify-start items-center flex-col '}>
          <h2 className="text-p-clear-2 text-center pb-4 md:px-20 text-3xl border-b-2 border-solid border-p-clear-2">
            Front End
          </h2>
          <TagCloud
            className={hidden ? 'hidden' : 'flex-wrap px-10 max-md:mb-10' }
            style={{ maxWidth: "400px" }}
            minSize={1.5}
            maxSize={3}
            tags={dataFront}
            renderer={customRenderer}
            onClick={(tag) => {
              console.log(tag)
              setInfoModal(tag)
              setIsOpenModal(true)
            }}
          />
        </article>
        <div className=" w-60 h-60 rounded-full bg-p-clear-2 flex justify-center items-center max-md:hidden">
          <div className=" w-56 h-56 rounded-full bg-s-dark flex justify-center items-center">
            <button onClick={handleBtn}>
            <h3 className="text-center text-4xl text-p-clear-2 py-2">SKILLS</h3>
            {hidden && <span className="text-white opacity-40">Click here</span>}
            </button>
          </div>
        </div>
        <article 
        className={
          hidden ?
          "flex justify-center items-center flex-col" :
          'flex justify-start items-center flex-col '}>
          <h4 className="text-p-clear-2 pb-4 md:px-20 text-3xl border-b-2 border-solid border-p-clear-2">
            Back End
          </h4>
          <TagCloud
            className={hidden ? 'hidden' : 'flex-wrap px-10' }
            style={{ maxWidth: "400px" }}
            minSize={1.5}
            maxSize={3}
            tags={dataBack}
            renderer={customRenderer}
            onClick={(tag) => {
              console.log(tag)
              setInfoModal(tag)
              setIsOpenModal(true)
            }}
          />
        </article>
      </div>
    </section>
  );
};

export default MySkillsSection;
