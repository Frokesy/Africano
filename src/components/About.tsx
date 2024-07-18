const About = () => {
  return (
    <div className="w-[90vw] mx-auto py-[10vh]">
      <h2 className="lg:text-[48px] text-[32px] uppercase font-semibold mb-10">About Us</h2>

      <div className="flex lg:flex-row flex-col justify-between items-center">
        <div className="lg:w-[40%]">
          <img src="/assets/img_seven.png" className="w-[100%]" alt="img" />
        </div>

        <div className="lg:w-[55%]">
          <h2 className="lg:text-[48px] text-[28px] mt-6 lg:mt-0 mb-6 font-semibold">
            New Africano:{" "}
            <span className="text-[#e05d00]">A Taste of Tradition</span>
          </h2>

          <span className="lg:text-[20px]">
            New Africano is your gateway to a vibrant Nigerian culinary
            experience. We serve authentic dishes passed down through
            generations, bursting with fresh flavors and cultural heritage. Come
            savor the taste of Nigeria in a warm and welcoming atmosphere.
          </span>
        </div>
      </div>
    </div>
  );
};

export default About;
