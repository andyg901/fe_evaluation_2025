import { useContext, useEffect, useState } from "react";
import { Grid } from "@mui/material";
import { useNotifications } from "@toolpad/core";
import { AppContext } from "../app/AppContext";
import { RepositoriesTable } from "./components/RepositoriesTable";
import { useApi } from "../shared/hooks/useApi";
import { Repository } from "../shared/types/repository";

interface RepositoriesListProps {
  searchQuery?: string;
}

export const RepositoriesList = ({}: RepositoriesListProps) => {
  const { fetchRepositories } = useApi();
  const [repos, setRepos] = useState<Repository[]>([]);
  const { searchQuery } = useContext(AppContext);
  const notifications = useNotifications();

  useEffect(() => {
    const timeout = setTimeout(() => {
      setRepos([]);
      fetchRepositories(searchQuery)
        .then((repositories) => {
          setRepos(repositories);
        })
        .catch(() => {
          notifications.show("There was an error while fetching data", {
            severity: "error",
            autoHideDuration: 3000,
          });
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
