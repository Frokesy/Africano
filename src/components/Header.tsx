const Header = () => {
  return (
    <div className="w-[90vw] mx-auto py-6 flex justify-between items-center">
      <img src="/assets/logo.png" alt="" />
      <div className="flex items-center space-x-10 font-semibold text-[14px]">
        <span>Home</span>
        <span>Services</span>
        <span>Menu</span>
        <span>About us</span>
        <button className="bg-[#e05d00] py-2 px-4 rounded-lg">Contact us</button>
      </div>
    </div>
  )
}

export default Header
