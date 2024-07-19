import Menu from "./Menu";
import { Chef, ChickenMeal, HomeDelivery } from "./icons";

const SectionTwo = () => {
  return (
    <div className="">
      <div className="w-[90vw] mx-auto">
        <h2
          data-aos="zoom-in"
          data-aos-duration="1000"
          data-aos-offset="200"
          className="lg:text-[48px] text-[32px] font-monoton text-center mt-[15vh]"
        >
          Let&apos;s serve you
        </h2>
        <div className="flex justify-between lg:flex-row flex-col lg:space-x-20 space-y-20 lg:space-y-0 mt-10">
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-offset="200"
            className="flex flex-col items-center lg:w-[30%] text-center space-y-3"
          >
            <ChickenMeal />
            <h2 className="lg:text-[32px] text-[26px] text-[#e05d00] font-semibold">
              Tasty Delicious
            </h2>
            <span className="lg:text-[20px]">
              Authentic flavors so good, they'll have you saying “Madam give me
              one more”
            </span>
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="1200"
            data-aos-offset="200"
            className="flex flex-col items-center lg:w-[30%] text-center space-y-3"
          >
            <Chef />
            <h2 className="lg:text-[32px] text-[26px] text-[#e05d00] font-semibold">
              Best Chefs
            </h2>
            <span className="lg:text-[20px]">
              Our chefs? People wey sabi! Enjoy the full taste of Nigerian
              tradition on a plate.
            </span>
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="1400"
            data-aos-offset="200"
            className="flex flex-col items-center lg:w-[30%] text-center space-y-3"
          >
            <HomeDelivery />
            <h2 className="lg:text-[32px] text-[26px] text-[#e05d00] font-semibold">
              Home Delivery
            </h2>
            <span className="lg:text-[20px]">
              Enjoy New Africano's taste of home, delivered straight to your
              doorstep. Sharp!
            </span>
          </div>
        </div>
      </div>

      <Menu />
    </div>
  );
};

export default SectionTwo;
