import { useState, useCallback } from "react";

const useCount = ({ onIncrement, onDecrement }) => {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => {
    setCount((prevState) => prevState + 1);
    onIncrement();
  }, [onIncrement]);

  const decrement = useCallback(() => {
    setCount((prevState) => prevState - 1);
    onDecrement();
  }, [onDecrement]);

  return {
    count,
    increment,
    decrement,
  };
};

export const Counter = ({ onIncrement, onDecrement }) => {
  const { count, decrement, increment } = useCount({
    onIncrement,
    onDecrement,
  });

  return (
    <div>
      <button onClick={increment}>+</button>
      {count}
      <button onClick={decrement}>-</button>
    </div>
  );
};
