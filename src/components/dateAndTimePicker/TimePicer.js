import React, { useState } from "react";
import DatePicker from "react-datepicker";

export const TimePicer = () => {
  const [startDate, setStartDate] = useState(new Date());
  console.log("This is time=>", startDate);

  return (
    <DatePicker
      class="block w-full px-2 border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-l-md shadow-sm"
      selected={startDate}
      onChange={(date) => setStartDate(date)}
      showTimeSelect
      showTimeSelectOnly
      timeIntervals={15}
      timeCaption="Time"
      dateFormat="h:mm aa"
    />
  );
};
