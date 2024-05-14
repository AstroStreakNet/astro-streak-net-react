import GalleryHead from "src/components/atoms/GalleryElements/GalleryHead";
import ImageList from "src/components/organisms/ImagesList/ImageList";
import NavBar from "src/components/atoms/NavBar/NavBar";

const Gallery = () => {
  return (
    <>
      <NavBar />
      <GalleryHead />
      <ImageList />
    </>
  );
};

export default Gallery;
