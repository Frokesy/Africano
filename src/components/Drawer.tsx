import { motion } from "framer-motion";
import { Dispatch, FC, SetStateAction } from "react";

interface DrawerProps {
  setOpenDrawer: Dispatch<SetStateAction<boolean>>;
}

const Drawer: FC<DrawerProps> = ({ setOpenDrawer }) => {
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
            <div onClick={() => setOpenDrawer(false)} className="flex justify-end text-[20px] text-[#ccc] font-light pt-8">
              <span className="border border-[#333] py-1 px-3 rounded-full">x</span>
            </div>
            <span>Home</span>
            <span>Services</span>
            <span>Menu</span>
            <span>About us</span>
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
