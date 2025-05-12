import { useEffect, useState } from "react";
import { Repository } from "../api/types";
import { useApi } from "../api/useApi";
import { RepositoriesTable } from "./RepositoriesTable";
import { Grid } from "@mui/material";

interface RepositoriesListProps {
  searchQuery?: string;
}

export const RepositoriesList = ({}: RepositoriesListProps) => {
  const { fetchRepositories } = useApi();
  const [repos, setRepos] = useState<Repository[]>([]);

  useEffect(() => {
    fetchRepositories().then((repositories) => {
      setRepos(repositories);
    });
  }, []);

  return (
    <Grid size={8} mt={3} offset={2}>
      <RepositoriesTable repos={repos} />
    </Grid>
  );
};
