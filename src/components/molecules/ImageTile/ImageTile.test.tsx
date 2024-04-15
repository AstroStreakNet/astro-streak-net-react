import { render, screen, waitFor } from "@testing-library/react";
import images from "src/__test__/mocks/image-lists/imagesPlaceholder.json";
import ImageTile from "./ImageTile";
import { MemoryRouter } from "react-router-dom";

describe("ImageTile", () => {
  it("should display the image tile", async () => {
    const imageResponse = images.pokemon_entries[0];
    render(
      <MemoryRouter>
        <ImageTile image={imageResponse} />
      </MemoryRouter>
    );

    await waitFor(() => screen.getByText(imageResponse.pokemon_species.name));
    const img = await waitFor(() => screen.getByRole("img"));
    expect(img).toHaveAttribute("src", imageResponse.pokemon_species.url);
    expect(img).toHaveAttribute(
      "alt",
      `Image ${imageResponse.pokemon_species.name}`
    );
    const link = await waitFor(() => screen.getByRole("link"));
    expect(link).toHaveAttribute(
      "href",
      `/image/${imageResponse.entry_number}`
    );
  });
});
