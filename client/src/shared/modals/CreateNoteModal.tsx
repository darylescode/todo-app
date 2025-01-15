import ConfirmationModal from "./ConfirmationModal";

interface ICreateNoteModalProps {
  isModalOpen: boolean;
  onCancel: () => void;
}

function CreateNoteModal({ isModalOpen, onCancel }: ICreateNoteModalProps) {

  const confirmHandler = () => {
    console.log("Note created");
  };

  return (
    <ConfirmationModal
      isModalOpen={isModalOpen}
      confirmText="Create note"
      onCancel={onCancel}
      onConfirm={confirmHandler}
    >
      <div className="w-80">
        <h1 className="text-2xl font-semibold mb-4">Create a new note</h1>
        <form>
          <div className="flex flex-col mb-4">
            <label
              htmlFor="title"
              className="mb-2"
            >
              Title
            </label>
            <input
              type="text"
              id="title"
              className="p-2 border border-gray-300"
            />
          </div>
        </form>
      </div>
    </ConfirmationModal>
  );
}

export default CreateNoteModal;
