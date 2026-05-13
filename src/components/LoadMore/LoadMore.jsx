import css from "./LoadMore.module.css";
const LoadMore = ({ handleLoadMore }) => {
  return (
    <button className={css.loadMoreBtn} type="button" onClick={handleLoadMore}>
      Load More
    </button>
  );
};

export default LoadMore;
