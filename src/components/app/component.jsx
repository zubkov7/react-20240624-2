import { headphones } from "../../constants/mock";
import { Headphone } from "../headphone/component";
import { Layout } from "../layout/component";
import { ThemeContextProvider } from "../theme-context/component";
import { ToggleThemeButton } from "../toggle-theme-button/component";

export const App = () => {
  return (
    <ThemeContextProvider>
      <div>
        <ToggleThemeButton />
        <Layout>
          <div>headphones list</div>
          {headphones.map(({ name, id, reviews, price }) => (
            <Headphone name={name} id={id} reviews={reviews} price={price} />
          ))}
        </Layout>
      </div>
    </ThemeContextProvider>
  );
};
