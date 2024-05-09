import Description from "src/components/atoms/Description/Description";
import HomeBackgroundPic from "src/components/atoms/HomeElements/HomeBackgroundPic";
import NavBar from "src/components/atoms/NavBar/NavBar";


const Home = () => {
  return (
    <>
      <NavBar/>
      <HomeBackgroundPic/>
      <Description />

    </>
  );
};

export default Home;
