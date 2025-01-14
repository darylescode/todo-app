import { useContext } from "react";

import { AppHeaderContext } from "@/context";

import { Button } from "@/shared/components/ui/button";

function EditHeader() {
  const { isHeaderTriggered, setIsHeaderTriggered } =
    useContext(AppHeaderContext);

  const cancelHandler = () => {
    setIsHeaderTriggered(!isHeaderTriggered);
  };

  return (
    <div className="flex items-center justify-between w-auto mr-4">
      <Button
        onClick={cancelHandler}
        variant="ghost"
        className="text-td-blue cursor-pointer"
      >
        Cancel
      </Button>
      <Button
        onClick={() => null}
        variant="ghost"
        className="text-td-blue cursor-pointer"
      >
        Save
      </Button>
    </div>
  );
}

export default EditHeader;
