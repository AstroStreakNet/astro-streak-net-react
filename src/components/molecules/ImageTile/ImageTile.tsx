import { Link } from 'react-router-dom';
import { PokemonEntry } from 'src/types';

const ImageTile = ({ image }: { image: PokemonEntry }) => {
  const entry_number = image.entry_number;
  const { name, url } = image.pokemon_species;

  return (
    <Link
      to={`/image/${entry_number}`}

      data-testid={`image${entry_number}`}
    >
      <div className="col">
        {/* Image container */}
        <div className="image-container">
          {/* Author details */}
          <div className="author-details">
            {/* Account bubble */}
            <div className="account-bubble">A</div>
            {/* Author name */}
            <h2 className="author-name">{name}</h2>
          </div>
          {/* Image */}
          <img src={url} alt={`Image ${name}`} className="image" />
          {/* Image description */}
          <p className="image-description">Image description goes here</p>
        </div>
      </div>
    </Link>
  );
};

export default ImageTile;

