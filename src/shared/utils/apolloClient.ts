import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";

const AUTH_TOKEN = process.env.REACT_APP_GITHUB_TOKEN ?? "";

const link = createHttpLink({
  uri: "https://api.github.com/graphql",
  headers: { Authorization: `bearer ${AUTH_TOKEN}` },
});

export const client = new ApolloClient({
  link,
  cache: new InMemoryCache(),
});
