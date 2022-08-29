import { Dispatch, Fragment, SetStateAction } from 'react';

type RatingStarProps = {
  value: number,
  setRating: Dispatch<SetStateAction<number>>,
  rating: number,
}

export default function RatingStar({value, setRating, rating}: RatingStarProps): JSX.Element {
  return (
    <Fragment>
      <input
        className="rating__input"
        id={`star-${value}`}
        type="radio"
        name="rating"
        value={value}
        defaultChecked={rating === value}
      />
      <label
        onClick={() => setRating(value)}
        className="rating__label"
        htmlFor={`star-${value}`}
      >
        Rating {value}
      </label>
    </Fragment>
  );
}
