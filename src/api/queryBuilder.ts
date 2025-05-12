type BuildSearchQuery = (searchQuery?: string) => string;

export const buildSearchQuery: BuildSearchQuery = (searchQuery = "") => {
  // default search set to "react" topic
  const queryString = `${searchQuery ? searchQuery : "topic:react"}`;

  return `{
            search(type: REPOSITORY, query: "${queryString}", first: 10) {
                edges {
                node {
                    ... on Repository {
                    nameWithOwner,
                    forkCount,
                    stargazerCount,
                    url
                    }
                }
                }
            }
        }
  `;
};
