import { PropsWithChildren } from "react";
import { Button } from "../components/ui/button";
import ModalWrapper from "./ModalWrapper";

interface IConfirmationModalProps {
  isModalOpen: boolean;
  cancelText?: string;
  confirmText?: string;
  onConfirm: () => void;
  onCancel: () => void;
}

const BUTTON_CLASS = "flex-1 cursor-pointer px-4 py-2";

function ConfirmationModal({
  isModalOpen,
  children,
  cancelText = "Cancel",
  confirmText = "Confirm",
  onConfirm,
  onCancel,
}: PropsWithChildren<IConfirmationModalProps>) {
  return (
    <ModalWrapper isModalOpen={isModalOpen}>
      <div className="bg-white p-4 rounded-lg">
        {children}
        <div className="flex justify-between mt-4">
          <Button
            onClick={onCancel}
            variant="destructive"
            className={`${BUTTON_CLASS} rounded-lg mr-2`}
          >
            {cancelText}
          </Button>
          <Button
            onClick={onConfirm}
            className={`${BUTTON_CLASS} bg-green-500 text-white rounded-lg ml-2`}
          >
            {confirmText}
          </Button>
        </div>
      </div>
    </ModalWrapper>
  );
}

export default ConfirmationModal;
