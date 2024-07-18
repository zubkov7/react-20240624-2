import { useRef } from "react";
import { useReducer } from "react";
import classnames from "classnames";

import styles from "./styles.module.css";
import { useTheme } from "../theme-context/component";

const INITIAL_FORM = {
  name: "",
  text: "",
  address: "",
};

function reducer(state, { type, payload }) {
  switch (type) {
    case "setName":
      return { ...INITIAL_FORM, name: payload };
    case "setText":
      return { ...state, text: payload };
    case "setAddress":
      return { ...state, address: payload };
    case "clear":
      return INITIAL_FORM;
    default:
      return state;
  }
}

const useForm = (initialValue) => {
  return useReducer(reducer, initialValue);
};

export const ReviewForm = () => {
  const [form, dispatch] = useForm(INITIAL_FORM);

  const { value: themeMode } = useTheme();

  const { name, text, address } = form;

  return (
    <div>
      <div>
        <span>Name</span>
        <input
          value={name}
          onChange={(event) => {
            dispatch({ type: "setName", payload: event.target.value });
          }}
        />
      </div>
      <div>
        <span>Text</span>
        <input
          value={text}
          onChange={(event) => {
            dispatch({ type: "setText", payload: event.target.value });
          }}
        />
      </div>
      <div>
        <span>Address</span>
        <input
          value={address}
          onChange={(event) => {
            dispatch({ type: "setAddress", payload: event.target.value });
          }}
        />
      </div>
      <button
        className={classnames({
          [styles.lightButton]: themeMode === "light",
          [styles.darkButton]: themeMode === "dark",
        })}
      >
        Save
      </button>
      <button onClick={() => dispatch({ type: "clear" })}>Clear</button>
    </div>
  );
};
