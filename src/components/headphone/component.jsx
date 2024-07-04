import { Reviews } from "../reviews/component";
import { Counter } from "../counter/component";

export const Headphone = ({ name, id, reviews, price }) => {
  return (
    <div>
      <h2>
        {name} - {id}
      </h2>
      <h3>Price: {price}</h3>
      <Reviews reviews={reviews} />
      <Counter />
    </div>
  );
};
