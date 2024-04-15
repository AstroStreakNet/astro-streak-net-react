import ErrorMessage from "src/components/molecules/ErrorMessage/ErrorMessage";
import HomeLink from "src/components/atoms/HomeLink/HomeLink";
import { Image } from "../../../types/domain/images";
import ImageDetails from "src/components/molecules/ImageDetails/ImageDetails";
import LoadingMessage from "src/components/atoms/LoadingMessage/LoadingMessage";
import useFetchImageList from "../../../hooks/useFetchImageList";
import { useParams } from "react-router-dom";

type ImageInfoParams = {
  id: string;
};

const ImageInfo = () => {
  const { id } = useParams() as ImageInfoParams;

  const { isLoading, isError, data } = useFetchImageList();

  if (isLoading) {
    return <LoadingMessage />;
  }

  if (isError) {
    return <ErrorMessage error={`Image ${id} not found.`} />;
  }

  // if loading & error are passed, we should not reach this - data will be available
  if (!data) {
    return <ErrorMessage error={`Image data not found.`} />;
  }

  const { name, url } = data.find((image) => `${image.name}` === id) as Image;

  return (
    <>
      <div className="wrap items-center justify-center p-5">
        <img className="p-5 m-5 light-border" src={url} alt={`Image ${name}`} />
        <ImageDetails title={name} />
      </div>
      <HomeLink />
    </>
  );
};

export default ImageInfo;
