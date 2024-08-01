import { Footer } from "../footer/footer";
import { Header } from "../header/component";
import { ToggleThemeButton } from "../toggle-theme-button/component";

export const Layout = ({ children, sidebar }) => {
  return (
    <>
      <ToggleThemeButton />
      <Header />
      {sidebar}
      {children}
      <Footer />
    </>
  );
};
