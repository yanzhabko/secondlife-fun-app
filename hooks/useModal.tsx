import { useState, useEffect } from "react";

type ModalAnimation = "in" | "out";

const useModal = () => {
  const [active, setActive] = useState(false);
  const [animation, setAnimation] = useState<ModalAnimation>("in");

  useEffect(() => {
    if (active) {
      setAnimation("in");
    }
    document.body.style.overflow = active ? "hidden" : "auto";
  }, [active]);

  const handleOpenModal = () => {
    setActive(true);
  };

  const handleCloseModal = () => {
    setAnimation("out");
    setTimeout(() => setActive(false), 200);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        handleCloseModal();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return {
    handleOpenModal,
    handleCloseModal,
    active,
    animation,
  };
};

export default useModal;
