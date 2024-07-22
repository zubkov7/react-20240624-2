import { useSelector } from "react-redux";
import { HeadphoneTab } from "./component";
import { selectHeadphoneById } from "../../redux/entities/headphone/headphone";

export const HeadphoneTabContainer = ({ id, onClick, isActive }) => {
  const headphone = useSelector((state) => selectHeadphoneById(state, id));

  if (!headphone) {
    return null;
  }

  const { name } = headphone;

  return (
    <HeadphoneTab name={name} onClick={() => onClick(id)} isActive={isActive} />
  );
};
