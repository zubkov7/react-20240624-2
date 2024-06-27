// import React from "react";
import ReactDOM from "react-dom/client";

import { restaurants } from "../materials/mock";

// ReactDOM.createRoot(document.getElementById("root")).render(
//   React.createElement(
//     "ul",
//     {},
//     ["first", "second"].map((value) => React.createElement("li", {}, value))
//   )
// );

ReactDOM.createRoot(document.getElementById("root")).render(
  <div>
    <div>{restaurants[0].name}</div>
    <h3>MENU</h3>
    <ul>
      <li>{restaurants[0].menu[0].name}</li>
      <li>{restaurants[0].menu[1].name}</li>
    </ul>
    <h3>REVIEWS</h3>
    <ul>
      <li>{restaurants[0].reviews[0].text}</li>
    </ul>
  </div>
);
