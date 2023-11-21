import React from "react";
import { Provider } from "react-redux";
import Counter from "./Counter";
import store from "../redux/store";

export const ReduxHome = () => {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
};
