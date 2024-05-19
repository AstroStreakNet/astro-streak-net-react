import AppRouter from "./AppRouter";
import { renderWithQueryClientProvider } from "src/__test__/utils/render-with-query-client-provider";
import { screen } from "@testing-library/react";

describe("AppRouter", () => {
  it("renders all components", async () => {
    renderWithQueryClientProvider(<AppRouter />);

    screen.getByText(/Send us your/);
    screen.getByText(/Satellite Streak/);
    screen.getByText(/Learn more/);
    screen.getByText(/View Gallery/);
  });
});
