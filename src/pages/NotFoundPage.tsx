// src/pages/NotFoundPage.tsx
import { Link } from 'react-router-dom';
import React from 'react';

const NotFoundPage: React.FC = () => {
  return (
    <div className="not-found-page">
      <h1>404 - Page Not Found</h1>
      <p>The page you are looking for does not exist.</p>
      <Link to="/" className="home-link">Return to Home</Link>
    </div>
  );
};

export default NotFoundPage;