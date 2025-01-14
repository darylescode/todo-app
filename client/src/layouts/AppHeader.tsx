import { useContext } from "react";

import { AppHeaderContext } from "@/context";

import CrudHeader from "@/components/app-header/CrudHeader";
import EditHeader from "@/components/app-header/EditHeader";

function AppHeader() {
  const { isHeaderTriggered } = useContext(AppHeaderContext);

  return (
    <div className="border-b border-gray-200 py-4 flex space-between justify-between items-center flex-1 ">
      <h1 className="text-2xl font-semibold ml-4">Notes</h1>
      {!isHeaderTriggered ? <CrudHeader /> : <EditHeader />}
    </div>
  );
}

export default AppHeader;
