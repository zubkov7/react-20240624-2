import { useState } from "react";
import { useEffect } from "react";
import { throttle } from "throttle-debounce";
import classnames from "classnames";

import styles from "./styles.module.css";

const calculateScrollProgress = ({ scrollHeight, innerHeight, scrollY }) => {
  return (scrollY / (scrollHeight - innerHeight)) * 100;
};

const useProgressBar = () => {
  const [value, setValue] = useState("0%");

  useEffect(() => {
    const handler = throttle(20, () => {
      const value = calculateScrollProgress({
        scrollHeight: document.documentElement.scrollHeight,
        innerHeight: window.innerHeight,
        scrollY: window.scrollY,
      });

      setValue(`${value}%`);
    });

    window.addEventListener("scroll", handler);

    return () => window.removeEventListener("scroll", handler);
  }, []);

  return value;
};

export const ProgressBar = ({ viewVariant = "default" }) => {
  const progress = useProgressBar();

  return (
    <div
      className={classnames(styles.root, {
        [styles.viewVariantDefault]: viewVariant === "default",
        [styles.viewVariantAccent]: viewVariant === "accent",
      })}
      style={{
        width: progress,
      }}
    />
  );
};
