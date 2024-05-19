import Home from "./Home";
import { MemoryRouter } from "react-router-dom";
import { renderWithQueryClientProvider } from "src/__test__/utils/render-with-query-client-provider";
import { screen } from "@testing-library/react";

// HTML content
const htmlContent = `
  <div>
    <h1>Welcome to Home Page</h1>
    <p>This is a paragraph</p>
    <!-- Add any other HTML elements as needed -->
  </div>
`;

const wrapWithMemoryRouter = (
  <MemoryRouter>
    <Home />
  </MemoryRouter>
);

// Describe the test case
describe("Home", () => {
  it("should display the HTML content", async () => {
    renderWithQueryClientProvider(wrapWithMemoryRouter);
    screen.getByText(/Send us your/);
    screen.getByText(/Satellite Streak/);
    screen.getByText(/Learn more/);
    screen.getByText(/View Gallery/);
    // Add assertions for other elements if needed
  });
});
