export interface GraphQlReponse {
  data: {
    search: {
      edges: {
        node: Repository;
      }[];
    };
  };
}

export type Repository = {
  nameWithOwner: string;
  forkCount: number;
  stargazerCount: number;
  url: string;
};

export interface IAppState {
  searchQuery: string;
}
