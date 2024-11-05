import { createRoot } from "react-dom/client";
import App from "./App.jsx";

import React from "react";
import { Provider } from "react-redux";
import { store } from "./state/store";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);