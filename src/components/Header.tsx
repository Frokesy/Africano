import Hamburger from "hamburger-react";
import { useEffect, useState } from "react";
import Drawer from "./Drawer";

const Header = () => {
  const [openDrawer, setOpenDrawer] = useState<boolean>(false);

  useEffect(() => {
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach((link) => {
      link.addEventListener('click', smoothScroll);
    });

    return () => {
      links.forEach((link) => {
        link.removeEventListener('click', smoothScroll);
      });
    };
  }, []);

  const smoothScroll = (event: Event) => {
    event.preventDefault();
    const targetId = (event.currentTarget as HTMLAnchorElement).getAttribute('href')!.substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: 'smooth',
      });
    }
  };
  return (
    <div className="">
      <div
        data-aos="fade-down"
        data-aos-duration="1000"
        data-aos-offset="200"
        className="lg:w-[90vw] w-[95%] mx-auto py-6 flex justify-between items-center"
      >
        <img src="/assets/logo.png" alt="img" className="" />
        <div className="lg:flex hidden items-center space-x-10 font-semibold text-[14px]">
          <a href="#home">Home</a>
          <a href="#gallery">Gallery</a>
          <a href="#services">Services</a>
          <a href="#menu">Menu</a>
          <a href="#about">About us</a>
          <button className="bg-[#e05d00] py-2 px-4 rounded-lg">
            Contact us
          </button>
        </div>
        <div className="block lg:hidden z-50">
          <Hamburger
            size={20}
            toggled={openDrawer}
            toggle={setOpenDrawer}
            color="#ffffff"
          />
        </div>
      </div>
      {openDrawer && <Drawer setOpenDrawer={setOpenDrawer} />}
    </div>
  );
};

export default Header;
