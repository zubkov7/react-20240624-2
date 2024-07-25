import { Headphone } from "./component";
import { useCallback } from "react";
import { addToCart, removeFromCart } from "../../redux/ui/cart";
import { useDispatch } from "react-redux";
import {
  useCreateReviewMutation,
  useGetCodecsByProductIdQuery,
  useGetHeadphonesQuery,
  useGetReviewsByProductIdQuery,
} from "../../redux/services/api";
import { useParams } from "react-router-dom";

export const HeadphoneContainer = () => {
  const dispatch = useDispatch();

  const { headphoneId: id } = useParams();
  // const [searchParams, setSearchParams] = useSearchParams();
  // console.log(searchParams.get("id"));
  // useEffect(() => {
  //   setSearchParams((prev) => ({ ...prev, id: 123 }));
  // }, [setSearchParams]);

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

  const { data: headphone } = useGetHeadphonesQuery(undefined, {
    selectFromResult: (result) => ({
      ...result,
      data: result.data.find((item) => item.id === id),
    }),
  });

  if (!headphone) {
    return null;
  }

  if (isCodecsLoading || isReviewsLoading) {
    return "loader";
  }

  const { name } = headphone;

  return (
    <Headphone
      key={id}
      name={name}
      id={id}
      reviews={reviews}
      codecs={codecs}
      handleAddToCart={handleAddToCart}
      handleRemoveFromCart={handleRemoveFromCart}
      onCreateReview={(review) => createReview({ review, productId: IDBIndex })}
      isCreateReviewLoading={isCreateReviewLoading}
    />
  );
};
