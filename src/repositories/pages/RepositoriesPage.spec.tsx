import { findByRole, fireEvent, render, screen } from "@testing-library/react";
import { MockedProvider } from "@apollo/client/testing";
import { RepositoriesPage } from "./RepositoriesPage";
import {
  repositoriesMock,
  repositoriesMockWithError,
} from "../../test/mocks/repositoriesMock";
import { NotificationsProvider } from "@toolpad/core";

const mocks = repositoriesMock;

it("renders without error", async () => {
  render(
    <MockedProvider mocks={mocks}>
      <RepositoriesPage />
    </MockedProvider>,
  );

  expect(await screen.findByRole("search-input")).toBeInTheDocument();
});

it("represent loading state correctly", async () => {
  render(
    <MockedProvider mocks={mocks}>
      <RepositoriesPage />
    </MockedProvider>,
  );

  const loader = await screen.findByTestId("repositories-list:table:loader");

  expect(loader).toBeInTheDocument();
  expect(
    (await screen.findAllByTestId("repositories-list:table:cell-name"))?.[0],
  ).toHaveTextContent("freeCodeCamp/freeCodeCamp");
  expect(loader).not.toBeInTheDocument();
});

it("renders repositories information", async () => {
  render(
    <MockedProvider mocks={mocks}>
      <RepositoriesPage />
    </MockedProvider>,
  );

  const testRepos = [
    {
      nameWithOwner: "freeCodeCamp/freeCodeCamp",
      forkCount: 40085,
      stargazerCount: 417876,
      url: "https://github.com/freeCodeCamp/freeCodeCamp",
      index: 0,
    },
    {
      nameWithOwner: "facebook/react",
      forkCount: 48469,
      stargazerCount: 235375,
      url: "https://github.com/facebook/react",
      index: 1,
    },
    {
      nameWithOwner: "vercel/next.js",
      forkCount: 28359,
      stargazerCount: 131764,
      url: "https://github.com/vercel/next.js",
      index: 2,
    },
  ];

  for (const repoData of testRepos) {
    expect(
      (await screen.findAllByTestId("repositories-list:table:cell-name"))?.[
        repoData.index
      ],
    ).toHaveTextContent(repoData.nameWithOwner);
    expect(
      (
        await screen.findAllByTestId(
          "repositories-list:table:cell-stargazer-count",
        )
      )?.[repoData.index],
    ).toHaveTextContent(`${repoData.stargazerCount}`);
    expect(
      (
        await screen.findAllByTestId("repositories-list:table:cell-fork-count")
      )?.[repoData.index],
    ).toHaveTextContent(`${repoData.forkCount}`);
  }
});

it("informs user about default search query", async () => {
  render(
    <MockedProvider mocks={mocks}>
      <RepositoriesPage />
    </MockedProvider>,
  );

  expect(await screen.findByRole("search-input:helper-text")).toHaveTextContent(
    'Displaying results for "topic:react"',
  );
});

it("allows search input interaction", async () => {
  render(
    <MockedProvider mocks={mocks}>
      <RepositoriesPage />
    </MockedProvider>,
  );

  const helperText = await screen.findByRole("search-input:helper-text");
  expect(helperText).toHaveTextContent('Displaying results for "topic:react"');

  expect(await screen.findByRole("search-input:label-text")).toHaveTextContent(
    "Type to start searching...",
  );

  const searchInput = await screen.findByTestId("search-input");
  fireEvent.change(searchInput, { target: { value: "vanillaJS" } });

  expect(searchInput).toHaveValue("vanillaJS");
  expect(helperText).not.toBeInTheDocument();
});

it("displays error notification if query reponds with error", async () => {
  render(
    <NotificationsProvider>
      <MockedProvider mocks={repositoriesMockWithError}>
        <RepositoriesPage />
      </MockedProvider>
    </NotificationsProvider>,
  );

  expect(await screen.findByRole("alert")).toHaveTextContent(
    "There was an error while fetching data",
  );
});
