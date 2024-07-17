import About from "../components/About";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Gallery from "../components/Gallery";
import Header from "../components/Header";
import Hero from "../components/Hero";
import SectionOne from "../components/SectionOne";
import SectionTwo from "../components/SectionTwo";

const Home = () => {
  return (
    <div className="bg-[#000] min-h-[100vh] text-[#fff]">
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
