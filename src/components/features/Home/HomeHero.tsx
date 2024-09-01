
import { Link } from 'react-router-dom';
import React from 'react';

const HomeHero: React.FC = () => {
  return (
    <div className="homepage">
      <div className="background-img"></div>
      <div className="content">
        <h1>Send us your<br />Satellite Streak</h1>
        <Link to="/about" className="learn-more-btn">Learn more</Link>
        <div className="Home-Line"></div>
        <Link to="/gallery" className="gallery-link">View Gallery &#8250;</Link>
      </div>
    </div>
  );
};

export default HomeHero;