// src/components/features/Gallery/GalleryList.tsx
import ErrorMessage from "../../common/ErrorMessage/ErrorMessage";
import ImageTile from "../../common/ImageTile/ImageTile";
import LoadingMessage from "../../common/LoadingMessage/LoadingMessage";
import React from "react";
import useFetchImageList from "../../../hooks/useFetchImageList";

const GalleryList: React.FC = () => {
  const { isLoading, isError, data, error } = useFetchImageList();

  if (isLoading) return <LoadingMessage />;
  if (isError)
    return (
      <ErrorMessage message={`Error fetching images: ${error?.message}`} />
    );
  if (!data) return <ErrorMessage message="No images available." />;

  return (
    <div className="gallery-list">
      {data.map((image) => (
        <ImageTile key={image.name} image={image} />
      ))}
    </div>
  );
};

export default GalleryList;
