const Menu = () => {
  return (
    <div className="mt-20 w-[90vw] mx-auto pt-[6vh] pb-[15vh] px-[6vw] bg-[#fff] relative">
      <h2 className="text-[#e05d00] pb-6 lg:text-[48px] text-[32px] font-monoton">
        Menu
      </h2>
      <div className="flex lg:flex-row flex-col justify-between">
        <div className="">
          <img src="/assets/menu.png" alt="menu" />

          <div className="lg:space-x-20 space-x-10 mb-20 lg:mb-0 mt-10 lg:text-[16px] text-[13px] flex items-center justify-center">
            <button className="bg-[#e05d00] py-2 px-4 rounded-lg">
              Download menu
            </button>
            <button className="bg-[#e05d00] py-2 px-4 rounded-lg">
              Order Now
            </button>
          </div>
        </div>
        <div className="flex-col flex space-y-6">
          <img src="/assets/img_three.png" alt="img" />
          <img src="/assets/img_four.png" alt="img" />
          <img src="/assets/img_five.png" alt="img" />
        </div>
      </div>

      <div className="absolute right-0 bottom-0">
        <img src="/assets/img_six.png" alt="img" />
      </div>
    </div>
  );
};

export default Menu;
