import { Grid } from "@mui/material";
import { SearchBar } from "./SearchBar/SearchBar";
import { RepositoriesList } from "./RepositoriesList/RepositoriesList";
import { IAppState } from "./types";
import { useState } from "react";
import { AppContext } from "./context/AppContext";

function App() {
  const [appState, setAppState] = useState<IAppState>({
    searchQuery: "",
  });
  const setSearchQuery = (query: string) => setAppState({ searchQuery: query });

  return (
    <AppContext.Provider
      value={{ searchQuery: appState.searchQuery, setSearchQuery }}
    >
      <Grid container spacing={2}>
        <Grid size={12}>
          <SearchBar />
        </Grid>
        <Grid size={12}>
          <RepositoriesList />
        </Grid>
      </Grid>
    </AppContext.Provider>
  );
}

export default App;
