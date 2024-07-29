import { useSelector } from "react-redux";
import { selectCartItems } from "../../redux/ui/cart";
import { CartHeadphoneItem } from "../cart-headphone-item/component";

export const Cart = () => {
  const cartItems = useSelector(selectCartItems);

  return (
    <div>
      <h3>Cart</h3>
      {!cartItems.length ? (
        "emty cart"
      ) : (
        <ul>
          {cartItems.map(({ id, amount }) => (
            <li key={id}>
              <CartHeadphoneItem id={id} amount={amount} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
