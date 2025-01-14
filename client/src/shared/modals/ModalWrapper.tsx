import { PropsWithChildren } from "react";

interface ModalWrapperProps {
  isModalOpen: boolean;
  className?: string;
}

function ModalWrapper({
  isModalOpen,
  children,
  className,
}: PropsWithChildren<ModalWrapperProps>) {
  if (!isModalOpen) return null;
  return (
    <div
      className={`fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 ${className}`}
    >
      {children}
    </div>
  );
}

export default ModalWrapper;
