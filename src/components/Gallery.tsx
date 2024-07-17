const Gallery = () => {
  return (
    <div className="py-[10vh]">
        <h2 className="text-[#8c3a00] font-semibold text-[48px] uppercase text-center">Gallery</h2>
    
        <div className="grid grid-cols-4 w-[90%] overflow-x-auto mx-auto gap-20 mt-20">
            <img src="/assets/gallery/img_one.png" alt="img" className="w-[25vw] h-[100%]" />
            <img src="/assets/gallery/img_two.png" alt="img" className="w-[25vw] h-[100%]" />
            <img src="/assets/gallery/img_three.png" alt="img" className="w-[25vw] h-[100%]" />
            <img src="/assets/gallery/img_four.png" alt="img" className="w-[25vw] h-[100%]" />
        </div>
    </div>
  )
}

export default Gallery
