import axios from "../../Api";
import React, { useState, useEffect, useContext } from "react";
import { MyContext } from "./Contexts";

const Dropdown = () => {
  const [category, setCategory] = useState([]);
  const { renderer, setSelect } = useContext(MyContext);
  const getCategory = async () => {
    try {
      await axios.get("/category").then((response) => {
        if (response) {
          console.log("Array for dropdown=>", response?.data?.data);
          setCategory(response.data.data);
        } else {
          console.log("No Data found");
        }
      });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getCategory();
  }, [renderer]);

  return (
    <>
      <select
        className="dropdown"
        name=""
        id="mySelect"
        onChange={(e) => setSelect(e.target.value)}
      >
        <option value="">--Select an option--</option>
        {category?.map((item) => (
          <option key={item._id} value={item.category}>
            {item.category}
          </option>
        ))}
      </select>
    </>
  );
};

export default Dropdown;
