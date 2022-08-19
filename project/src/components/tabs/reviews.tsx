import { ReviewType } from '../../types/review-type';
import Review from './review';

type ReviewsProps = {
  reviews: ReviewType[]
}

export default function Reviews({reviews}: ReviewsProps): JSX.Element {
  const sortedReviews = reviews.sort((a, b) => Number(new Date(b.date)) - Number(new Date(a.date)));
  const reviews1 = sortedReviews.filter((comment, index) => index % 2 !== 0);
  const reviews2 = sortedReviews.filter((comment, index) => index % 2 === 0);
  return (
    <div className="film-card__reviews film-card__row">
      {reviews2.length > 0 && (
        <div className="film-card__reviews-col">
          {reviews2.map((review) => <Review key={review.id} review={review} />)}
        </div>
      )}
      {reviews1.length > 0 && (
        <div className="film-card__reviews-col">
          {reviews1.map((review) => <Review key={review.id} review={review} />)}
        </div>
      )}
    </div>
  );
}
