import { render, screen } from "@testing-library/react";
import LoadingMessage from "./LoadingMessage";

describe("LoadingMessage", () => {
  it("should display", async () => {
    render(<LoadingMessage />);
    const textElement = screen.getByText("Loading...");
    expect(textElement).toBeInTheDocument();
  });
});
