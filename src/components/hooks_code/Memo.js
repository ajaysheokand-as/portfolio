import React, { useMemo, useState } from "react";

function squareNum(number) {
  console.log("Squaring will be done!");
  return Math.pow(number, 2);
}

export const Memo = () => {
  const [number, setNumber] = useState(0);

  //   Using useMemo
  const squaredNum = useMemo(() => {
    return squareNum(number);
  }, [number]);

  //   const squaredNum = squareNum(number);
  const [counter, setCounter] = useState(0);

  // Change the state to the input
  const onChangeHandler = (e) => {
    setNumber(e.target.value);
  };

  // Increases the counter by 1
  const counterHandler = () => {
    setCounter(counter + 1);
  };
  return (
    <div className="App">
      <h1>useMemo</h1>
      <input
        className="block rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        type="number"
        placeholder="Enter a number"
        value={number}
        onChange={onChangeHandler}
      ></input>

      <div>OUTPUT: {squaredNum}</div>
      <button
        className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
        onClick={counterHandler}
      >
        Counter ++
      </button>
      <div>Counter : {counter}</div>
    </div>
  );
};
