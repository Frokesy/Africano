const Gallery = () => {
  return (
    <div className="py-[10vh]">
        <h2 className="text-[#8c3a00] font-semibold lg:text-[48px] text-[40px] uppercase text-center">Gallery</h2>
    
        <div className="grid lg:grid-cols-4 grid-cols-1 w-[90%] overflow-x-auto mx-auto gap-20 mt-20">
            <img src="/assets/gallery/img_one.png" alt="img" className="lg:w-[25vw] w-[100%] h-[100%]" />
            <img src="/assets/gallery/img_two.png" alt="img" className="lg:w-[25vw] h-[100%] w-[100%]" />
            <img src="/assets/gallery/img_three.png" alt="img" className="lg:w-[25vw] h-[100%] w-[100%]" />
            <img src="/assets/gallery/img_four.png" alt="img" className="lg:w-[25vw] h-[100%] w-[100%]" />
        </div>
    </div>
  )
}

export default Gallery
