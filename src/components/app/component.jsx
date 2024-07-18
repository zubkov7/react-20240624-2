import { Provider } from "react-redux";
import { Layout } from "../layout/component";
import { ThemeContextProvider } from "../theme-context/component";
import { ToggleThemeButton } from "../toggle-theme-button/component";
import { store } from "../../redux";
import { HeadphonesListContainer } from "../headphones-list/container";
import { Cart } from "../cart/components";

export const App = () => {
  return (
    <Provider store={store}>
      <ThemeContextProvider>
        <ToggleThemeButton />
        <Layout>
          <h2>headphones list</h2>
          <HeadphonesListContainer />
          <Cart />
        </Layout>
      </ThemeContextProvider>
    </Provider>
  );
};
