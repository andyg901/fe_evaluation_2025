import { Repository } from "./repository";

export interface GraphQlReponse {
  data: {
    search: {
      edges: {
        node: Repository;
      }[];
    };
  };
}
