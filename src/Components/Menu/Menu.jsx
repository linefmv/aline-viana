import { Link } from "react-router-dom";
import { Nav } from "./styles.js";

const MenuLeft = () => {
  return (
    <Nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/projects">Projects</Link>
        </li>
        <li>
          <Link to="/hobbies">Hobbies</Link>
        </li>
      </ul>
    </Nav>
  );
};

export default MenuLeft;
