import { BrowserRouter, Route, Routes } from "react-router-dom";
import Articles from "../Articles/Articles";
import Home from "../Home/Home";
import Contact from "../Contact/Contact";
import Navbar from "../Navbar/NavBar";

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
