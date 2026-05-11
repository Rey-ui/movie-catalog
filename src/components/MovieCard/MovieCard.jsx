import { NavLink } from "react-router-dom";

const MovieCard = ({ movie, location }) => {
  return (
    <NavLink to={`/movies/${movie.id}`} state={location}>
      <img
        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
        alt={movie.title}
      />
      <h3>{movie.title}</h3>
    </NavLink>
  );
};

export default MovieCard;
