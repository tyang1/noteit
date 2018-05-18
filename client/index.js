import React from "react";
import { reactDom } from "react-dom";
import App from "./component/App";
import store from "./store";
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
