import { NavLink, Outlet, useLocation, useParams } from "react-router-dom";
import { fethMovie } from "../../services/api";
import { Suspense, useEffect, useRef, useState } from "react";
import Loader from "../../components/Loader/Loader";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import MovieDetailsBar from "../../components/MovieDetailsBar/MovieDetailsBar";
import MovieDetailsCard from "../../components/MovieDetailsCard/MovieDetailsCard";
import { IoArrowBackOutline } from "react-icons/io5";
import css from "./MovieDetailsPage.module.css";
const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(false);
  const location = useLocation();
  const backLinkHref = useRef(location.state ?? "/movies");
  useEffect(() => {
    async function getMovie() {
      try {
        setMovie(null);
        setLoader(true);
        setError(false);
        const result = await fethMovie(movieId);
        setMovie(result);
      } catch {
        setError(true);
      } finally {
        setLoader(false);
      }
    }
    getMovie();
  }, []);
  return (
    <main>
      <div className="container">
        <NavLink className={css.backBtn} to={backLinkHref.current}>
          <IoArrowBackOutline className={css.backBtnSvg} />
          <span className={css.backBtnText}>Back</span>
        </NavLink>
        <div>
          {loader && <Loader />}
          {movie && (
            <div className={css.movieDetailsCont}>
              <MovieDetailsCard movie={movie} />
              <MovieDetailsBar />
            </div>
          )}

          {error && <ErrorMessage />}
        </div>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </div>
    </main>
  );
};

export default MovieDetailsPage;
