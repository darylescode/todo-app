export interface IBaseModalProps {
  isModalOpen: boolean;
}

export interface ConfirmationModalContextProps extends IBaseModalProps {
  setIsModalOpen: (isOpen: boolean) => void;
}

