import { ChangeEvent, FormEvent, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch } from '../../hooks/use-app-dispatch';
import { postReviewAction } from '../../store/api-actions';
import RatingStar from './rating-star';

const MAX_RATING_VALUE = 10;
const MIN_LENGTH = 50;
const MAX_LENGTH = 400;
const DEFAULT_RATING = 0;

export default function AddReviewForm(): JSX.Element {
  const { id } = useParams();
  const [comment, setComment] = useState(String);
  const [rating, setRating] = useState(DEFAULT_RATING);
  const dispatch = useAppDispatch();

  const ratingValues = [...Array(MAX_RATING_VALUE).keys()].map((el) => el + 1).reverse();

  const handleCommentChange = ({target}: ChangeEvent<HTMLTextAreaElement>) => {
    setComment(target.value);
  };

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    dispatch(postReviewAction({
      id: Number(id),
      comment,
      rating,
    }));
  };

  return (
    <form
      className="add-review__form"
      onSubmit={handleSubmit}
    >
      <div className="rating">
        <div className="rating__stars">
          {ratingValues.map((value) => (
            <RatingStar
              key={value}
              value={value}
              setRating={setRating}
              rating={rating}
            />
          ))}
        </div>
      </div>

      <div className="add-review__text">
        <textarea
          className="add-review__textarea"
          name="review-text"
          id="review-text"
          placeholder="Review text"
          onChange={handleCommentChange}
          value={comment}
        >
        </textarea>
        <div className="add-review__submit">
          <button
            className="add-review__btn"
            type="submit"
            disabled={
              comment.length < MIN_LENGTH ||
              comment.length > MAX_LENGTH ||
              rating === DEFAULT_RATING
            }
          >Post
          </button>
        </div>

      </div>
    </form>
  );
}
