import { useState } from "react";
import { ConfirmationModalContext } from "../../index";

function ConfirmationModalProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <ConfirmationModalContext.Provider value={{ isModalOpen, setIsModalOpen }}>
      {children}
    </ConfirmationModalContext.Provider>
  );
}

export default ConfirmationModalProvider;
