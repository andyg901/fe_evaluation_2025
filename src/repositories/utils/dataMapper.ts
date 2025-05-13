import { GraphQlReponse } from "../../shared/types/api";
import { Repository } from "../../shared/types/repository";

export type MapQueryResponse = (data: GraphQlReponse) => Repository[];

export const mapQueryResponse: MapQueryResponse = (data) => {
  return data.search.edges.map(
    ({ node: { nameWithOwner, forkCount, stargazerCount, url } }) => ({
      nameWithOwner,
      forkCount,
      stargazerCount,
      url,
    }),
  );
};
