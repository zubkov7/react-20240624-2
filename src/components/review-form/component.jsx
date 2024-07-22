import { useReducer } from "react";
import classnames from "classnames";

import styles from "./styles.module.css";
import { useTheme } from "../theme-context/component";

const INITIAL_FORM = {
  text: "",
  rating: "",
  user: "jg4985gj94",
};

function reducer(state, { type, payload }) {
  switch (type) {
    case "setText":
      return { ...state, text: payload };
    case "setRating":
      return { ...state, rating: payload };
    case "clear":
      return INITIAL_FORM;
    default:
      return state;
  }
}

const useForm = (initialValue) => {
  return useReducer(reducer, initialValue);
};

export const ReviewForm = ({ onCreateReview, isCreateReviewLoading }) => {
  const [form, dispatch] = useForm(INITIAL_FORM);

  const { value: themeMode } = useTheme();

  const { text, rating } = form;

  return (
    <div>
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
        <span>Rating</span>
        <input
          value={rating}
          onChange={(event) => {
            dispatch({ type: "setRating", payload: event.target.value });
          }}
        />
      </div>
      <button
        className={classnames({
          [styles.lightButton]: themeMode === "light",
          [styles.darkButton]: themeMode === "dark",
        })}
        onClick={() => {
          onCreateReview(form);
          dispatch({ type: "clear" });
        }}
        disabled={isCreateReviewLoading}
      >
        {isCreateReviewLoading ? "...loading" : "Save"}
      </button>
      <button onClick={() => dispatch({ type: "clear" })}>Clear</button>
    </div>
  );
};
