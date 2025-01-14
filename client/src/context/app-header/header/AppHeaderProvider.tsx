import { useState } from "react";
import { AppHeaderContext, HeaderTriggered } from "./AppHeaderContext";

function AppHeaderProvider({ children }: React.PropsWithChildren) {
  const [headerTriggered, setHeaderTriggered] = useState<HeaderTriggered>(
    HeaderTriggered.create
  );

  return (
    <AppHeaderContext.Provider value={{ headerTriggered, setHeaderTriggered }}>
      {children}
    </AppHeaderContext.Provider>
  );
}

export default AppHeaderProvider;
