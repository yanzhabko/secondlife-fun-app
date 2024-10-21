import { FC } from "react";
import Form from "./Form";
import useBuyersByCategory from "@/hooks/useBuyersByCategory";

interface ModalProps {
  handleClick: () => void;
  active: boolean;
}

const Modal: FC<ModalProps> = ({ handleClick, active }) => {
  const { data, category } = useBuyersByCategory();

  if (!active) return null;

  return (
    <div
      className="fixed inset-0 flex justify-center items-center bg-black/30 z-50"
      onClick={handleClick}
    >
      <div
        className="bg-white rounded-xl shadow-lg px-3 py-6 w-full sm:w-[90%] md:w-[70%] lg:w-[60%] xl:w-1/3 h-[90%] overflow-y-scroll"
        onClick={(e) => e.stopPropagation()}
      >
        <Form category={category} onClick={handleClick} buyer={data || []} />
      </div>
    </div>
  );
};

export default Modal;
