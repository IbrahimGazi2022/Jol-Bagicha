import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AnnouncementBar, Category, Footer, NewProducts, Slider, SingleProductPage } from "./components";

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
