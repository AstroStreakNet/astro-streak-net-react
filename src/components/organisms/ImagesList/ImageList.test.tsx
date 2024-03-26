import {
  screen,
  waitFor,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import {
  suppressErrors,
  unSuppressErrors,
} from "src/__test__/utils/suppress-unsuppress-errors";
import ImageList from "./ImageList";
import { imageList500Factory } from "src/__test__/mocks/handlers";
import images from "src/__test__/mocks/image-lists/images.json";
import { MemoryRouter } from "react-router-dom";
import { renderWithQueryClientProvider } from "src/__test__/utils/render-with-query-client-provider";
import { server } from "src/__test__/mocks/server";

const wrapWithMemoryRouter = (
  <MemoryRouter>
    <ImageList />
  </MemoryRouter>
);

describe("ImageList", () => {
  it("should display the images", async () => {
    renderWithQueryClientProvider(wrapWithMemoryRouter);

    await waitFor(() => screen.getByText("Loading..."));
    await waitForElementToBeRemoved(() => screen.getByText("Loading..."));

    images.pokemon_entries.forEach(({ pokemon_species }) => {
      screen.getByText(pokemon_species.name);
      screen.getByAltText(`Image ${pokemon_species.name}`);
    });
  });
});

describe("ImageList Errors", () => {
  beforeEach(suppressErrors);
  afterEach(unSuppressErrors);

  it("should fail once, retry, then display the images", async () => {
    server.use(imageList500Factory({ once: true }));

    renderWithQueryClientProvider(wrapWithMemoryRouter);

    await waitFor(() => screen.getByText("Loading..."));
    await waitForElementToBeRemoved(() => screen.getByText("Loading..."));

    images.pokemon_entries.forEach(({ pokemon_species }) => {
      screen.getByText(pokemon_species.name);
      screen.getByAltText(`Image ${pokemon_species.name}`);
    });
  });

  it("should fail twice, then display an error", async () => {
    server.use(imageList500Factory());

    renderWithQueryClientProvider(wrapWithMemoryRouter);

    await waitFor(() => screen.getByText("Loading..."));
    await waitForElementToBeRemoved(() => screen.getByText("Loading..."));

    screen.getByText("Images could not be retrieved: Fail");
  });
});
