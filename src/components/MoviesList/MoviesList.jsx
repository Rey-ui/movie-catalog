import { useLocation } from "react-router-dom";
import MovieCard from "../MovieCard/MovieCard";
import css from "./MoviesList.module.css";
const MoviesList = ({ movies }) => {
  const location = useLocation();
  return (
    <ul className={css.moviesList}>
      {movies.map((movie) => {
        return (
          <li className={css.moviesItem} key={movie.id}>
            <MovieCard movie={movie} location={location} />
          </li>
        );
      })}
    </ul>
  );
};

export default MoviesList;
