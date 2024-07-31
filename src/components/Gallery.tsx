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

      <div className="flex w-[90%] overflow-x-auto mx-auto gap-20 mt-20">
        <img
          src="/assets/gallery/img_one.png"
          alt="img"
          className="flex-shrink-0 lg:w-[25vw] w-[90%] h-auto"
        />
        <img
          src="/assets/gallery/img_two.png"
          alt="img"
          className="flex-shrink-0 lg:w-[25vw] w-[90%] h-auto"
        />
        <img
          src="/assets/gallery/img_three.png"
          alt="img"
          className="flex-shrink-0 lg:w-[25vw] w-[90%] h-auto"
        />
        <img
          src="/assets/gallery/img_four.png"
          alt="img"
          className="flex-shrink-0 lg:w-[25vw] w-[90%] h-auto"
        />
      </div>
    </div>
  );
};

export default Gallery;
