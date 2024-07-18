import { Facebook, Instagram, TikTok } from "./icons";

const Footer = () => {
  return (
    <div className="">
      <div className="py-[20vh] w-[90vw] mx-auto flex lg:flex-row flex-col justify-between lg:items-center space-y-10 lg:space-y-0 lg:space-x-10">
        <div className="flex flex-col lg:w-[30%] space-y-6">
          <div className="flex items-center space-x-1">
            <img src="/assets/logo.png" alt="logo" className="w-[30%]" />
            <h2 className="lg:text-[27px] text-[24px] font-monoton">
              New Africano
            </h2>
          </div>

          <p className="font-bold">
            Aenean luctus nulla sit amet nibh ultricies, sit amet gravida libero
            venenatis. Nunc eu consectetur nisl. Phasellus ligula quam, maximus
            in hendrerit in, sagittis nec nisi. Read more
          </p>

          <div className="space-y-6">
            <p className="font-bold">Opening hours</p>
            <div className="flex space-x-10">
              <div className="font-bold space-y-2">
                <p>Monday - Saturday </p>
                <p>8:00 am to 11:00 pm</p>
              </div>
              <div className="font-bold space-y-2">
                <p>Sunday </p>
                <p>10:00 am to 9:00 pm</p>
              </div>
            </div>
          </div>
        </div>

        <div className="font-bold flex flex-col space-y-3">
          <h2 className="uppercase mb-3">navigation</h2>
          <span>Home</span>
          <span>Services</span>
          <span>Menu</span>
          <span>About us</span>
          <span>Gallery</span>
        </div>
        <div className="font-bold flex flex-col space-y-3">
          <h2 className="uppercase mb-3">dishes</h2>
          <span>Fried & Peppered Bushmeat</span>
          <span>Peppered Ponmo</span>
          <span>Roasted plantain yam and Fish</span>
          <span>Peppered beef</span>
        </div>

        <div className="">
          <h2 className="uppercase mb-10 font-bold">follow us</h2>

          <div className="flex items-center space-x-6">
            <Facebook />
            <TikTok />
            <Instagram />
          </div>
        </div>
      </div>
      <div className="w-[90vw] mx-auto flex lg:flex-row flex-col lg:text-[16px] text-[14px] items-center justify-between pb-20">
        <p>© 2024 Restaurant. All rights reserved. Design by Untree.coo</p>
        <div className="flex items-center space-x-10 mt-6 lg:mt-0">
          <p>Terms of Service</p>
          <p>Privacy Policy</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
