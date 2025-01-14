import React from 'react'
import { ConfirmationModalProvider } from "../index";

function ModalProviderWrapper({ children }: { children: React.ReactNode }) {
  return (
    <ConfirmationModalProvider>
      {children}
    </ConfirmationModalProvider>
  )
}

export default ModalProviderWrapper;
