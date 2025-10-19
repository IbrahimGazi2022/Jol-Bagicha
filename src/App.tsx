import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { showLoader, hideLoader } from "./redux/loaderSlice";
import Loader from "./components/Loader/Loader";
import { AnnouncementBar, Category, Footer, NewProducts, Slider, SingleProductPage, DisProducts, AllProductsPage } from "./components";
import { useEffect } from "react";

function App() {
  const dispatch = useDispatch();

  // Home page loader handle
  const HomePage = () => {
    useEffect(() => {
      dispatch(showLoader());
      const timer = setTimeout(() => {
        dispatch(hideLoader()); 
      }, 2000);

      return () => clearTimeout(timer); 
    }, [dispatch]);

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


  return (
    <Router>
      <Loader />
      <Routes>
        <Route path="/" element={<> {<HomePage />}</>} />
        <Route path="/product/:id" element={<SingleProductPage />} />
        <Route path="/page/AllProductsPage" element={<AllProductsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
