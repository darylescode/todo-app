import { createContext } from "react";
import { ConfirmationModalContextProps } from "@/types/modals";

export const ConfirmationModalContext =
  createContext<ConfirmationModalContextProps>({
    isModalOpen: false,
    setIsModalOpen: () => {},
  });
