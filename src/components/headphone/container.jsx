import { useSelector } from "react-redux";
import { selectHeadphoneById } from "../../redux/entities/headphone";
import { Headphone } from "./component";

export const HeadphoneContainer = ({ id }) => {
  const headphone = useSelector((state) => selectHeadphoneById(state, id));

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
    />
  );
};
