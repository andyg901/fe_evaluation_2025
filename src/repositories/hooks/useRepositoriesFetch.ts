import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../app/AppContext";
import { useLazyQuery } from "@apollo/client";
import { SEARCH_REPOSITORIES } from "../queries/searchRepositories";
import { useNotifications } from "@toolpad/core";
import { Repository } from "../../shared/types/repository";
import { mapQueryResponse } from "../utils/dataMapper";

type State = {
  data: Repository[];
  pagination: {
    page?: number;
    pageSize?: number;
    pageCount?: number;
  };
};

export const useRepositoriesFetch = () => {
  const [results, setResults] = useState<State>({
    data: [],
    pagination: {},
  });
  const notifications = useNotifications();
  const { searchQuery } = useContext(AppContext);
  const [getRepositories, { loading, error, data }] =
    useLazyQuery(SEARCH_REPOSITORIES);

  useEffect(() => {
    // Debounce data fetching, don't trigger data load on every searchQuery change
    const timeout = setTimeout(() => {
      getRepositories({
        variables: { searchQuery: searchQuery || "topic:react" },
      });
    }, 500);

    return () => {
      clearTimeout(timeout);
    };
  }, [searchQuery]);

  useEffect(() => {
    // Inform about data fetching issue
    if (!loading && error) {
      notifications.show("There was an error while fetching data", {
        severity: "error",
        autoHideDuration: 3000,
      });
    }

    if (!loading && !error && data) {
      setResults({
        data: mapQueryResponse(data),
        pagination: {},
      });
    }
  }, [loading, error, data]);

  return {
    loading,
    results,
  };
};
