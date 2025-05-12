type BuildSearchQuery = (searchQuery?: string) => string;

export const buildSearchQuery: BuildSearchQuery = (searchQuery = "") => {
  const queryString = `topic:react${searchQuery ? " and " + searchQuery : ""}`;

  return `{
            search(type: REPOSITORY, query: "${queryString}", first: 10) {
                edges {
                node {
                    ... on Repository {
                    nameWithOwner,
                    forkCount,
                    stargazerCount
                    }
                }
                }
            }
        }
  `;
};
