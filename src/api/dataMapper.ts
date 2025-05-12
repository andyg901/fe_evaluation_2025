import { GraphQlReponse, Repository } from "../types";

export type MapQueryResponse = (data: GraphQlReponse) => Repository[];

export const mapQueryResponse: MapQueryResponse = ({ data }) => {
  return data.search.edges.map(
    ({ node: { nameWithOwner, forkCount, stargazerCount, url } }) => ({
      nameWithOwner,
      forkCount,
      stargazerCount,
      url,
    }),
  );
};
