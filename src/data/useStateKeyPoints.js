export const useStateData = [
  {
    _id: {
      $oid: "6509600852e30a84de7d0fa3",
    },
    Description:
      "Hook provided by React that allows functional components to have state.",
    Example: "const [state, setState] = useState(initialState);",
    KeyPoints: "Usage",
  },
  {
    _id: {
      $oid: "6509600852e30a84de7d0fa4",
    },
    Description: "Import useState from react to use this hook.",
    Example: "import React, { useState } from 'react';",
    KeyPoints: "Import",
  },
  {
    _id: {
      $oid: "6509600852e30a84de7d0fa5",
    },
    Description: "const [state, setState] = useState(initialState);",
    Example: "const [count, setCount] = useState(0);",
    KeyPoints: "Syntax",
  },
  {
    _id: {
      $oid: "6509600852e30a84de7d0fa6",
    },
    Description: "initialState is the initial value for the state.",
    Example: "useState(0) for a counter starting at 0.",
    KeyPoints: "Initial Value",
  },
  {
    _id: {
      $oid: "6509600852e30a84de7d0fa7",
    },
    Description:
      "Returns an array with two elements: the current state value (state) and a function that lets you update it (setState).",
    Example: "const [count, setCount] = useState(0);",
    KeyPoints: "Return Value",
  },
  {
    _id: {
      $oid: "6509600852e30a84de7d0fa8",
    },
    Description:
      "Use the setState function to update the state. It can accept a new value or a function of the previous state.",
    Example: "setCount(count + 1) to increment the counter.",
    KeyPoints: "Updating State",
  },
  {
    _id: {
      $oid: "6509600852e30a84de7d0fa9",
    },
    Description:
      "State updates may be asynchronous. Avoid relying on the previous state value for calculations or updates.",
    Example: "Use functional updates for accurate consecutive state updates.",
    KeyPoints: "Async Updates",
  },
  {
    _id: {
      $oid: "6509600852e30a84de7d0faa",
    },
    Description:
      "Use a function in setState when the new state depends on the previous state to prevent stale state issues.",
    Example:
      "setCount(prevCount => prevCount + 1) for an increment based on previous count.",
    KeyPoints: "Functional Update",
  },
  {
    _id: {
      $oid: "6509600852e30a84de7d0fab",
    },
    Description:
      "Multiple setState calls are batched together to improve performance and reduce unnecessary re-renders.",
    Example: "Multiple state updates in a single function call are batched.",
    KeyPoints: "Batches Updates",
  },
  {
    _id: {
      $oid: "6509600852e30a84de7d0fac",
    },
    Description:
      "Use functional updates to update state based on the previous state, ensuring accuracy in concurrent updates.",
    Example:
      "setCount(prevCount => prevCount + 1) to increment based on previous count.",
    KeyPoints: "Previous State",
  },
  {
    _id: {
      $oid: "6509600852e30a84de7d0fad",
    },
    Description:
      "Managing component state, toggling values, handling input changes, etc.",
    Example:
      "Managing form input values, toggling UI elements, tracking state in a component.",
    KeyPoints: "Common Use Cases",
  },
];
