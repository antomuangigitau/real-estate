import { Link } from "react-router-dom";
import { Location, Logo } from "../Svg";
import { Button } from "./ui/button";
import { Phone } from "lucide-react";

const Header = () => {
  return (
    <header className="hidden md:flex items-center justify-between h-[125px] px-3 md:px-10">
      <div className="flex items-center">
        <Logo />
        <span className="ml-4 text-2xl">Real Estate</span>
      </div>
      <nav className="flex items-center gap-4">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="explore">
          <span className="inline-flex items-center gap-1">
            <Location /> Explore
          </span>
        </Link>
        <Link to="/contact">Contact Us</Link>
        <Button>
          <Phone className="mr-2 h-4 w-4" /> Request a call
        </Button>
      </nav>
    </header>
  );
};

export default Header;
