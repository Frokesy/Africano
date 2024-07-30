import { motion } from "framer-motion";
import { Dispatch, FC, SetStateAction, useEffect } from "react";

interface DrawerProps {
  setOpenDrawer: Dispatch<SetStateAction<boolean>>;
}

const Drawer: FC<DrawerProps> = ({ setOpenDrawer }) => {
  useEffect(() => {
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach((link) => {
      link.addEventListener("click", handleClick);
    });

    return () => {
      links.forEach((link) => {
        link.removeEventListener("click", handleClick);
      });
    };
  }, []);

  const handleClick = (event: Event) => {
    event.preventDefault();
    const targetId = (event.currentTarget as HTMLAnchorElement)
      .getAttribute("href")!
      .substring(1);
    const targetElement = document.getElementById(targetId);
    setOpenDrawer(false);

    setTimeout(() => {
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop,
          behavior: "smooth",
        });
      }
    }, 300);
  };

  return (
    <>
      <div className="fixed top-0 h-screen w-screen bg-[#000] bg-opacity-60 z-20">
        <div className="justify-end flex">
          <motion.div
            className="flex flex-col space-y-[30px] bg-[#121212] h-screen w-[60%] px-6 text-[18px] font-semibold text-[#fff]"
            initial={{ x: "100vw" }}
            animate={{ x: 0 }}
            transition={{ type: "ease", stiffness: 60 }}
          >
            <div
              onClick={() => setOpenDrawer(false)}
              className="flex justify-end text-[20px] text-[#ccc] font-light pt-8"
            >
              <span className="border border-[#333] py-1 px-3 rounded-full">
                x
              </span>
            </div>
            <a href="#home">Home</a>
            <a href="#services">Services</a>
            <a href="#menu">Menu</a>
            <a href="#about">About us</a>
            <div className="flex">
              <button className="bg-[#e05d00] text-[#fff] py-2 px-6 rounded-lg">
                Contact us
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Drawer;
