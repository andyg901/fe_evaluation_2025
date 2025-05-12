import { Repository } from "../types/repository";
import { mapQueryResponse } from "../utils/dataMapper";
import { buildSearchQuery } from "../utils/queryBuilder";

type FetchRepositories = (searchQuery?: string) => Promise<Repository[]>;
type UseApi = () => { fetchRepositories: FetchRepositories };

export const useApi: UseApi = () => {
  const API_URL = "https://api.github.com/graphql";
  const AUTH_TOKEN = process.env.REACT_APP_GITHUB_TOKEN ?? "";

  const fetchRepositories = (searchQuery = "") => {
    return fetch(API_URL, {
      method: "post",
      headers: { Authorization: `bearer ${AUTH_TOKEN}` },
      body: JSON.stringify({
        query: buildSearchQuery(searchQuery),
      }),
    })
      .then((res) => res.json())
      .then(mapQueryResponse);
  };

  return {
    fetchRepositories,
  };
};
