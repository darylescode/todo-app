import React from "react";

interface ModalWrapperProps {
  isModalOpen: boolean;
  children: React.ReactNode;
  className?: string;
}

function ModalWrapper({ isModalOpen, children, className }: ModalWrapperProps) {
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
