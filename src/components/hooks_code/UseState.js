import React from "react";
import { useStateData } from "../../data/useStateKeyPoints";
import { CodeDisplay } from "../codeDisplay/CodeDisplay";

export const UseState = () => {
  return (
    <div className="p-4">
      <div className="font-black text-2xl m-2">
        Let's Understand about useState
      </div>
      {useStateData.map((item, index) => {
        return (
          <div key={index} className="p-4">
            <div className="font-extrabold">
              {index + 1 + ". "}
              {item.KeyPoints}
            </div>
            <div className="font-medium">{"    " + item.Description}</div>
            <CodeDisplay code={item.Example} />
          </div>
        );
      })}
    </div>
  );
};
