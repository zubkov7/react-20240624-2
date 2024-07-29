"use client";

import { useState } from "react";

export const Counter = () => {
  const [value, setValue] = useState(0);

  return (
    <div>
      <button onClick={() => setValue((prev) => ++prev)}>+</button>
      {value}
      <button onClick={() => setValue((prev) => --prev)}>-</button>
    </div>
  );
};
