import { render, screen, waitFor } from "@testing-library/react";
import { imageResponseListToImageList } from "../../../types/mapper/images";
import images from "src/__test__/mocks/image-lists/images.json";
import ImageTile from "./ImageTile";
import { MemoryRouter } from "react-router-dom";

describe("ImageTile", () => {
  it("should display the image tile", async () => {
    const imageResponseList = images;
    const image = imageResponseListToImageList(imageResponseList)[0];
    render(
      <MemoryRouter>
        <ImageTile image={image} />
      </MemoryRouter>
    );

    await waitFor(() => screen.getByText(image.name));
    const img = await waitFor(() => screen.getByRole("img"));
    expect(img).toHaveAttribute("src", image.url);
    expect(img).toHaveAttribute("alt", `Image ${image.name}`);
    const link = await waitFor(() => screen.getByRole("link"));
    expect(link).toHaveAttribute("href", `/image/${image.name}`);
  });
});
