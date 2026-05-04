import { NavLink } from "react-router-dom";

const MovieCard = ({ movie }) => {
  return (
    <div>
      {movie.title}
      <NavLink to={`movies/${movie.id}`}>details</NavLink>
    </div>
  );
};

export default MovieCard;
