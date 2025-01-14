import { useContext } from "react";
import { AppHeaderContext, ConfirmationModalContext } from "@/context";

import { headerActions } from "@/shared/constants/headerActions";

function CrudHeader() {
  const {
    isModalOpen,
    setIsModalOpen,
  } = useContext(ConfirmationModalContext);

  const {
    isHeaderTriggered,
    setIsHeaderTriggered,
  } = useContext(AppHeaderContext);

  const openModalHandler = (imgAlt: string) => {
    if (imgAlt === "create") {
      setIsModalOpen(!isModalOpen);
      return;
    }

    if (imgAlt === "edit") {
      setIsHeaderTriggered(!isHeaderTriggered);
      return;
    }

    console.log("remove");
  };

  return (
    <div className="flex items-center">
      {headerActions.map((operation, index) => (
        <img
          key={index}
          src={operation.src}
          alt={operation.alt}
          className={operation.style}
          onClick={() => openModalHandler(operation.alt)}
        />
      ))}
    </div>
  );
}

export default CrudHeader;
