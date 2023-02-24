import ContactSection from "../components/ContactSection";
import Count from "../components/Count";
import HeroSection from "../components/HeroSection";
import MySkillsSection from "../components/MySkillsSection";
import ProjectsSection from "../components/projects/ProjectsSection";
import rosa2 from '../assets/rosa2.jpg'

function HomeScreen() {
  return (
    <>
      <HeroSection />

      <article className="p-20 text-center">
        {/* <p className='text-3xl mb-4' >
          La programación es un arte que engloba a todos los demás
        </p> */}
        <p className="text-3xl mb-4 break-words">
          Programming is an art that encompasses all others
        </p>
        {/* <p className='font-dancing text-2xl'> Si se puede imaginar, se puede programar</p> */}
        <p className="font-dancing text-2xl">
          If you can imagine it, you can program it
        </p>
      </article>
      <MySkillsSection />
      <Count/>
      <div className="relative overflow-hidden w-screen h-64">
        <img className="h-64 object-cover object-top max-lg:object-right-top" src={rosa2} alt="" />
        <div className="absolute top-0 right-0 bottom-0 left-0 overflow-hidden opacity-50 bg-p-clear-2 "> 
          <h3 className="text-center text-6xl text-black font-dancing py-28 max-md:py-20 opacity-100">Lorem ipsum</h3>
        </div>
      </div>
      <ProjectsSection />
      <ContactSection />
    </>
  );
}

export default HomeScreen;
