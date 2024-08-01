import { memo } from "react";

const Component = () => {
  let value = [];
  for (let i = 0; i < 10000; i++) {
    value.push(i);
  }

  console.log("render LoadedComponent");

  return (
    <div>
      {value.map((i) => (
        <span>{i}</span>
      ))}
    </div>
  );
};

export const LoadedComponent = memo(Component);
