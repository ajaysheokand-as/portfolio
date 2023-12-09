import React from "react";

export const SimpleTable = (props) => {
  const data = props.data;
  return (
    <div className="flex flex-col">
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
          <div className="overflow-hidden">
            <table className="min-w-full text-left text-sm font-light">
              <thead className="font-medium">
                <tr>
                  <th scope="col" className="px-6 py-4">
                    Test Name
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Results
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Unit
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Range
                  </th>
                  {/* ToDo */}
                  {/* <th scope="col" className="px-6 py-4 print:hidden">
                    Action
                  </th> */}
                </tr>
              </thead>
              <tbody>
                {data?.length > 0 &&
                  data.map((item, index) => {
                    return (
                      item.category && (
                        <>
                          <tr key={index}>
                            <td>{item.category}</td>
                          </tr>

                          {item.data.map((test, testIndex) => {
                            return (
                              <>
                                <tr key={testIndex}>
                                  <td className="whitespace-nowrap px-6 py-4 font-medium">
                                    {test.testName}
                                  </td>
                                  <td className="whitespace-nowrap px-6 py-4">
                                    {test.testValue}
                                  </td>
                                  <td className="whitespace-nowrap px-6 py-4">
                                    {test.unit}
                                  </td>
                                  <td className="whitespace-nowrap px-6 py-4">
                                    {test.range}
                                  </td>
                                  {/* ToDo */}
                                  {/* <td className="whitespace-nowrap px-6 py-4 print:hidden">
                                    <button class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
                                      Remove
                                    </button>
                                  </td> */}
                                </tr>
                              </>
                            );
                          })}
                        </>
                      )
                    );
                  })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
