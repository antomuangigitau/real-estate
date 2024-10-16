import { Logo, Location } from "@/Svg";
import { AlignCenter, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { X } from "lucide-react";
import { useStore } from "@/store";

const MobileHeader = () => {
  const { isOpen, setIsOpen } = useStore((state) => state);

  return (
    <header className="flex px-3 h-[70px] items-center justify-between md:hidden">
      <div className="flex items-center">
        <Logo />
        <span className="ml-4 text-2xl">Real Estate</span>
      </div>
      <AlignCenter onClick={() => setIsOpen()} />
      <div
        className={`${
          isOpen ? "animate-fade-in" : "animate-fade-out"
        } w-full z-10 h-full absolute bg-white top-0 left-0 border border-gray-500 px-4 py-3`}>
        <nav className="flex flex-col gap-10 mt-10">
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

        <X onClick={() => setIsOpen()} className="absolute top-1 right-1" />
      </div>
    </header>
  );
};

export default MobileHeader;
