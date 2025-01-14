import { useContext } from "react";

import { ConfirmationModalContext } from "@/context/index";

import { headerActions } from "@/shared/constants/headerActions";

function Header() {
  const { isModalOpen, setIsModalOpen } = useContext(ConfirmationModalContext);

  const openModalHandler = (imgAlt: string) => {
    if (imgAlt === "create") {
      setIsModalOpen(!isModalOpen);
    } else if (imgAlt === "edit") {
      console.log("edit");
    } else {
      console.log("remove");
    }
  };

  return (
    <div className="border-b border-gray-200 py-4 flex space-between justify-between items-center flex-1 ">
      <h1 className="text-2xl font-semibold ml-4">Notes</h1>
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
    </div>
  );
}

export default Header;
