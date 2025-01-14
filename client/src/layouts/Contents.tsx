import { Outlet } from "react-router";
import { useContext } from "react";

import { ConfirmationModalContext } from "@/context";

import AppHeader from "./AppHeader";
import CreateNoteModal from "@/shared/modals/CreateNoteModal";

function Contents() {
  const { isModalOpen, setIsModalOpen } = useContext(ConfirmationModalContext);

  return (
    <div>
      <AppHeader />
      <CreateNoteModal
        isModalOpen={isModalOpen}
        onCancel={() => setIsModalOpen(!isModalOpen)}
      />
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default Contents;
