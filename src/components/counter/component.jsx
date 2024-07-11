import { useState, useCallback, useEffect, useRef } from "react";

const useCount = () => {
  const [count, setCount] = useState(0);
  const intervalRef = useRef();

  const increment = useCallback(() => {
    setCount((prevState) => prevState + 1);
  }, []);

  const decrement = useCallback(() => {
    setCount((prevState) => prevState - 1);
  }, []);

  useEffect(() => {
    if (!intervalRef.current) {
      intervalRef.current = setInterval(() => increment(), 500);
    }

    return () => {
      clearInterval(intervalRef.current);
    };
  }, [increment]);

  const clear = useCallback(() => {
    clearInterval(intervalRef.current);
    setCount(0);
  }, []);

  return {
    count,
    increment,
    decrement,
    clear,
  };
};

export const Counter = () => {
  const { count, decrement, increment, clear } = useCount();

  useEffect(() => {
    const onScroll = () => console.log("scroll");

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div>
      <button onClick={increment}>+</button>
      {count}
      <button onClick={decrement}>-</button>
      <button onClick={clear}>clear</button>
    </div>
  );
};
