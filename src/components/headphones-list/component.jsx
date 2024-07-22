import { useState } from "react";
import { HeadphoneContainer } from "../headphone/container";
import { HeadphoneTabContainer } from "../headphone-tab/container";

export const HeadphonesList = ({ headphoneIds }) => {
  const [activeHeadphoneId, setActiveHeadphoneId] = useState(headphoneIds?.[0]);

  return (
    <div>
      <ul>
        {headphoneIds.map((id) => (
          <li>
            <HeadphoneTabContainer
              id={id}
              onClick={setActiveHeadphoneId}
              isActive={id === activeHeadphoneId}
            />
          </li>
        ))}
      </ul>
      {activeHeadphoneId && (
        <HeadphoneContainer key={activeHeadphoneId} id={activeHeadphoneId} />
      )}
    </div>
  );
};
