import React, { useState } from "react";
import authContext from "../hooks_code/Context";
import { Auth } from "../Auth";

export const ContextHome = () => {
  const [authStatus, setAuthStatus] = useState(0);
  const handleIncrement = () => {
    setAuthStatus(authStatus + 1);
  };
  const handleDecrement = () => {
    setAuthStatus(authStatus - 1);
  };
  return (
    <authContext.Provider
      value={{
        status: authStatus,
        handleIncrement: handleIncrement,
        handleDecrement: handleDecrement,
      }}
    >
      <Auth />
    </authContext.Provider>
  );
};
