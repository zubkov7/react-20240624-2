import { HeadphonesList } from "./component";
import {
  useGetHeadphonesQuery,
  useGetUsersQuery,
} from "../../redux/services/api";

export const HeadphonesListContainer = () => {
  const { data, isError, isFetching, isLoading, refetch } =
    useGetHeadphonesQuery();

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
      <button onClick={refetch}>refetch</button>
      <HeadphonesList headphones={data} />
    </div>
  );
};
