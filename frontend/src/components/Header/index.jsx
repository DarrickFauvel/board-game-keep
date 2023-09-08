import Navbar from "./Navbar/index.jsx";
import LogoHead from "../LogoHead.jsx/index.jsx";

const Header = () => {
  return (
    <header>
      <div className="container">
        <LogoHead />
      </div>
      <Navbar />
    </header>
  );
};

export default Header;
