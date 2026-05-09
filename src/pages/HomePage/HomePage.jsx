import { useEffect, useState } from "react";
import { fethTrendingMovies } from "../../services/api";
import MoviesList from "../../components/MoviesList/MoviesList";
import Loader from "../../components/Loader/Loader";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import TimeIntervalBar from "../../components/TimeIntervalBar/TimeIntervalBar";

const HomePage = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(false);
  const [timeInterval, setTimeInterval] = useState("day");
  const [showLoadMore, setShowLoadMore] = useState(false);
  const [page, setPage] = useState(1);
  const changeTimeInterval = (value) => {
    setTrendingMovies([]);
    setPage(1);
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
  return (
    <div>
      <TimeIntervalBar value={timeInterval} change={changeTimeInterval} />

      {trendingMovies.length !== 0 ? (
        <MoviesList movies={trendingMovies} />
      ) : (
        <p>Nothing found</p>
      )}
      {error && <ErrorMessage />}
      {trendingMovies.length !== 0 && showLoadMore && (
        <button type="button" onClick={handleLoadMore}>
          loadMore
        </button>
      )}
      {loader && <Loader />}
    </div>
  );
};
// ! баг с дублированием элементов при первом рендере
export default HomePage;
