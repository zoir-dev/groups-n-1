import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "../Styles/App.css";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Home from "../Pages/Home/Home";
import Likeds from "../Pages/Liked/Liked";
import Banner from "../Pages/Banner/Banner";
import Orders from "../Pages/Orders/Orders";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/likeds" element={<Likeds />} />
        <Route path="/banners" element={<Banner />} />
        <Route path="/orders" element={<Orders />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
