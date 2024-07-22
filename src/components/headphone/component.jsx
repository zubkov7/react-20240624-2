import { CodecList } from "../codec-list/component";
import { Counter } from "../counter/component";
import { ReviewList } from "../review-list/component";

export const Headphone = ({
  name,
  id,
  reviews,
  codecs,
  handleAddToCart,
  handleRemoveFromCart,
  onCreateReview,
  isCreateReviewLoading,
}) => {
  return (
    <div>
      <h2>
        {name} - {id}
      </h2>
      <ReviewList
        reviews={reviews}
        onCreateReview={onCreateReview}
        isCreateReviewLoading={isCreateReviewLoading}
      />
      <CodecList codecs={codecs} />
      <Counter
        onDecrement={handleRemoveFromCart}
        onIncrement={handleAddToCart}
      />
    </div>
  );
};
