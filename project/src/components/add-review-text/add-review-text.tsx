import { ChangeEvent, useState } from 'react';

export default function AddReviewText(): JSX.Element {
  const [comment, setComment] = useState('');
  const handleCommentChange = ({target}: ChangeEvent<HTMLTextAreaElement>) => {
    setComment(target.value);
  };

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
