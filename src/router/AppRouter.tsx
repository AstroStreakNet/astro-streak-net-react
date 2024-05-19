import { BrowserRouter, Route, Routes } from "react-router-dom";
import Gallery from "../components/pages/Gallery/Gallery";
import Header from "src/components/atoms/Header/Header";
import Health from "src/components/molecules/Health/Health";
import Home from "src/components/pages/Home/Home";
import ImageInfo from "src/components/pages/ImageInfo/ImageInfo";
import NavBar from "../components/atoms/NavBar/NavBar";
import NotFound from "src/components/pages/NotFound/NotFound";
import Upload from "../components/pages/Upload/Upload";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Header />
      <NavBar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/image" element={<Gallery />} />
          <Route path="/upload" element={<Upload />} />
          <Route path="/health" element={<Health />} />
          <Route path="/image/:id" element={<ImageInfo />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default AppRouter;
