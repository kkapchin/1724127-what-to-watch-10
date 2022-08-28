import { Fragment } from 'react';
import { FilmType } from '../../types/film-type';

type OverviewProps = {
  film: FilmType;
}

export default function Overview({film}: OverviewProps): JSX.Element {

  const {
    rating,
    scoresCount,
    description,
    director,
    starring,
  } = film;

  const titleRating = () => {
    if (rating < 3) {
      return 'Bad';
    } else if (rating < 5) {
      return 'Normal';
    } else if (rating < 8) {
      return 'Good';
    } else if (rating < 10) {
      return 'Very good';
    } else {
      return 'Awesome';
    }
  };

  return (
    <Fragment>
      <div className="film-rating">
        <div className="film-rating__score">{rating.toFixed(1).replace('.', ',')}</div>
        <p className="film-rating__meta">
          <span className="film-rating__level">{titleRating()}</span>
          <span className="film-rating__count">{scoresCount} ratings</span>
        </p>
      </div>

      <div className="film-card__text">
        <p>{description}</p>

        <p className="film-card__director"><strong>Director: {director}</strong></p>

        <p className="film-card__starring">
          <strong>
            Starring: {starring.length > 5 ? `${starring.slice(0, 5).join(', ')} and other` : starring.join(', ')}
          </strong>
        </p>
      </div>
    </Fragment>
  );
}
