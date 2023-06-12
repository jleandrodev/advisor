import { useState } from "react";

const useOpenDrawer = () => {
  const [isOpen, setIsOpen] = useState(false);

  return {
    isOpen,
    setIsOpen,
  };
};

export default useOpenDrawer;
