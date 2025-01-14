import { PropsWithChildren, useState } from "react";
import { ConfirmationModalContext } from "../../index";

function ConfirmationModalProvider({ children }: PropsWithChildren) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <ConfirmationModalContext.Provider value={{ isModalOpen, setIsModalOpen }}>
      {children}
    </ConfirmationModalContext.Provider>
  );
}

export default ConfirmationModalProvider;
