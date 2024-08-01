import { useState } from "react";
import Modal from "./ImgModal";

const Gallery = () => {
  const imgItems = [
    { id: 1, img: "/assets/gallery/img_one.png" },
    { id: 2, img: "/assets/gallery/img_two.png" },
    { id: 3, img: "/assets/gallery/img_three.png" },
    { id: 4, img: "/assets/gallery/img_four.png" },
    { id: 5, img: "/assets/gallery/img_five.jpg" },
    { id: 6, img: "/assets/gallery/img_seven.jpg" },
    { id: 7, img: "/assets/gallery/img_nine.jpg" },
    { id: 9, img: "/assets/gallery/img_eleven.jpg" },
  ];

  const [selectedImg, setSelectedImg] = useState<string | null>(null);

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
        {imgItems.map((item) => (
          <div
            key={item.id}
            className="flex-shrink-0 lg:w-[348px] hover:scale-90 w-[90%] cursor-pointer transition-all duration-300 ease-in-out h-[232px]"
            onClick={() => setSelectedImg(item.img)}
          >
            <img src={item.img} alt="img" className="h-[100%] w-[100%]" />
          </div>
        ))}
      </div>

      {selectedImg && (
        <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
      )}
    </div>
  );
};

export default Gallery;
