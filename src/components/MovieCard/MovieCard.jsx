import { NavLink } from "react-router-dom";

const MovieCard = ({ movie, location }) => {
  return (
    <div>
      {movie.title}
      <NavLink to={`/movies/${movie.id}`} state={location}>
        details
      </NavLink>
    </div>
  );
};

export default MovieCard;
