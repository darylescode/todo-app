import { useContext } from "react";

import { AppHeaderContext } from "@/context";

import CrudHeader from "@/components/app-header/CrudHeader";
import ActionHeader from "@/components/app-header/ActionHeader";
import { generateHeaderComponents } from "@/shared/utils/generateHeaderComponents";

function AppHeader() {
  const { headerTriggered } = useContext(AppHeaderContext);

  const components = generateHeaderComponents({
    createComponent: <CrudHeader />,
    editComponent: (
      <ActionHeader
        actionText="Save"
        onAction={() => {
          console.log("Save action triggered");
        }}
      />
    ),
    removeComponent: (
      <ActionHeader
        actionText="Remove"
        onAction={() => {
          console.log("Remove action triggered");
        }}
      />
    ),
  });

  return (
    <div className="border-b border-gray-200 py-4 flex space-between justify-between items-center flex-1 sticky top-0 bg-white z-10">
      <h1 className="text-2xl font-semibold ml-4">Notes</h1>
      {components[headerTriggered] || null}
    </div>
  );
}

export default AppHeader;
