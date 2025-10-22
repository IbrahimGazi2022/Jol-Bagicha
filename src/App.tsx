import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Loader from "./components/Loader/Loader";
import LoaderHandler from "./components/Loader/LoaderHandler";
import { AnnouncementBar, Category, Footer, NewProducts, Slider, SingleProductPage, DisProducts, AllProductsPage } from "./components";

const HomePage = () => {
  return (
    <>
      <AnnouncementBar />
      <Slider />
      <Category />
      <DisProducts />
      <NewProducts />
      <Footer />
    </>
  );
};

function App() {
  return (
    <Router>
      <Loader />
      <LoaderHandler />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product/:id" element={<SingleProductPage />} />
        <Route path="/page/AllProductsPage" element={<AllProductsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
