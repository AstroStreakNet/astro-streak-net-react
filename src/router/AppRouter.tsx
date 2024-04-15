import { BrowserRouter, Route, Routes } from "react-router-dom";
import Gallery from "../components/pages/Gallery/Gallery";
import Header from "src/components/atoms/Header/Header";
import Health from "src/components/molecules/Health/Health";
import Home from "src/components/pages/Home/Home";
import ImageInfo from "src/components/pages/MovieInfo/ImageInfo";
import NotFound from "src/components/pages/NotFound/NotFound";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/image" element={<Gallery />} />
          <Route path="/health" element={<Health />} />
          <Route path="/image/:id" element={<ImageInfo />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default AppRouter;