import HomeLink from "src/components/atoms/HomeLink/HomeLink";

type ErrorType = {
  error: string;
};

const ErrorMessage = ({ error }: ErrorType) => {
  return (
    <>
      <div className="centered" data-testid="error-message">
        <p>{error}</p>
      </div>
      <HomeLink />
    </>
  );
};

export default ErrorMessage;
