import { gql } from "@apollo/client";

export const SEARCH_REPOSITORIES = gql`
  query search(
    $searchQuery: String!
    $before: String
    $after: String
    $first: Int
    $last: Int
  ) {
    search(
      type: REPOSITORY
      query: $searchQuery
      first: $first
      last: $last
      before: $before
      after: $after
    ) {
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
      pageInfo {
        endCursor
        startCursor
        hasNextPage
        hasPreviousPage
      }
    }
  }
`;
