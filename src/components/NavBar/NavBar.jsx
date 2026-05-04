import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/">home</NavLink>
        </li>
        <li>
          <NavLink to="/movies">movies</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
