const Gallery = () => {
  return (
    <div className="py-[10vh]" id="gallery">
      <h2
        data-aos="zoom-in"
        data-aos-duration="1000"
        data-aos-offset="200"
        className="text-[#8c3a00] font-monoton lg:text-[48px] text-[40px] text-center"
      >
        Gallery
      </h2>

      <div className="flex w-[90%] overflow-x-auto mx-auto gap-20 mt-20 h-[10opx]">
        <img
          src="/assets/gallery/img_one.png"
          alt="img"
          className="flex-shrink-0 lg:w-[30vw] w-[90%] h-[550px]"
        />
        <img
          src="/assets/gallery/img_two.png"
          alt="img"
          className="flex-shrink-0 lg:w-[30vw] w-[90%] h-[550px]"
        />
        <img
          src="/assets/gallery/img_three.png"
          alt="img"
          className="flex-shrink-0 lg:w-[30vw] w-[90%] h-[550px]"
        />
        <img
          src="/assets/gallery/img_four.png"
          alt="img"
          className="flex-shrink-0 lg:w-[30vw] w-[90%] h-[550px]"
        />
        <img
          src="/assets/gallery/img_five.jpg"
          alt="img"
          className="flex-shrink-0 lg:w-[30vw] w-[90%] h-[550px]"
        />
        <img
          src="/assets/gallery/img_six.jpg"
          alt="img"
          className="flex-shrink-0 lg:w-[30vw] w-[90%] h-[550px]"
        />
        <img
          src="/assets/gallery/img_seven.jpg"
          alt="img"
          className="flex-shrink-0 lg:w-[30vw] w-[90%] h-[550px]"
        />
        <img
          src="/assets/gallery/img_eight.jpg"
          alt="img"
          className="flex-shrink-0 lg:w-[30vw] w-[90%] h-[550px]"
        />
        <img
          src="/assets/gallery/img_nine.jpg"
          alt="img"
          className="flex-shrink-0 lg:w-[30vw] w-[90%] h-[550px]"
        />
        <img
          src="/assets/gallery/img_ten.jpg"
          alt="img"
          className="flex-shrink-0 lg:w-[30vw] w-[90%] h-[550px]"
        />
        <img
          src="/assets/gallery/img_eleven.jpg"
          alt="img"
          className="flex-shrink-0 lg:w-[30vw] w-[90%] h-[550px]"
        />
      </div>
    </div>
  );
};

export default Gallery;
