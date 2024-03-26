import Home from "./Home";
import { MemoryRouter } from "react-router-dom";
import { renderWithQueryClientProvider } from "src/__test__/utils/render-with-query-client-provider";
import { screen } from "@testing-library/react";

const wrapWithMemoryRouter = (
  <MemoryRouter>
    <Home />
  </MemoryRouter>
);

describe("Home", () => {
  it("should display the movies", async () => {
    renderWithQueryClientProvider(wrapWithMemoryRouter);
    screen.getByText(/Placeholder Read Me/);
  });
});
