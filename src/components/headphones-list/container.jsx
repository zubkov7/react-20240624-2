import { useSelector } from "react-redux";
import { HeadphonesList } from "./component";
import { selectHeadphonesIds } from "../../redux/entities/headphone";

export const HeadphonesListContainer = () => {
  const ids = useSelector(selectHeadphonesIds);

  return <HeadphonesList headphoneIds={ids} />;
};
