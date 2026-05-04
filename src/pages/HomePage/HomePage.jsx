import { useEffect, useState } from "react";
import { fethTrendingMovies } from "../../services/api";
import MoviesList from "../../components/MoviesList/MoviesList";
import Loader from "../../components/Loader/Loader";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";

const HomePage = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(false);
  useEffect(() => {
    async function getTrendingMovies() {
      try {
        setTrendingMovies([]);
        setLoader(true);
        setError(false);
        const { results } = await fethTrendingMovies();
        setTrendingMovies(results);
      } catch {
        setError(true);
      } finally {
        setLoader(false);
      }
    }
    getTrendingMovies();
  }, []);
  return (
    <div>
      {loader && <Loader />}
      {trendingMovies.length !== 0 ? (
        <MoviesList movies={trendingMovies} />
      ) : (
        <p>Nothing found</p>
      )}
      {error && <ErrorMessage />}
    </div>
  );
};

export default HomePage;
