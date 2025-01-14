import React from "react";
import { AppHeaderContext } from "./AppHeaderContext";

function AppHeaderProvider({ children }: React.PropsWithChildren) {
  const [isHeaderTriggered, setIsHeaderTriggered] = React.useState(false);

  return (
    <AppHeaderContext.Provider
      value={{ isHeaderTriggered, setIsHeaderTriggered }}
    >
      {children}
    </AppHeaderContext.Provider>
  );
}

export default AppHeaderProvider;
