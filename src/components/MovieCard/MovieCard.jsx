import { NavLink } from "react-router-dom";
import css from "./MovieCard.module.css";
const MovieCard = ({ movie, location }) => {
  return (
    <NavLink
      className={css.movieCard}
      to={`/movies/${movie.id}`}
      state={location}
    >
      <img
        className={css.movieCardImg}
        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
        alt={movie.title}
      />
      <h3 className={css.movieCardTitle}>{movie.title}</h3>
    </NavLink>
  );
};

export default MovieCard;
