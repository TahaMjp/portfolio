import { Home, FileText, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="w-10/12 flex justify-around fixed h-14 border-white/20 border-t bottom-10 z-50 bg-white/10 rounded-xl backdrop-blur-md shadow-lg shadow-black/50 text-white translate-x-[-50%] left-1/2">
      <Link to={"/"} className="w-3/12 items-center flex justify-center py-2">
        <Home />
      </Link>
      <Link
        to={"/articles"}
        className="w-3/12 flex items-center justify-center py-2"
      >
        <FileText />
      </Link>
      <Link
        to={"/contact"}
        className="w-3/12 flex items-center justify-center py-2"
      >
        <Mail />
      </Link>
    </div>
  );
};

export default Navbar;
