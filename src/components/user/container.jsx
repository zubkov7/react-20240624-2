import { User } from "./component";
import { useGetUsersQuery } from "../../redux/services/api";

export const UserContainer = ({ id }) => {
  const { data: users } = useGetUsersQuery();

  const { name } = users?.find((user) => user.id === id) || {};

  if (!name) {
    return null;
  }

  return <User name={name} />;
};
