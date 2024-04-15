import ErrorMessage from "src/components/molecules/ErrorMessage/ErrorMessage";
import ImageTile from "src/components/molecules/ImageTile/ImageTile";
import LoadingMessage from "src/components/atoms/LoadingMessage/LoadingMessage";
import useFetchImageList from "../../../hooks/useFetchImageList";

const ImageList = () => {
  const { isLoading, isError, data, error } = useFetchImageList();

  if (isLoading) {
    return <LoadingMessage />;
  }

  if (isError) {
    return (
      <ErrorMessage error={`Images could not be retrieved: ${error.message}`} />
    );
  }

  // if loading & error are passed, we should not reach this - data will be available
  if (!data) {
    return <ErrorMessage error={`No Images available. \n ${error}`} />;
  }

  return (
    <div className="wrap justify-evenly w-11/12 ">
      {data.map((image) => {
        return <ImageTile key={image.name} image={image} />;
      })}
    </div>
  );
};

export default ImageList;
