const HomeBackgroundImage: React.FC = () => {
  return (
    <div className="homepage">
      <div className="background-img">
        <img src="spacePic.png" alt="Space" />
        <div className="content">
          <h1>Send us your<br></br>Satellite Streak</h1>
          <a href="#" className="learn-more-btn">Learn more</a>
        </div>
      </div>
       <div className="Home-Line"></div>
    </div>
  );
};

export default HomeBackgroundImage;
