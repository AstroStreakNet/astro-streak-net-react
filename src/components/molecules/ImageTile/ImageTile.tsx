import { Link } from "react-router-dom";
import { PokemonEntry } from "src/types";

const ImageTile = ({ image }: { image: PokemonEntry }) => {
  // const { id, name, imgURL } = image;
  const entry_number = image.entry_number;
  const { name, url } = image.pokemon_species;

  return (
    <Link
      to={`/image/${entry_number}`}
      className="flex items-center justify-center p-3 w-96 m-3 light-border"
      data-testid={`image${entry_number}`}
    >
      <div className="col">
        <img src={url} alt={`Image ${name}`} />
        <h2 className="text-l text-center	p-2">{name}</h2>
      </div>
    </Link>
  );
};

export default ImageTile;
