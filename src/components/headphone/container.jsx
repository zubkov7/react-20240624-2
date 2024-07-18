import { useSelector } from "react-redux";
import { Headphone } from "./component";
import { useCallback } from "react";
import { addToCart, removeFromCart } from "../../redux/ui/cart";
import { useDispatch } from "react-redux";
import { selectHeadphoneById } from "../../redux/entities/headphone/headphone";
import { useEffect } from "react";
import { getReviews } from "../../redux/entities/review/get-reviews";
import { getCodecs } from "../../redux/entities/codec/get-codecs";

export const HeadphoneContainer = ({ id }) => {
  const dispatch = useDispatch();

  const headphone = useSelector((state) => selectHeadphoneById(state, id));

  const handleAddToCart = useCallback(
    () => dispatch(addToCart(id)),
    [dispatch, id]
  );
  const handleRemoveFromCart = useCallback(
    () => dispatch(removeFromCart(id)),
    [dispatch, id]
  );

  useEffect(() => {
    dispatch(getReviews(id));
  }, [dispatch, id]);

  useEffect(() => {
    dispatch(getCodecs(id));
  }, [dispatch, id]);

  if (!headphone) {
    return null;
  }

  const { name, id: headphoneId, reviews, codecs } = headphone;

  return (
    <Headphone
      name={name}
      id={headphoneId}
      reviewIds={reviews}
      codecIds={codecs}
      handleAddToCart={handleAddToCart}
      handleRemoveFromCart={handleRemoveFromCart}
    />
  );
};
