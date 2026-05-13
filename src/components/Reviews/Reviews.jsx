import React, { useEffect, useState } from "react";
import { fethReviews } from "../../services/api";
import { useParams } from "react-router-dom";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import { FaUserNinja } from "react-icons/fa";
import css from "./Reviews.module.css";
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
    <div className={css.reviewsContainer}>
      {loader && <Loader />}
      {reviews.length > 0 ? (
        <ul className={css.reviewsList}>
          {reviews.map((user) => {
            return (
              <li className={css.reviewsItem}>
                <div className={css.reviewsItemInfo}>
                  <div className={css.reviewsUser}>
                    <div className={css.reviewsUserSvgContainer}>
                      <FaUserNinja className={css.reviewsUserAvatar} />
                    </div>

                    <h4 className={css.reviewsUserName}>{user.author}</h4>
                  </div>
                  <span className={css.reviewsUserTime}>
                    {new Date(user.created_at).toLocaleDateString()}
                  </span>
                </div>
                <p className={css.reviewsText}>{user.content}</p>
              </li>
            );
          })}
        </ul>
      ) : (
        <div>no rewievs</div>
      )}
      {error && <ErrorMessage />}
    </div>
  );
};

export default Reviews;
