import { createContext } from "react";

export interface IAppContext {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

export const AppContext = createContext<IAppContext>({
  searchQuery: "",
  setSearchQuery: () => undefined,
});
