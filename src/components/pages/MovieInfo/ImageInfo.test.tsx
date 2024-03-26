import {
  screen,
  waitFor,
  waitForElementToBeRemoved,
} from "@testing-library/react";

import { MemoryRouter, Route, Routes } from "react-router-dom";
import {
  suppressErrors,
  unSuppressErrors,
} from "src/__test__/utils/suppress-unsuppress-errors";
import image from "src/__test__/mocks/image-info/1/image.json";
import ImageInfo from "./ImageInfo";
import { imageList500Factory } from "src/__test__/mocks/handlers";
import { renderWithQueryClientProvider } from "src/__test__/utils/render-with-query-client-provider";
import { server } from "src/__test__/mocks/server";

const imageId = "1";

const wrapWithMemoryRouter = (
  <MemoryRouter initialEntries={[`/image/${imageId}`]}>
    <Routes>
      <Route path="image/:id" element={<ImageInfo />} />
    </Routes>
  </MemoryRouter>
);

describe("ImageInfo", () => {
  it("should display the image", async () => {
    renderWithQueryClientProvider(wrapWithMemoryRouter);

    await waitFor(() => screen.getByText("Loading..."));
    await waitForElementToBeRemoved(() => screen.getByText("Loading..."));

    const header = screen.getByRole("heading");
    expect(header).toHaveTextContent(image.pokemon_species.name);
    const img = screen.getByRole("img");
    expect(img).toHaveAttribute("src", image.pokemon_species.url);
    expect(img).toHaveAttribute("alt", `Image ${image.pokemon_species.name}`);
  });
});

describe("MovieInfo Errors", () => {
  beforeEach(suppressErrors);
  afterEach(unSuppressErrors);

  it("should retry after 1 fail then succeed", async () => {
    server.use(imageList500Factory({ once: true }));

    renderWithQueryClientProvider(wrapWithMemoryRouter);

    await waitFor(() => screen.getByText("Loading..."));
    await waitForElementToBeRemoved(() => screen.getByText("Loading..."));

    const header = screen.getByRole("heading");
    expect(header).toHaveTextContent(image.pokemon_species.name);
    const img = screen.getByRole("img");
    expect(img).toHaveAttribute("src", image.pokemon_species.url);
    expect(img).toHaveAttribute("alt", `Image ${image.pokemon_species.name}`);
  });

  it("should fail twice and render an error", async () => {
    server.use(imageList500Factory());

    renderWithQueryClientProvider(wrapWithMemoryRouter);
    await waitFor(() => screen.getByText("Loading..."));
    await waitForElementToBeRemoved(() => screen.getByText("Loading..."));

    screen.getByText(`Image ${imageId} not found.`);
  });
});
