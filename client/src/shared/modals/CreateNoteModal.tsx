import { useContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { TodoContext } from "@/context";

import ConfirmationModal from "./ConfirmationModal";

interface ICreateNoteModalProps {
  isModalOpen: boolean;
  onCancel: () => void;
}

function CreateNoteModal({ isModalOpen, onCancel }: ICreateNoteModalProps) {
  const { setTodo } = useContext(TodoContext);
  const [title, setTitle] = useState<string>("");

  const confirmHandler = () => {
    setTodo((prev) => [
      ...prev,
      {
        uuid: uuidv4(),
        title: title,
        position: prev.length + 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
    setTitle("");
    onCancel();
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
              id="title"
              type="text"
              value={title}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)}
              className="p-2 border border-gray-300"
            />
          </div>
        </form>
      </div>
    </ConfirmationModal>
  );
}

export default CreateNoteModal;
