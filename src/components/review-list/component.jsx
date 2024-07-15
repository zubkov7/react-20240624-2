import { ReviewForm } from "../review-form/component";
import { ReviewContainer } from "../review/container";

export const ReviewList = ({ reviewIds }) => {
  if (!reviewIds.length) {
    return null;
  }

  return (
    <div>
      <ul>
        {reviewIds.map((id) => (
          <li>
            <ReviewContainer id={id} />
          </li>
        ))}
      </ul>
      <ReviewForm />
    </div>
  );
};
