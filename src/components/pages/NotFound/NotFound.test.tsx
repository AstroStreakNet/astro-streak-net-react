import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import NotFound from "./NotFound";

describe("NotFound", () => {
  it("should display", async () => {
    render(
      <MemoryRouter>
        <NotFound />
      </MemoryRouter>
    );
    const textElement = screen.getByText("404 Page not found");
    expect(textElement).toBeInTheDocument();
    expect(screen.getByRole("link")).toHaveTextContent("Return Home");
  });
});
