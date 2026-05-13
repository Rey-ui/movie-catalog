import css from "./MovieDetailsCard.module.css";

const MovieDetailsCard = ({ movie }) => {
  return (
    <div className={css.movieDetailsCard}>
      <img
        className={css.movieDetailsCardImg}
        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
        alt={movie.title}
      />
      <div className={css.detailsCardContent}>
        <div className={css.detailsCardUp}>
          <h1 className={css.detailsCardTitle}>
            {movie.title} / {movie.original_title}
          </h1>
          <div className={css.detailsCardMainInfo}>
            <div className={css.detailsCardMainInfoArticle}>
              <h4 className={css.detailsCardMainInfoTitle}>Movie rating:</h4>
              <span className={css.detailsCardMainInfoText}>
                {movie.vote_average.toFixed(1)}
              </span>
            </div>
            <div className={css.detailsCardMainInfoArticle}>
              <h4 className={css.detailsCardMainInfoTitle}>Countries:</h4>
              <ul className={css.detailsCardMainInfoList}>
                {movie.production_countries.map((country) => (
                  <li className={css.detailsCardMainInfoText} key={country.id}>
                    {country.iso_3166_1}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className={css.detailsCardBottom}>
          <div className={css.detailsCardDescriptionInfo}>
            <h3 className={css.detailsCardDescriptionTitle}>Genres</h3>
            <ul className={css.detailsCardDescriptionList}>
              {movie.genres.map((genre) => (
                <li className={css.detailsCardDescriptionItem} key={genre.id}>
                  {genre.name}
                </li>
              ))}
            </ul>
          </div>
          <div className={css.detailsCardDescriptionInfo}>
            <h3 className={css.detailsCardDescriptionTitle}>Languages</h3>
            <ul className={css.detailsCardDescriptionList}>
              {movie.spoken_languages.map((language, idx) => (
                <li className={css.detailsCardDescriptionItem} key={idx}>
                  {language.english_name}
                </li>
              ))}
            </ul>
          </div>
          <div className={css.detailsCardDescriptionInfo}>
            <h3 className={css.detailsCardDescriptionTitle}>Overview</h3>
            <p className={css.detailsCardDescriptionOverview}>
              {movie.overview}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetailsCard;
