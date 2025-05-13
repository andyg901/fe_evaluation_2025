import { SEARCH_REPOSITORIES } from "../../repositories/queries/searchRepositories";

export const repositoriesMock = [
  {
    delay: 60,
    request: {
      query: SEARCH_REPOSITORIES,
      variables: {
        searchQuery: "topic:react",
        first: 10,
      },
    },
    result: {
      data: {
        search: {
          edges: [
            {
              node: {
                nameWithOwner: "freeCodeCamp/freeCodeCamp",
                forkCount: 40085,
                stargazerCount: 417876,
                url: "https://github.com/freeCodeCamp/freeCodeCamp",
                __typename: "Repository",
              },
              __typename: "SearchResultItemEdge",
            },
            {
              node: {
                nameWithOwner: "facebook/react",
                forkCount: 48469,
                stargazerCount: 235375,
                url: "https://github.com/facebook/react",
                __typename: "Repository",
              },
              __typename: "SearchResultItemEdge",
            },
            {
              node: {
                nameWithOwner: "vercel/next.js",
                forkCount: 28359,
                stargazerCount: 131764,
                url: "https://github.com/vercel/next.js",
                __typename: "Repository",
              },
              __typename: "SearchResultItemEdge",
            },
            {
              node: {
                nameWithOwner: "facebook/react-native",
                forkCount: 24650,
                stargazerCount: 121971,
                url: "https://github.com/facebook/react-native",
                __typename: "Repository",
              },
              __typename: "SearchResultItemEdge",
            },
            {
              node: {
                nameWithOwner: "justjavac/free-programming-books-zh_CN",
                forkCount: 28315,
                stargazerCount: 113778,
                url: "https://github.com/justjavac/free-programming-books-zh_CN",
                __typename: "Repository",
              },
              __typename: "SearchResultItemEdge",
            },
            {
              node: {
                nameWithOwner: "facebook/create-react-app",
                forkCount: 27006,
                stargazerCount: 103216,
                url: "https://github.com/facebook/create-react-app",
                __typename: "Repository",
              },
              __typename: "SearchResultItemEdge",
            },
            {
              node: {
                nameWithOwner: "mui/material-ui",
                forkCount: 32556,
                stargazerCount: 95596,
                url: "https://github.com/mui/material-ui",
                __typename: "Repository",
              },
              __typename: "SearchResultItemEdge",
            },
            {
              node: {
                nameWithOwner: "ant-design/ant-design",
                forkCount: 52270,
                stargazerCount: 94594,
                url: "https://github.com/ant-design/ant-design",
                __typename: "Repository",
              },
              __typename: "SearchResultItemEdge",
            },
            {
              node: {
                nameWithOwner: "shadcn-ui/ui",
                forkCount: 5901,
                stargazerCount: 86905,
                url: "https://github.com/shadcn-ui/ui",
                __typename: "Repository",
              },
              __typename: "SearchResultItemEdge",
            },
            {
              node: {
                nameWithOwner: "storybookjs/storybook",
                forkCount: 9528,
                stargazerCount: 86603,
                url: "https://github.com/storybookjs/storybook",
                __typename: "Repository",
              },
              __typename: "SearchResultItemEdge",
            },
          ],
          pageInfo: {
            endCursor: "Y3Vyc29yOjEw",
            startCursor: "Y3Vyc29yOjE=",
            hasNextPage: true,
            hasPreviousPage: false,
            __typename: "PageInfo",
          },
          __typename: "SearchResultItemConnection",
        },
      },
    },
  },
];

export const repositoriesMockWithError = [
  {
    delay: 60,
    request: {
      query: SEARCH_REPOSITORIES,
      variables: {
        searchQuery: "topic:react",
        first: 10,
      },
    },
    error: new Error("An error occurred"),
  },
];
