import { AppContext } from "../../app/AppContext";
import { Grid } from "@mui/material";
import { SearchBar } from "../../shared/components/SearchBar";
import { RepositoriesList } from "../components/RepositoriesList";
import { useState } from "react";

export const RepositoriesPage = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <AppContext.Provider value={{ searchQuery: searchQuery }}>
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
    </AppContext.Provider>
  );
};
