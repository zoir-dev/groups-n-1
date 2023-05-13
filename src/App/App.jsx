import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "../Styles/App.css";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Home from "../Pages/Home/Home";
import Banner from "../Pages/Banner/Banner";
import Orders from "../Pages/Orders/Orders";
import Likeds from "../Pages/Likeds/Likeds";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <div className="main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/likeds" element={<Likeds />} />
            <Route path="/banners" element={<Banner />} />
            <Route path="/orders" element={<Orders />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
