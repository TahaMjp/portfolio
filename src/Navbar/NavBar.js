import { Home, FileText, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="w-full flex justify-center sticky bottom-0 bg-white">
      <div className="flex justify-around w-10/12 py-3">
        <Link to={"/"}>
          <Home />
        </Link>
        <Link to={"/articles"}>
          <FileText />
        </Link>
        <Link to={"/contact"}>
          <Mail />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
