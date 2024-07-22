import { useState } from "react";
import { HeadphoneContainer } from "../headphone/container";
import { HeadphoneTab } from "../headphone-tab/component";

export const HeadphonesList = ({ headphones }) => {
  const [activeHeadphone, setActiveHeadphone] = useState(headphones?.[0]);

  return (
    <div>
      <ul>
        {headphones.map((item) => (
          <li>
            <HeadphoneTab
              name={item.name}
              onClick={() => setActiveHeadphone(item)}
              isActive={activeHeadphone.id === item.id}
            />
          </li>
        ))}
      </ul>
      {activeHeadphone && (
        <HeadphoneContainer
          key={activeHeadphone.id}
          headphone={activeHeadphone}
        />
      )}
    </div>
  );
};
