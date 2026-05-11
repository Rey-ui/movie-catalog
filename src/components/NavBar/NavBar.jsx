import { NavLink } from "react-router-dom";
import { BiSolidCameraMovie } from "react-icons/bi";
import css from "./NavBar.module.css";
import clsx from "clsx";
const NavBar = () => {
  const buildLinkClass = ({ isActive }) => {
    return clsx(css.headerLink, isActive && css.active);
  };
  return (
    <header className={css.header}>
      <div className={clsx("container", css.headerContainer)}>
        <a href="#" className={css.headerLogo}>
          <span className={css.headerLogoText}>Backstage</span>
          <BiSolidCameraMovie className={css.headerLogoSvg} />
        </a>
        <nav className={css.headerNav}>
          <ul className={css.headerList}>
            <li className={css.headerItem}>
              <NavLink className={buildLinkClass} to="/">
                Home
              </NavLink>
            </li>
            <li className={css.headerItem}>
              <NavLink className={buildLinkClass} to="/movies">
                Movies
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
