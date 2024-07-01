import { useState } from "react";

const useCount = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((prevState) => prevState + 1);
  };
  const decrement = () => {
    setCount((prevState) => prevState - 1);
  };

  return {
    count,
    increment,
    decrement,
  };
};

export const Headphone = ({ name, id, reviews, price }) => {
  const { count, decrement, increment } = useCount();

  return (
    <div>
      <h2>
        {name} - {id}
      </h2>
      <h3>Price: {price}</h3>
      {reviews.length ? (
        reviews.map((review) => <li>{review}</li>)
      ) : (
        <div>Empty reviews</div>
      )}
      <button onClick={increment}>+</button>
      {count}
      <button onClick={decrement}>-</button>
    </div>
  );
};
