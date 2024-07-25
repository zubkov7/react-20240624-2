import { Outlet } from "react-router-dom";
import { Footer } from "../footer/footer";
import { Header } from "../header/component";
import { ProgressBar } from "../progress-bar/component";
import { ToggleThemeButton } from "../toggle-theme-button/component";
import { Cart } from "../cart/components";

export const Layout = () => {
  return (
    <>
      <ToggleThemeButton />
      <ProgressBar />
      <Header />
      <Outlet />
      <Cart />
      <Footer />
    </>
  );
};
