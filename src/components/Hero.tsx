import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Hero = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);  
  return (
    <div
      data-aos="zoom-in"
      data-aos-duration="1000"
      data-aos-offset="200"
      className="bg-[url('/assets/hero.png')] bg-no-repeat bg-cover flex items-center justify-center w-[90vw] mx-auto lg:h-[80vh] h-[30vh]"
    >
      <h2 className="lg:text-[100px] text-[36px] font-monoton ">
        New Africano
      </h2>
    </div>
  );
};

export default Hero;
