import { useEffect, useState } from "react";
import { fethCast } from "../../services/api";
import { useParams } from "react-router-dom";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";

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
    <div>
      {loader && <Loader />}
      {cast && (
        <div>
          {cast.map((actor) => {
            return <p>{actor.name}</p>;
          })}
        </div>
      )}
      {error && <ErrorMessage />}
    </div>
  );
};

export default Cast;
