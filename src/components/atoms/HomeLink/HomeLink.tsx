import { Link } from "react-router-dom";

const HomeLink = () => {
  return (
    <Link to="/" className="my-10" data-testid="home-link">
      {"Return Home"}
    </Link>
  );
};

export default HomeLink;
