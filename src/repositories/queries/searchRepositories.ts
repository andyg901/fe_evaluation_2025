import { gql } from "@apollo/client";

export const SEARCH_REPOSITORIES = gql`
  query search($searchQuery: String!) {
    search(type: REPOSITORY, query: $searchQuery, first: 10) {
      edges {
        node {
          ... on Repository {
            nameWithOwner
            forkCount
            stargazerCount
            url
          }
        }
      }
    }
  }
`;
