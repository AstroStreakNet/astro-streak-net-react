import ErrorMessage from "src/components/molecules/ErrorMessage/ErrorMessage";
import HomeLink from "src/components/atoms/HomeLink/HomeLink";
import ImageDetails from "src/components/molecules/ImageDetails/ImageDetails";
import LoadingMessage from "src/components/atoms/LoadingMessage/LoadingMessage";
import NavBar from "src/components/atoms/NavBar/NavBar";
import { PokemonEntry } from "src/types";
import useFetchImageList from "src/hooks/useFetchImageList";
import { useParams } from "react-router-dom";

type ImageInfoParams = {
  id: string;
};

const ImageInfo = () => {
    <NavBar />
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

  const { pokemon_species } = data.pokemon_entries.find(
    (pokemon) => `${pokemon.entry_number}` === id
  ) as PokemonEntry;

  return (
    <>
      <div className="wrap items-center justify-center p-5">
        <img
          className="p-5 m-5 light-border"
          src={pokemon_species.url}
          alt={`Image ${pokemon_species.name}`}
        />
        <ImageDetails title={pokemon_species.name} />
      </div>
      <HomeLink />
    </>
  );
};

export default ImageInfo;
