import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../app/AppContext";
import { useLazyQuery } from "@apollo/client";
import { SEARCH_REPOSITORIES } from "../queries/searchRepositories";
import { useNotifications } from "@toolpad/core";
import { Repository } from "../../shared/types/repository";
import { mapQueryResponse } from "../utils/dataMapper";
import { Pagination } from "../../shared/types/graphql";

type State = {
  data: Repository[];
  pagination: Pagination;
};

type QueryParametersState =
  | {
      searchQuery: string;
      after?: string;
      before?: string;
      first: Number;
      last?: never;
    }
  | {
      searchQuery: string;
      after?: string;
      before?: string;
      first?: never;
      last: Number;
    };

const PAGE_SIZE = 10;

export const useRepositoriesFetch = () => {
  const [results, setResults] = useState<State>({
    data: [],
    pagination: {
      hasNextPage: false,
      hasPreviousPage: false,
      endCursor: "",
      startCursor: "",
    },
  });
  const notifications = useNotifications();
  const { searchQuery } = useContext(AppContext);
  const [getRepositories, { loading, error, data }] =
    useLazyQuery(SEARCH_REPOSITORIES);
  const [queryParameters, setQueryParameters] = useState<QueryParametersState>({
    searchQuery: searchQuery || "topic:react",
    first: PAGE_SIZE,
  });

  useEffect(() => {
    setQueryParameters((state) => ({
      ...state,
      searchQuery: searchQuery || "topic:react",
      // reset pagination state
      first: PAGE_SIZE,
      last: undefined,
      endCursor: "",
      startCursor: "",
    }));
  }, [searchQuery]);

  useEffect(() => {
    // Debounce data fetching, don't trigger data load on every searchQuery change
    const timeout = setTimeout(() => {
      getRepositories({
        variables: queryParameters,
      });
    }, 500);

    return () => {
      clearTimeout(timeout);
    };
  }, [queryParameters, getRepositories]);

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
        pagination: data.search.pageInfo,
      });
    }
  }, [loading, error, data, notifications]);

  const changePage = (page: "prev" | "next") => {
    if (page === "prev") {
      setQueryParameters({
        ...queryParameters,
        first: undefined,
        last: PAGE_SIZE,
        after: undefined,
        before: results.pagination.startCursor,
      });

      return;
    }

    setQueryParameters({
      ...queryParameters,
      first: PAGE_SIZE,
      last: undefined,
      after: results.pagination.endCursor,
      before: undefined,
    });
  };

  return {
    loading,
    results,
    changePage,
  };
};
