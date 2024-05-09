const HomeBackgroundImage: React.FC = () => {
  return (
    <div className="homepage">
      <div className="background-img">
        <img src="src/components/atoms/HomeElements/spacePic.png" alt="Space" />
        <div className="content">
          <h1>Send us your Satellite Streak</h1>
          <a href="#" className="learn-more-btn">Learn more</a>
        </div>
      </div>
    </div>
  );
};

export default HomeBackgroundImage;
