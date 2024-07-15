import { UserContainer } from "../user/container";

export const Review = ({ text, userId, rating }) => {
  return (
    <div>
      <div>text - {text}</div>
      <div>rating - {rating}</div>
      <div>
        user - <UserContainer id={userId} />
      </div>
    </div>
  );
};