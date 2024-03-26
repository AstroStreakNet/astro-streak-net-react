import HomeLink from "src/components/atoms/HomeLink/HomeLink";

const NotFound = () => {
  return (
    <>
      <div className="centered" data-testid="not-found">
        <p>404 Page not found</p>
      </div>
      <HomeLink />
    </>
  );
};

export default NotFound;
