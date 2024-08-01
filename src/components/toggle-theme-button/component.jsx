"use client";

import { useTheme } from "../theme-context/hooks";

export const ToggleThemeButton = () => {
  const { toggleTheme } = useTheme();

  return <button onClick={toggleTheme}>toggleTheme</button>;
};
