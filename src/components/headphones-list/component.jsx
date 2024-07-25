import { HeadphoneTab } from "../headphone-tab/component";

export const HeadphonesList = ({ headphones }) => {
  return (
    <div>
      <ul>
        {headphones.map((item) => (
          <li>
            <HeadphoneTab name={item.name} to={item.id} />
          </li>
        ))}
      </ul>
    </div>
  );
};
