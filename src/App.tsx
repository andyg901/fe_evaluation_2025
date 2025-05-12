import { Grid } from "@mui/material";
import { NotificationsProvider } from "@toolpad/core/useNotifications";

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
      <NotificationsProvider
        slotProps={{
          snackbar: {
            anchorOrigin: { vertical: "top", horizontal: "right" },
          },
        }}
      >
        <Grid container spacing={2}>
          <Grid size={12}>
            <SearchBar />
          </Grid>
          <Grid size={12}>
            <RepositoriesList />
          </Grid>
        </Grid>
      </NotificationsProvider>
    </AppContext.Provider>
  );
}

export default App;
