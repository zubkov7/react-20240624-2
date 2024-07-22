import { Headphone } from "./component";
import { useCallback } from "react";
import { addToCart, removeFromCart } from "../../redux/ui/cart";
import { useDispatch } from "react-redux";
import {
  useCreateReviewMutation,
  useGetCodecsByProductIdQuery,
  useGetReviewsByProductIdQuery,
} from "../../redux/services/api";

export const HeadphoneContainer = ({ headphone }) => {
  const dispatch = useDispatch();

  const { id } = headphone || {};

  const handleAddToCart = useCallback(
    () => dispatch(addToCart(id)),
    [dispatch, id]
  );
  const handleRemoveFromCart = useCallback(
    () => dispatch(removeFromCart(id)),
    [dispatch, id]
  );

  const { data: codecs, isLoading: isCodecsLoading } =
    useGetCodecsByProductIdQuery(id);
  const { data: reviews, isLoading: isReviewsLoading } =
    useGetReviewsByProductIdQuery(id);

  const [createReview, { isLoading: isCreateReviewLoading }] =
    useCreateReviewMutation();

  if (!headphone) {
    return null;
  }

  if (isCodecsLoading || isReviewsLoading) {
    return "loader";
  }

  const { name, id: headphoneId } = headphone;

  return (
    <Headphone
      name={name}
      id={headphoneId}
      reviews={reviews}
      codecs={codecs}
      handleAddToCart={handleAddToCart}
      handleRemoveFromCart={handleRemoveFromCart}
      onCreateReview={(review) =>
        createReview({ review, productId: headphoneId })
      }
      isCreateReviewLoading={isCreateReviewLoading}
    />
  );
};
