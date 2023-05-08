import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "../Styles/App.css";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Home from "../Pages/Home/Home";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
