import { Chef, ChickenMeal, HomeDelivery } from "./icons";

const SectionTwo = () => {
  return (
    <div className="">
      <div className="w-[90vw] mx-auto">
        <h2 className="text-[48px] uppercase font-semibold text-center">
          Let&apos;s serve you
        </h2>
        <div className="flex justify-between space-x-20">
          <div className="flex flex-col items-center w-[30%] text-center">
            <ChickenMeal />
            <h2>Tasty Delicious</h2>
            <span>
              Authentic flavors so good, they'll have you saying “Madam give me
              one more”
            </span>
          </div>
          <div className="flex flex-col items-center w-[30%] text-center">
            <Chef />
            <h2>Tasty Delicious</h2>
            <span>
              Authentic flavors so good, they'll have you saying “Madam give me
              one more”
            </span>
          </div>
          <div className="flex flex-col items-center w-[30%] text-center">
            <HomeDelivery />
            <h2>Tasty Delicious</h2>
            <span>
              Authentic flavors so good, they'll have you saying “Madam give me
              one more”
            </span>
          </div>
        </div>
      </div>

      <div className="flex justify-between">
        <img src="/assets/menu.png" alt="menu" />
        <div className="flex-col flex">
          <img src="/assets/img_three.png" alt="img" />
          <img src="/assets/img_four.png" alt="img" />
          <img src="/assets/img_five.png" alt="img" />
        </div>
      </div>
    </div>
  );
};

export default SectionTwo;
