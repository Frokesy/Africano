const SectionOne = () => {
  return (
    <div>
      <div
        data-aos="fade-left"
        data-aos-duration="1000"
        data-aos-offset="200"
        id="services"
        className="flex justify-end pt-20"
      >
        <img src="/assets/img_one.png" alt="img" />
      </div>

      <div className="w-[90vw] flex lg:flex-row flex-col justify-between mx-auto mt-20">
        <div
          data-aos="fade-right"
          data-aos-duration="1000"
          data-aos-offset="200"
          className="lg:w-[40%] space-y-10"
        >
          <h2 className="text-[#8c3a00] lg:text-[48px] text-[36px] font-monoton">
            Dip into tradition
          </h2>
          <p>
            Welcome to New Africano, where we savour the rich, wholesome flavors
            of traditional homemade Nigerian cuisines. Come experience a
            culinary journey like no other, deep into the heart of
            Nigeria&apos;s traditional delicacies.
          </p>
          <button className="bg-[#e05d00] py-2 px-4 rounded-lg">
            Get in touch
          </button>
        </div>
        <img
          data-aos="fade-left"
          data-aos-duration="1000"
          data-aos-offset="200"
          src="/assets/img_two.png"
          alt="img"
        />
      </div>

      <img
        data-aos="fade-right"
        data-aos-duration="1000"
        data-aos-offset="200"
        src="/assets/img_one.png"
        alt="img"
      />
    </div>
  );
};

export default SectionOne;
