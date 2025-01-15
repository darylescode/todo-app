import { createContext } from "react";

export enum HeaderTriggered {
  create = "CREATE",
  edit = "EDIT",
  remove = "REMOVE",
}

interface IAppHeaderContextProps {
  headerTriggered: HeaderTriggered;
  setHeaderTriggered: React.Dispatch<React.SetStateAction<HeaderTriggered>>;
}

export const AppHeaderContext = createContext<IAppHeaderContextProps>({
  headerTriggered: HeaderTriggered.create,
  setHeaderTriggered: () => {},
});
