import { HeadphoneContainer } from "../headphone/container";

export const HeadphonesList = ({ headphoneIds }) => {
  if (!headphoneIds?.length) {
    return null;
  }

  return (
    <ul>
      {headphoneIds.map((id) => (
        <li>
          <HeadphoneContainer id={id} />
        </li>
      ))}
    </ul>
  );
};
