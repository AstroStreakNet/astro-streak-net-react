// src/pages/HomePage.tsx
import HomeHero from "../components/features/Home/HomeHero";
import HomeImageList from "../components/features/Home/HomeImageList";
import React from "react";

const HomePage: React.FC = () => {
  return (
    <div className="home-page">
      <HomeHero />
      <HomeImageList />
    </div>
  );
};

export default HomePage;
