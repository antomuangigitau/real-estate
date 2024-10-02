import { Logo } from "../Svg";

const Header = () => {
  return (
    <header>
      <div className="flex items-center">
        <Logo />
        <span>Real Estate</span>
      </div>
    </header>
  );
};

export default Header;
