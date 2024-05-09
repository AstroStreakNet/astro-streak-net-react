import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <Link to="/" className="my-10">
        <h1 className="text-4xl text-center"></h1>
      </Link>
    </header>
  );
};

export default Header;
