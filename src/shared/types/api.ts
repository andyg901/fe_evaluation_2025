import { Repository } from "./repository";

export interface GraphQlReponse {
  search: {
    edges: {
      node: Repository;
    }[];
  };
}
