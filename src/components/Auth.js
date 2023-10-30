import React, { useContext } from "react";
import authContext from "./hooks_code/Context";

export const Auth = () => {
  const auth = useContext(authContext);
  return (
    <div className="px-4">
      <div className="pb-2 font-bold text-left">Using Context</div>
      <div className="container flex flex-row justify-start">
        <button
          className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
          onClick={() => auth.handleDecrement()}
        >
          -
        </button>
        <div className="p-3">{auth.status} </div>
        <button
          className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
          onClick={() => auth.handleIncrement()}
        >
          +
        </button>
      </div>
    </div>
  );
};
