import { useSelector } from "react-redux";
import { User } from "./component";
import { selectUserById } from "../../redux/entities/user";

export const UserContainer = ({ id }) => {
  const user = useSelector((state) => selectUserById(state, id));

  if (!user) {
    return null;
  }

  return <User name={user.name} />;
};
