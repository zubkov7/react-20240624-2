import { headphones } from "../../constants/mock";
import { Headphone } from "../headphone/component";
import { Layout } from "../layout/component";

export const App = () => {
  return (
    <div>
      <Layout>
        <div>headphones list</div>
        {headphones.map(({ name, id, reviews, price }) => (
          <Headphone name={name} id={id} reviews={reviews} price={price} />
        ))}
      </Layout>
    </div>
  );
};
