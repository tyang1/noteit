import React from "react";
import { reactDom } from "react-dom";
import App from "./App.jsx";
import store from "./store/store";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
