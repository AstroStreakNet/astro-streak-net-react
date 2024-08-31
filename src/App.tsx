import './styles/index.css';

import { AuthProvider, UIProvider } from './context';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ROUTES } from './constants';

import Footer from './components/layout/Footer/Footer';
import GalleryPage from './pages/GalleryPage';
import HomePage from './pages/HomePage';
import ImageInfoPage from './pages/ImageInfoPage';
import LoginPage from './pages/LoginPage';
import NavBar from './components/layout/NavBar/NavBar';
import NotFoundPage from './pages/NotFoundPage';
import React from 'react';
import RegisterPage from './pages/RegisterPage';
import UploadPage from './pages/UploadPage';

const App: React.FC = () => {
  return (
    <AuthProvider>
      <UIProvider>
        <BrowserRouter>
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
        </BrowserRouter>
      </UIProvider>
    </AuthProvider>
  );
};

export default App;