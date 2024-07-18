import { useSelector } from "react-redux";
import { HeadphonesList } from "./component";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getHeadphones } from "../../redux/entities/headphone/get-headphones";
import {
  selectHeadphonesIds,
  selectRequestStatus,
} from "../../redux/entities/headphone/headphone";
import { getUsers } from "../../redux/entities/user/get-users";

export const HeadphonesListContainer = () => {
  const ids = useSelector(selectHeadphonesIds);
  const requestStatus = useSelector(selectRequestStatus);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getHeadphones());
    dispatch(getUsers());
  }, [dispatch]);

  if (requestStatus === "idle" || requestStatus === "pending") {
    return "loading";
  }

  if (requestStatus === "rejected") {
    return "error";
  }

  return <HeadphonesList headphoneIds={ids} />;
};
