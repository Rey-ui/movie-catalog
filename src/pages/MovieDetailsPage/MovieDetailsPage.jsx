import { NavLink, Outlet, useLocation, useParams } from "react-router-dom";
import { fethMovie } from "../../services/api";
import { Suspense, useEffect, useRef, useState } from "react";
import Loader from "../../components/Loader/Loader";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(false);
  const location = useLocation();
  console.log(location);
  const backLinkHref = useRef(location.state ?? "/movies");
  useEffect(() => {
    async function getMovie() {
      try {
        setMovie(null);
        setLoader(true);
        setError(false);
        const result = await fethMovie(movieId);
        setMovie(result);
        // console.log(result);
      } catch {
        setError(true);
      } finally {
        setLoader(false);
      }
    }
    getMovie();
  }, []);
  return (
    <div>
      <NavLink to={backLinkHref.current}>back</NavLink>
      {loader && <Loader />}
      {movie && <p>{movie.title}</p>}
      {error && <ErrorMessage />}
      <nav>
        <ul>
          <li>
            <NavLink to="cast">cast</NavLink>
          </li>
          <li>
            <NavLink to="reviews">reviews</NavLink>
          </li>
        </ul>
      </nav>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default MovieDetailsPage;
