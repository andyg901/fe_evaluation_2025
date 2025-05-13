import { repositoriesMock } from "../../test/mocks/repositoriesMock";
import { mapQueryResponse } from "./dataMapper";

it("correctly map the data to desired format", async () => {
  const mockedServerResponse = repositoriesMock[0];
  const mappedResponse = mapQueryResponse(mockedServerResponse.result.data);

  const expectedMappedResult = [
    {
      nameWithOwner: "freeCodeCamp/freeCodeCamp",
      forkCount: 40085,
      stargazerCount: 417876,
      url: "https://github.com/freeCodeCamp/freeCodeCamp",
    },
    {
      nameWithOwner: "facebook/react",
      forkCount: 48469,
      stargazerCount: 235375,
      url: "https://github.com/facebook/react",
    },
    {
      nameWithOwner: "vercel/next.js",
      forkCount: 28359,
      stargazerCount: 131764,
      url: "https://github.com/vercel/next.js",
    },
    {
      nameWithOwner: "facebook/react-native",
      forkCount: 24650,
      stargazerCount: 121971,
      url: "https://github.com/facebook/react-native",
    },
    {
      nameWithOwner: "justjavac/free-programming-books-zh_CN",
      forkCount: 28315,
      stargazerCount: 113778,
      url: "https://github.com/justjavac/free-programming-books-zh_CN",
    },
    {
      nameWithOwner: "facebook/create-react-app",
      forkCount: 27006,
      stargazerCount: 103216,
      url: "https://github.com/facebook/create-react-app",
    },
    {
      nameWithOwner: "mui/material-ui",
      forkCount: 32556,
      stargazerCount: 95596,
      url: "https://github.com/mui/material-ui",
    },
    {
      nameWithOwner: "ant-design/ant-design",
      forkCount: 52270,
      stargazerCount: 94594,
      url: "https://github.com/ant-design/ant-design",
    },
    {
      nameWithOwner: "shadcn-ui/ui",
      forkCount: 5901,
      stargazerCount: 86905,
      url: "https://github.com/shadcn-ui/ui",
    },
    {
      nameWithOwner: "storybookjs/storybook",
      forkCount: 9528,
      stargazerCount: 86603,
      url: "https://github.com/storybookjs/storybook",
    },
  ];

  expect(mappedResponse).toEqual(expectedMappedResult);
});
