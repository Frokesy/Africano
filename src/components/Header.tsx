import Hamburger from "hamburger-react";
import { useState } from "react";
import Drawer from "./Drawer";

const Header = () => {
    const [openDrawer, setOpenDrawer] = useState<boolean>(false);
  return (
    <div className="lg:w-[90vw] w-[95%] mx-auto py-6 flex justify-between items-center">
      <img src="/assets/logo.png" alt="" />
      <div className="lg:flex hidden items-center space-x-10 font-semibold text-[14px]">
        <span>Home</span>
        <span>Services</span>
        <span>Menu</span>
        <span>About us</span>
        <button className="bg-[#e05d00] py-2 px-4 rounded-lg">Contact us</button>
      </div>
      <div className="block lg:hidden z-[100]">
          <Hamburger
            size={20}
            toggled={openDrawer}
            toggle={setOpenDrawer}
            color="#ffffff"
          />
        </div>

        {openDrawer && <Drawer />}
    </div>
  )
}

export default Header
