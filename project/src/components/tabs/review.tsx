import { Comment } from '../../types/comment';

const MONTHS = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

type ReviewProps = {
  review: Comment
}

export default function Review({review}: ReviewProps): JSX.Element {
  const {
    rating,
    comment,
    user,
  } = review;

  const titleDate = (isClass = false) => {
    const date = new Date(review.date);
    if(!isClass) {
      return `${MONTHS[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
    }
    return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
  };

  return (
    <div className="review">
      <blockquote className="review__quote">
        <p className="review__text">{comment}</p>

        <footer className="review__details">
          <cite className="review__author">{user.name}</cite>
          <time className="review__date" dateTime={titleDate(true)}>{titleDate()}</time>
        </footer>
      </blockquote>

      <div className="review__rating">{rating.toFixed(1).replace('.', ',')}</div>
    </div>
  );
}
