import React from "react";

const authContext = React.createContext({
  status: null,
  handleIncrement: () => {},
  handleDecrement: () => {},
});

export default authContext;
