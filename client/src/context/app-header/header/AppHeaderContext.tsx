import { createContext } from "react";

export enum HeaderTriggered {
  create = "CREATE",
  edit = "EDIT",
  remove = "REMOVE",
}

interface IAppHeaderContextProps {
  headerTriggered: HeaderTriggered;
  setHeaderTriggered: (value: HeaderTriggered) => void;
}

export const AppHeaderContext = createContext<IAppHeaderContextProps>({
  headerTriggered: HeaderTriggered.create,
  setHeaderTriggered: () => {},
});
