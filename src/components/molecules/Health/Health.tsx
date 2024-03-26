import { app } from "../../../config";
import HomeLink from "../../atoms/HomeLink/HomeLink";

const Health = () => {
  const { name, stage, version } = app;
  return (
    <>
      <p>Name: {name}</p>
      <p>Stage: {stage}</p>
      <p>Version: {version}</p>
      <HomeLink />
    </>
  );
};

export default Health;
