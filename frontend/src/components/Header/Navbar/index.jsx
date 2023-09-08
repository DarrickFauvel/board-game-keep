import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/list">list games</Link>
        </li>
        <li>
          <Link to="/add">add a game</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
