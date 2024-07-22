import { User } from "./component";
import { useGetUsersQuery } from "../../redux/services/api";

export const UserContainer = ({ id }) => {
  const { data: users } = useGetUsersQuery();

  console.log(`user id = ${id}`);
  console.log(`users`);
  console.log(users);

  const { name } = users?.find((user) => user.id === id) || {};

  if (!name) {
    return null;
  }

  return <User name={name} />;
};
