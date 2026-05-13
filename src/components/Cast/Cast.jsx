import { useEffect, useState } from "react";
import { fethCast } from "../../services/api";
import { useParams } from "react-router-dom";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import css from "./Cast.module.css";
import { FaUser } from "react-icons/fa";
const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(false);
  useEffect(() => {
    async function getMovieCast() {
      try {
        setCast([]);
        setLoader(true);
        setError(false);
        const { cast } = await fethCast(movieId);
        setCast(cast);
      } catch {
        setError(true);
      } finally {
        setLoader(false);
      }
    }
    getMovieCast();
  }, []);
  return (
    <div className={css.castContainer}>
      {loader && <Loader />}
      {cast && (
        <ul className={css.castList}>
          {cast.map((actor) => {
            return (
              <li key={actor.id} className={css.castItem}>
                {actor.profile_path ? (
                  <img
                    className={css.castImg}
                    src={`https://image.tmdb.org/t/p/w500/${actor.profile_path}`}
                    alt={actor.name}
                  />
                ) : (
                  <div className={css.castSvgCont}>
                    <FaUser className={css.castSvg} />
                  </div>
                )}
                <h4 className={css.castName}>{actor.name}</h4>
              </li>
            );
          })}
        </ul>
      )}
      {error && <ErrorMessage />}
    </div>
  );
};

export default Cast;
