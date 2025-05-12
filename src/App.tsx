import { Suspense, useEffect, useState } from "react";
import { useApi } from "./api/useApi";
import { CircularProgress, Grid } from "@mui/material";
import { SearchBar } from "./SearchBar/SearchBar";
import { RepositoriesList } from "./RepositoriesList/RepositoriesList";
import { Repository } from "./api/types";

function App() {
  return (
    <Grid container spacing={2}>
      <Grid size={12}>
        <SearchBar />
      </Grid>
      <Grid size={12}>
        <Suspense fallback={<CircularProgress />}>
          <RepositoriesList />
        </Suspense>
      </Grid>
    </Grid>
  );
}

export default App;
