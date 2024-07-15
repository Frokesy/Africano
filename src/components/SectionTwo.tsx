import { Chef, ChickenMeal, HomeDelivery } from "./icons";

const SectionTwo = () => {
  return (
    <div className="">
      <div className="w-[90vw] mx-auto">
        <h2 className="text-[48px] uppercase font-semibold text-center mt-[15vh]">
          Let&apos;s serve you
        </h2>
        <div className="flex justify-between space-x-20">
          <div className="flex flex-col items-center w-[30%] text-center space-y-3">
            <ChickenMeal />
            <h2 className="text-[32px] text-[#e05d00] font-semibold">
              Tasty Delicious
            </h2>
            <span className="text-[20px]">
              Authentic flavors so good, they'll have you saying “Madam give me
              one more”
            </span>
          </div>
          <div className="flex flex-col items-center w-[30%] text-center space-y-3">
            <Chef />
            <h2 className="text-[32px] text-[#e05d00] font-semibold">
              Best Chefs
            </h2>
            <span className="text-[20px]">
              Our chefs? People wey sabi! Enjoy the full taste of Nigerian
              tradition on a plate.
            </span>
          </div>
          <div className="flex flex-col items-center w-[30%] text-center space-y-3">
            <HomeDelivery />
            <h2 className="text-[32px] text-[#e05d00] font-semibold">
              Home Delivery
            </h2>
            <span className="text-[20px]">
              Enjoy New Africano's taste of home, delivered straight to your
              doorstep. Sharp!
            </span>
          </div>
        </div>
      </div>

      <div className="mt-20 w-[90vw] mx-auto pt-[6vh] pb-[15vh] px-[6vw] bg-[#fff] relative">
        <h2 className="text-[#e05d00] pb-6 text-[48px] uppercase">Home</h2>
        <div className="flex justify-between">
          <div className="">
            <img src="/assets/menu.png" alt="menu" />

            <div className="space-x-20 mt-10 flex items-center justify-center">
              <button className="bg-[#e05d00] py-2 px-4 rounded-lg">Download menu</button>
              <button className="bg-[#e05d00] py-2 px-4 rounded-lg">Order Now</button>
            </div>
          </div>
          <div className="flex-col flex space-y-6">
            <img src="/assets/img_three.png" alt="img" />
            <img src="/assets/img_four.png" alt="img" />
            <img src="/assets/img_five.png" alt="img" />
          </div>
        </div>

        <div className="absolute right-0 bottom-0">
          <img src="/assets/img_six.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default SectionTwo;
