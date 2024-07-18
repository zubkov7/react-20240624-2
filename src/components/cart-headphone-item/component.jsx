import { useSelector } from "react-redux";
import { selectHeadphoneById } from "../../redux/entities/headphone/headphone";

export const CartHeadphoneItem = ({ id, amount }) => {
  const headphone = useSelector((state) => selectHeadphoneById(state, id));

  if (!headphone.name) {
    return null;
  }

  return (
    <div>
      {headphone.name} - {amount}
    </div>
  );
};
