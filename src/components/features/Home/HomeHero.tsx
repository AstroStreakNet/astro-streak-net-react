// src/components/features/Home/HomeHero.tsx
import { Link } from 'react-router-dom';
import React from 'react';

const HomeHero: React.FC = () => {
  return (
    <div className="home-hero">
      <div className="hero-content">
        <h1>Send us your<br />Satellite Streak</h1>
        <Link to="/about" className="learn-more-btn">Learn more</Link>
      </div>
    </div>
  );
};

export default HomeHero;