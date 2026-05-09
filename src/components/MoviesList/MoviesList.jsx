import { useLocation } from "react-router-dom";
import MovieCard from "../MovieCard/MovieCard";

const MoviesList = ({ movies }) => {
  const location = useLocation();
  console.log(location);
  return (
    <ul>
      {movies.map((movie) => {
        return (
          <li key={movie.id}>
            <MovieCard movie={movie} location={location} />
          </li>
        );
      })}
    </ul>
  );
};

export default MoviesList;
