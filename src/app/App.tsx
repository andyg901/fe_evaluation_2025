import { Grid } from "@mui/material";
import { NotificationsProvider } from "@toolpad/core/useNotifications";

import { SearchBar } from "../shared/components/SearchBar";
import { RepositoriesList } from "../repositories/components/RepositoriesList";
import { useState } from "react";
import { AppContext } from "./AppContext";

function App() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <AppContext.Provider value={{ searchQuery: searchQuery }}>
      <NotificationsProvider
        slotProps={{
          snackbar: {
            anchorOrigin: { vertical: "top", horizontal: "right" },
          },
        }}
      >
        <Grid container spacing={2}>
          <Grid size={12}>
            <SearchBar
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
              helperText={
                !searchQuery ? 'Displaying results for "topic:react"' : ""
              }
            />
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
