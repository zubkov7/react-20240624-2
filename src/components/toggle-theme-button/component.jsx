import { useTheme } from "../theme-context/component";

export const ToggleThemeButton = () => {
  const { toggleTheme } = useTheme();

  return <button onClick={toggleTheme}>toggleTheme</button>;
};
