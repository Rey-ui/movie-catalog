import MovieCard from "../MovieCard/MovieCard";

const MoviesList = ({ movies }) => {
  return (
    <ul>
      {movies.map((movie) => {
        return (
          <li key={movie.id}>
            <MovieCard movie={movie} />
          </li>
        );
      })}
    </ul>
  );
};

export default MoviesList;
