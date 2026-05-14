import { NavLink } from "react-router-dom";
import css from "./MovieDetailsBar.module.css";
import clsx from "clsx";
const MovieDetailsBar = () => {
  const buildLinkClass = ({ isActive }) => {
    return clsx(css.detailsNavLink, isActive && css.active);
  };
  return (
    <nav className={css.detailsNav}>
      <ul className={css.detailsNavList}>
        <li className={css.detailsNavItem}>
          <NavLink className={buildLinkClass} to="cast">
            Cast
          </NavLink>
        </li>
        <li>
          <NavLink className={buildLinkClass} to="reviews">
            Reviews
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default MovieDetailsBar;
