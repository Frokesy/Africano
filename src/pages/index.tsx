import About from "../components/About";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Gallery from "../components/Gallery";
import Header from "../components/Header";
import Hero from "../components/Hero";
import SectionOne from "../components/SectionOne";
import SectionTwo from "../components/SectionTwo";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);  
  return (
    <div className="bg-[#000] min-h-[100vh] text-[#fff] overflow-x-hidden">
      <Header />
      <Hero />
      <SectionOne />
      <SectionTwo />
      <About />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
