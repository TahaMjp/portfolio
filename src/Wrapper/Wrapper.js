import { BrowserRouter, Route, Routes } from "react-router-dom";
import Articles from "../Articles/Articles";
import Navbar from "../Navbar/NavBar";
import Home from "../Home/Home";
import Contact from "../Contact/Contact";

const Wrapper = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Navbar />
    </BrowserRouter>
  );
};

export default Wrapper;
