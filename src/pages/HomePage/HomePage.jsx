import { useEffect, useState } from "react";
import { fethTrendingMovies } from "../../services/api";
import MoviesList from "../../components/MoviesList/MoviesList";
import Loader from "../../components/Loader/Loader";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import TimeIntervalBar from "../../components/TimeIntervalBar/TimeIntervalBar";
import SortBar from "../../components/SortBar/SortBar";
import LoadMore from "../../components/LoadMore/LoadMore";
import PageTitle from "../../components/PageTitle/PageTitle";
import css from "./HomePage.module.css";
const HomePage = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(false);
  const [timeInterval, setTimeInterval] = useState("day");
  const [showLoadMore, setShowLoadMore] = useState(false);
  const [sortByAlphabet, setSortByAlphabet] = useState("");
  const [page, setPage] = useState(1);
  const changeTimeInterval = (value) => {
    setTrendingMovies([]);
    setPage(1);
    setSortByAlphabet("");
    setTimeInterval(value);
  };

  useEffect(() => {
    const controller = new AbortController();
    async function getTrendingMovies() {
      try {
        setLoader(true);
        setError(false);

        const { results, total_pages } = await fethTrendingMovies(
          controller,
          timeInterval,
          page,
        );
        setTrendingMovies((prev) => [...prev, ...results]);
        setShowLoadMore(true);
        if (total_pages <= page) {
          setShowLoadMore(false);
        }
      } catch (err) {
        if (err.code !== "ERR_CANCELED") {
          setError(true);
        }
      } finally {
        setLoader(false);
      }
    }
    getTrendingMovies();
    return () => {
      controller.abort();
    };
  }, [timeInterval, page]);
  const handleLoadMore = () => {
    setPage(page + 1);
  };
  const sortedMovies = [...trendingMovies].sort((a, b) => {
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
        <PageTitle>Find Your Next Favorite Film</PageTitle>
        <div className={css.homeSelects}>
          <TimeIntervalBar value={timeInterval} change={changeTimeInterval} />
          <SortBar value={sortByAlphabet} change={setSortByAlphabet} />
        </div>
        <div className={css.homeContent}>
          {trendingMovies.length !== 0 ? (
            <MoviesList movies={sortedMovies} />
          ) : (
            <p>Nothing found</p>
          )}
          {trendingMovies.length !== 0 && showLoadMore && (
            <LoadMore handleLoadMore={handleLoadMore} />
          )}
          {loader && <Loader />}
          {error && <ErrorMessage />}
        </div>
      </div>
    </main>
  );
};
export default HomePage;
