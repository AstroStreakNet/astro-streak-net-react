import { Image } from "../../../types/domain/images";
import { Link } from "react-router-dom";

const ImageTile = ({ image }: { image: Image }) => {
  const { name, url } = image;

  return (
    <Link to={`/image/${image.name}`} data-testid={`image${image.name}`}>
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
