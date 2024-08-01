"use client";

import { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { createPortal } from "react-dom";

export const Portal = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);

  const portalElement = useRef();

  useEffect(() => {
    portalElement.current = document.getElementById("portal");
  }, []);

  return (
    <>
      <button onClick={() => setIsVisible(!isVisible)}>Show Portal</button>
      {isVisible && createPortal(<div>{children}</div>, portalElement.current)}
    </>
  );
};
