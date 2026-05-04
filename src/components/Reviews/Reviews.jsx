import React, { useEffect, useState } from "react";
import { fethReviews } from "../../services/api";
import { useParams } from "react-router-dom";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(false);
  useEffect(() => {
    async function getMovieReviews() {
      try {
        setReviews([]);
        setLoader(true);
        setError(false);
        const { results } = await fethReviews(movieId);
        setReviews(results);
      } catch {
        setError(true);
      } finally {
        setLoader(false);
      }
    }
    getMovieReviews();
  }, []);
  return (
    <div>
      {loader && <Loader />}
      {reviews.length > 0 ? (
        <div>
          {reviews.map((user) => {
            return <p>{user.author}</p>;
          })}
        </div>
      ) : (
        <div>no rewievs</div>
      )}
      {error && <ErrorMessage />}
    </div>
  );
};

export default Reviews;
