import { HeadphonesList } from "./component";
import {
  useGetHeadphonesQuery,
  useGetUsersQuery,
} from "../../redux/services/api";
import { Outlet } from "react-router-dom";

export const HeadphonesListContainer = () => {
  const { data, isError, isFetching, isLoading } = useGetHeadphonesQuery();

  useGetUsersQuery();

  if (isLoading) {
    return "loading";
  }

  if (isFetching) {
    return "isFetching";
  }

  if (isError || !data.length) {
    return "error";
  }

  return (
    <div>
      <HeadphonesList headphones={data} />
      <Outlet />
    </div>
  );
};
