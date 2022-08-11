import { ChangeEvent } from 'react';

type AddReviewTextProps = {
  comment: string,
  handleCommentChange: ({target}: ChangeEvent<HTMLTextAreaElement>) => void,
}

export default function AddReviewText({comment, handleCommentChange}: AddReviewTextProps): JSX.Element {
  return (
    <textarea
      className="add-review__textarea"
      name="review-text"
      id="review-text"
      placeholder="Review text"
      onChange={handleCommentChange}
      value={comment}
    >
    </textarea>
  );
}
