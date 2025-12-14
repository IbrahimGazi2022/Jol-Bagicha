import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Loader from "./components/Loader/Loader";
import LoaderHandler from "./components/Loader/LoaderHandler";
import { AnnouncementBar, Category, Footer, NewProducts, Slider, SingleProductPage, DisProducts, AllProductsPage, RegisterForm, LoginForm } from "./components";

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
        <Route path="/page/AllProductsPage" element={<AllProductsPage />} />
        <Route path="/page/register" element={<RegisterForm />} />
        <Route path="/page/login" element={<LoginForm />} />
      </Routes>
    </Router>
  );
}

export default App;
