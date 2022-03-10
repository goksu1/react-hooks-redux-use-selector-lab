import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createStore } from "redux";
import usersReducer from "./features/users/usersSlice";
import { Provider } from "react-redux";
// add imports and code
const store = createStore(usersReducer);
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
