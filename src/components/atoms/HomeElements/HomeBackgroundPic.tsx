import HomeImageList from "src/components/organisms/ImagesList/HomeImageList";

const HomeBackgroundImage: React.FC = () => {
  return (
    <div className="homepage">
      <div className="background-img">

        <div className="content">
          <h1>Send us your<br></br>Satellite Streak</h1>
          <a href="#" className="learn-more-btn">Learn more</a>
        </div>
      </div>
       <div className="Home-Line"></div>
       <a href="/image" className="gallery-link">View Gallery &#8250;</a>

    </div>

  );
};

export default HomeBackgroundImage;
