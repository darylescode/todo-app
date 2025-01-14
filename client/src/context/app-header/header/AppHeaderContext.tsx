import { createContext } from "react";

interface AppHeaderContextProps {
  isHeaderTriggered: boolean;
  setIsHeaderTriggered: (isHeaderTriggered: boolean) => void;
}

export const AppHeaderContext = createContext<AppHeaderContextProps>({
  isHeaderTriggered: false,
  setIsHeaderTriggered: () => {},
});
