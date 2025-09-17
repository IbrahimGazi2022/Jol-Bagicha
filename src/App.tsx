import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AnnouncementBar, Category, Footer, NewProducts, Slider, SingleProductPage, DisProducts } from "./components";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <AnnouncementBar />
              <Slider />
              <Category />
              <DisProducts />
              <NewProducts />
              <Footer />
            </>
          }
        />
        <Route path="/product/:id" element={<SingleProductPage />} />
      </Routes>
    </Router>
  );
}

export default App;
