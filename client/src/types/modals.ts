export interface IBaseModalProps {
  isModalOpen: boolean;
}

export interface ConfirmationModalContextProps extends IBaseModalProps {
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

