import { ReviewForm } from "../review-form/component";

export const Reviews = ({ reviews }) => {
  if (!reviews.length) {
    return null;
  }

  return (
    <div>
      <ul>
        {reviews.map((text) => (
          <li>{text}</li>
        ))}
      </ul>
      <ReviewForm />
    </div>
  );
};
