import { useContext } from "react";
import {
  AppHeaderContext,
  ConfirmationModalContext,
  HeaderTriggered,
} from "@/context";

import { headerActions } from "@/shared/constants/headerActions";
import { useParams } from "react-router";

function CrudHeader() {
  const params = useParams();
  const id = params?.id || "";

  const { isModalOpen, setIsModalOpen } = useContext(ConfirmationModalContext);

  const { setHeaderTriggered } = useContext(AppHeaderContext);

  const openModalHandler = (imgAlt: string) => {
    if (imgAlt === "create") {
      setIsModalOpen(!isModalOpen);
      setHeaderTriggered(HeaderTriggered.create);
      return;
    }

    if (imgAlt === "edit") {
      setHeaderTriggered(HeaderTriggered.edit);
      return;
    }

    setHeaderTriggered(HeaderTriggered.remove);
  };

  return (
    <div className="flex items-center">
      {headerActions.map((operation, index) => {
        if (id && operation.alt === "create") return null;
        return (
          <img
            key={index}
            src={operation.src}
            alt={operation.alt}
            className={operation.style}
            onClick={() => openModalHandler(operation.alt)}
          />
        );
      })}
    </div>
  );
}

export default CrudHeader;
