import { ReviewForm } from "../review-form/component";
import { Review } from "../review/component";

export const ReviewList = ({
  reviews,
  onCreateReview,
  isCreateReviewLoading,
}) => {
  if (!reviews.length) {
    return null;
  }

  return (
    <div>
      <ul>
        {reviews.map(({ text, user, rating, id }) => (
          <li key={id}>
            <Review text={text} userId={user} rating={rating} />
          </li>
        ))}
      </ul>
      <ReviewForm
        onCreateReview={onCreateReview}
        isCreateReviewLoading={isCreateReviewLoading}
      />
    </div>
  );
};
