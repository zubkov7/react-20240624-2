"use client";

import { LoadedComponent } from "../loaded-component/component";

export const TestComponent = ({ isAuthorized }) => {
  return (
    <>
      {isAuthorized && <div>first</div>}
      <LoadedComponent />
    </>
  );
};