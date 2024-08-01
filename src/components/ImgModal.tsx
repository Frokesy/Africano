import { motion } from "framer-motion";
import { Dispatch, FC, SetStateAction } from "react";

interface ModalProps {
  selectedImg: string;
  setSelectedImg: Dispatch<SetStateAction<string | null>>;
}

const Modal: FC<ModalProps> = ({ selectedImg, setSelectedImg }) => {
  const handleClose = () => {
    setSelectedImg(null);
  };

  return (
    <motion.div
      className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <div className="relative">
        <button
          onClick={handleClose}
          className="absolute top-[-65px] right-[-20px] bg-white text-black rounded-full text-[28px] px-3"
        >
          &times;
        </button>
        <img src={selectedImg} alt="enlarged pic" className="lg:w-[500px] lg:h-[400px]" />
      </div>
    </motion.div>
  );
};

export default Modal;
