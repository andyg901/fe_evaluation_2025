import { createContext } from "react";

export interface IAppContext {
  searchQuery: string;
}

export const AppContext = createContext<IAppContext>({
  searchQuery: "",
});
