import { render, screen } from "@testing-library/react";
import Header from "./Header";
import { MemoryRouter } from "react-router-dom";

describe("Header", () => {
  it("should display", async () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );
    const link = screen.getByRole("link");
    expect(link).toHaveTextContent("SpaceTitle");
  });
});
