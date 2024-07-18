import { Email, Location, Phone } from "./icons";

const Contact = () => {
  return (
    <div className="w-[90vw] mx-auto pt-[10vh]">
        <div className="">
            <h2 className="lg:text-[48px] text-[32px] font-monoton mb-3">Contact Us</h2>
            <p className="font-bold text-[20px] mb-3">Get in touch with us</p>
        </div>
      <div className="grid lg:grid-cols-3 grid-cols-1 lg:gap-20 gap-6">
        <div
          data-aos="fade-up"
          data-aos-duration="500"
          data-aos-offset="200"
          className="bg-[#ccc] bg-opacity-30 rounded-xl p-6 space-y-4"
        >
          <Email />
          <h2 className="text-[18px] font-semibold">Message Us</h2>
          <p className="pb-3">CHat with us to place your order</p>
          <a href="mailto:goatcloudstech@gmail.com">africanofoods@gmail.com</a>
        </div>

        <div
          data-aos="fade-up"
          data-aos-duration="750"
          data-aos-offset="200"
          className="bg-[#ccc] bg-opacity-30 rounded-xl p-6 space-y-4"
        >
          <Location />
          <h2 className="text-[18px] font-semibold">Visit Us</h2>
          <p>Visit our Restaurant</p>
          <p>100 Smith Street Collingwood VIC 3066 AU</p>
        </div>

        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-offset="200"
          className="bg-[#ccc] bg-opacity-30 rounded-xl p-6 space-y-4"
        >
          <Phone />
          <h2 className="text-[18px] font-semibold">Call Us</h2>
          <p className="pb-3">To make enquiries</p>
          <p>+234 812 345 6789</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
