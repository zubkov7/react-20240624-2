import { useSelector } from "react-redux";
import { HeadphonesList } from "./component";
import { getHeadphones } from "../../redux/entities/headphone/get-headphones";
import { selectHeadphonesIds } from "../../redux/entities/headphone/headphone";
import { getUsers } from "../../redux/entities/user/get-users";
import { useRequest } from "../../hooks/use-request";

export const HeadphonesListContainer = () => {
  const ids = useSelector(selectHeadphonesIds);

  const headphonesRequestStatus = useRequest(getHeadphones);
  const usersRequestStatus = useRequest(getUsers);

  const isLoading =
    (headphonesRequestStatus === "pending") |
      (headphonesRequestStatus === "idle") ||
    usersRequestStatus === "pending" ||
    usersRequestStatus === "idle";

  const isFailed =
    headphonesRequestStatus === "rejected" ||
    usersRequestStatus === "rejectede";

  if (isLoading) {
    return "loading";
  }

  if (isFailed) {
    return "error";
  }

  return <HeadphonesList headphoneIds={ids} />;
};
