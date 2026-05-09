import { useEffect, useState } from "react";
import MoviesList from "../../components/MoviesList/MoviesList";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import Loader from "../../components/Loader/Loader";
import { fethMoviesByQuery, fethTrendingMovies } from "../../services/api";
import SearchForm from "../../components/SearchForm/SearchForm";

const MoviesPage = () => {
  const [articles, setArticles] = useState([]);
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(false);
  const [query, setQuery] = useState("");

  useEffect(() => {
    if (!query) return;
    async function getMoviesByQuery() {
      try {
        setLoader(true);
        setError(false);

        const { results } = await fethMoviesByQuery(query);
        if (results.length === 0) {
          console.log("nothing found");
          return;
        }
        console.log(results);
        setArticles(results);
      } catch {
        setError(true);
      } finally {
        setLoader(false);
      }
    }
    getMoviesByQuery();
  }, [query]);
  useEffect(() => {
    const controller = new AbortController();
    async function getMovies() {
      try {
        setLoader(true);
        setError(false);
        const { results } = await fethTrendingMovies(controller);
        if (results.length === 0) {
          console.log("nothing found");
          return;
        }
        console.log(results);
        setArticles(results);
      } catch (err) {
        if (err.code !== "ERR_CANCELED") {
          setError(true);
        }
      } finally {
        setLoader(false);
      }
    }
    getMovies();
    return () => {
      controller.abort();
    };
  }, []);
  const handleSubmit = (value) => {
    setQuery(value);
  };
  return (
    <div>
      <SearchForm submit={handleSubmit} />
      {articles.length !== 0 ? (
        <MoviesList movies={articles} />
      ) : (
        <p>Nothing found</p>
      )}
      {error && <ErrorMessage />}
      {loader && <Loader />}
    </div>
  );
};

export default MoviesPage;
