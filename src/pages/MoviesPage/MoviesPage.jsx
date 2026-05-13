import { useEffect, useState } from "react";
import MoviesList from "../../components/MoviesList/MoviesList";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import Loader from "../../components/Loader/Loader";
import { fethMoviesByQuery, fethTrendingMovies } from "../../services/api";
import SearchForm from "../../components/SearchForm/SearchForm";
import { useSearchParams } from "react-router-dom";
import SortBar from "../../components/SortBar/SortBar";
import toast, { Toaster } from "react-hot-toast";
import PageTitle from "../../components/PageTitle/PageTitle";
import css from "./MoviesPage.module.css";
const MoviesPage = () => {
  const [articles, setArticles] = useState([]);
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(false);
  const [query, setQuery] = useSearchParams();
  const [sortByAlphabet, setSortByAlphabet] = useState("");
  const title = query.get("query") ?? "";
  useEffect(() => {
    if (!title) return;
    async function getMoviesByQuery() {
      try {
        setLoader(true);
        setError(false);
        setArticles([]);
        const { results } = await fethMoviesByQuery(title);
        if (results.length === 0) {
          setQuery({});
          toast.error("Nothing found");
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
  }, [title]);
  useEffect(() => {
    if (title) return;
    const controller = new AbortController();
    async function getMovies() {
      try {
        setLoader(true);
        setError(false);
        setArticles([]);
        const { results } = await fethTrendingMovies(controller);
        if (results.length === 0) {
          toast.error("Nothing found");
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
  }, [title]);
  const handleSubmit = (key, value) => {
    const updatedParams = new URLSearchParams(query);
    updatedParams.set(key, value);
    setQuery(updatedParams);
    setSortByAlphabet("");
  };
  const handleSort = [...articles].sort((a, b) => {
    if (sortByAlphabet === "az") {
      return a.title.localeCompare(b.title);
    }

    if (sortByAlphabet === "za") {
      return b.title.localeCompare(a.title);
    }

    return 0;
  });
  return (
    <main>
      <div className="container">
        <PageTitle>Explore Movies</PageTitle>
        <div className={css.SearchContainer}>
          <SearchForm submit={handleSubmit} />
          <SortBar value={sortByAlphabet} change={setSortByAlphabet} />
        </div>
        {loader && <Loader />}
        {articles.length !== 0 && <MoviesList movies={handleSort} />}
        {error && <ErrorMessage />}
        <Toaster position="top-center" reverseOrder={false} />
      </div>
    </main>
  );
};

export default MoviesPage;
