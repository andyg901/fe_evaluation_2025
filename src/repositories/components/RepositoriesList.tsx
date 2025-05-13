import { Grid } from "@mui/material";
import { RepositoriesTable } from "./RepositoriesTable";

export const RepositoriesList = () => {
  return (
    <Grid size={8} mt={3} offset={2}>
      <RepositoriesTable />
    </Grid>
  );
};
