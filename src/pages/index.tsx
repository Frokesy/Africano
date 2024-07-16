import About from "../components/About";
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
    </div>
  );
};

export default Home;
