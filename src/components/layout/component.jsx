import { Footer } from "../footer/footer";
import { Header } from "../header/component";
import { ProgressBar } from "../progress-bar/component";

export const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <ProgressBar />
      {children}
      <Footer />
    </div>
  );
};
