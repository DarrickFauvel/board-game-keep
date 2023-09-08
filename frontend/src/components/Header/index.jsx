import Logo from "./Logo/index.jsx";
import Navbar from "./Navbar/index.jsx";

const Header = () => {
  return (
    <header>
      <div className="container">
        <Logo />
      </div>
      <Navbar />
    </header>
  );
};

export default Header;
