import { PropsWithChildren } from "react";
import { ConfirmationModalProvider } from "../index";

function ModalProviderWrapper({ children }: PropsWithChildren) {
  return (
    <ConfirmationModalProvider>
      {children}
    </ConfirmationModalProvider>
  )
}

export default ModalProviderWrapper;
