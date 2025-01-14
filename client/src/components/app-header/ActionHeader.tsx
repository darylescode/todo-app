import { useContext } from "react";

import { AppHeaderContext, HeaderTriggered } from "@/context";

import { Button } from "@/shared/components/ui/button";

interface ActionHeaderProps {
  actionText: string;
  onAction: () => void;
}

function ActionHeader({ actionText, onAction }: ActionHeaderProps) {
  const { setHeaderTriggered } =
    useContext(AppHeaderContext);

  const cancelHandler = () => {
    setHeaderTriggered(HeaderTriggered.create);
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
        onClick={onAction}
        variant="ghost"
        className="text-td-blue cursor-pointer"
      >
        {actionText}
      </Button>
    </div>
  );
}

export default ActionHeader;
