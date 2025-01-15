import { useContext } from "react";

import { AppHeaderContext, HeaderTriggered } from "@/context";

import CrudHeader from "@/components/app-header/CrudHeader";
import ActionHeader from "@/components/app-header/ActionHeader";
import { Button } from "@/shared/components/ui/button";
import { generateHeaderComponents } from "@/shared/utils/generateHeaderComponents";

function AppHeader() {
  const { headerTriggered, setHeaderTriggered } = useContext(AppHeaderContext);

  const cancelHandler = () => {
    setHeaderTriggered(HeaderTriggered.create);
  };

  const components = generateHeaderComponents({
    createComponent: <CrudHeader />,
    editComponent: (
      <ActionHeader
        actionText="Save"
        onAction={() => {
          setHeaderTriggered(HeaderTriggered.edit);
        }}
      />
    ),
    removeComponent: (
      <div className="flex items-center justify-between w-auto mr-4">
        <Button
          onClick={cancelHandler}
          variant="ghost"
          className="text-td-blue cursor-pointer"
        >
          Done
        </Button>
      </div>
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
