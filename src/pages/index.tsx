import Header from "../components/Header";
import Hero from "../components/Hero";
import SectionOne from "../components/SectionOne";

const Home = () => {
  return (
    <div className="bg-[#000] min-h-[100vh] text-[#fff]">
      <Header />
      <Hero />
      <SectionOne />
    </div>
  );
};

export default Home;
