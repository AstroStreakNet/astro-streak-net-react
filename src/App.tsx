// src/App.tsx
import './styles/index.css';  // Single import from internal modules
import { AuthProvider, UIProvider } from './context';  // Multiple imports from internal modules
import { BrowserRouter as Route, Router, Routes } from 'react-router-dom'; // Multiple imports from an external module

import Footer from './components/layout/Footer/Footer';  // Single import from internal modules
import GalleryPage from './pages/GalleryPage';  // Single import from internal modules
import HomePage from './pages/HomePage';  // Single import from internal modules
import ImageInfoPage from './pages/ImageInfoPage';  // Single import from internal modules
import LoginPage from './pages/LoginPage';  // Single import from internal modules
import NavBar from './components/layout/NavBar/NavBar';  // Single import from internal modules
import NotFoundPage from './pages/NotFoundPage';  // Single import from internal modules
import React from 'react';  // Single import from an external module
import RegisterPage from './pages/RegisterPage';  // Single import from internal modules
import { ROUTES } from './constants';  // Single import from internal modules
import UploadPage from './pages/UploadPage';  // Single import from internal modules


const App: React.FC = () => {
  return (
    <AuthProvider>
      <UIProvider>
        <Router>
          <div className="app">
            <NavBar />
            <main className="main-content">
              <Routes>
                <Route path={ROUTES.HOME} element={<HomePage />} />
                <Route path={ROUTES.GALLERY} element={<GalleryPage />} />
                <Route path={ROUTES.IMAGE_DETAILS} element={<ImageInfoPage />} />
                <Route path={ROUTES.UPLOAD} element={<UploadPage />} />
                <Route path={ROUTES.LOGIN} element={<LoginPage />} />
                <Route path={ROUTES.REGISTER} element={<RegisterPage />} />
                <Route path="*" element={<NotFoundPage />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </UIProvider>
    </AuthProvider>
  );
};

export default App;