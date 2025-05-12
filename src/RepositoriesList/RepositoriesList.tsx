import { useContext, useEffect, useState } from "react";
import { Repository } from "../types";
import { useApi } from "../api/useApi";
import { RepositoriesTable } from "./RepositoriesTable";
import { Grid } from "@mui/material";
import { AppContext } from "../context/AppContext";

interface RepositoriesListProps {
  searchQuery?: string;
}

export const RepositoriesList = ({}: RepositoriesListProps) => {
  const { fetchRepositories } = useApi();
  const [repos, setRepos] = useState<Repository[]>([]);
  const { searchQuery } = useContext(AppContext);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setRepos([]);
      fetchRepositories(searchQuery).then((repositories) => {
        setRepos(repositories);
      });
    }, 500);

    return () => {
      clearTimeout(timeout);
    };
  }, [searchQuery]);

  return (
    <Grid size={8} mt={3} offset={2}>
      <RepositoriesTable repos={repos} />
    </Grid>
  );
};
