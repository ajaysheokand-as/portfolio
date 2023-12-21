import React, { useEffect, useState } from "react";
import swal from "sweetalert";
// import { Report } from "./Report";
import { SimpleTable } from "../Tables/SimpleTable";
import { testDataDefault } from "../../data/Medical/TestData";

export const LabHomePg = () => {
  const [isEdit, setIsEdit] = useState(true);
  // const [s_no, setS_No] = useState(Date.now())
  const [patientData, setPatientData] = useState({
    name: "",
    age: "",
    mobileNumber: "",
    gender: "",
    doctor: "",
  });
  const [allTest, setAllTest] = useState([
    {
      SNo: Date.now(),
      category: "",
      data: [
        {
          testName: "",
          testValue: "",
          defaultValue: "",
          range: "",
          unit: "",
        },
      ],
    },
  ]);
  const [testData, setTestData] = useState({
    category: "",
    data: {
      testName: "",
      testValue: "",
      defaultValue: "",
      range: "range",
      unit: "unit",
    },
  });

  const date = new Date();

  // const removeTestData = () => {};

  const updateOrCreateCategory = () => {
    if (!testData?.category) {
      swal("Oops!", "Category is not Selected", "error");
    } else if (!testData?.data?.testName) {
      swal("Oops!", "Test is not Selected", "error");
    } else if (!testData?.data?.testValue) {
      swal("Oops!", "Test value can not be blank", "error");
    } else {
      const categoryExistsIndex = allTest.findIndex(
        (obj) => obj.category === testData.category
      );
      if (categoryExistsIndex !== -1) {
        // Category exists, add new data to the existing category
        const updatedAllTest = [...allTest];
        updatedAllTest[categoryExistsIndex].data.push(testData.data);
        setAllTest(updatedAllTest);
      } else {
        // Category doesn't exist, add a new object with the category and data
        setAllTest((prevAllTest) => [
          ...prevAllTest,
          {
            category: testData.category,
            data: [testData.data],
          },
        ]);
      }
    }
  };
  // useEffect(() => {
  //   setS_No(Date.now())
  // }, []);

  useEffect(() => {
    !isEdit && window.print();
  }, [isEdit]);

  const handlePrintReport = () => {
    if (!patientData.name) {
      swal("Oops!", "Patient Name can't be Blank", "error");
    } else if (!patientData.age) {
      swal("Oops!", "Patient Age can't be Blank", "error");
    } else if (!patientData.mobileNumber) {
      swal("Oops!", "Patient Mobile Number can't be Blank", "error");
    } else if (!patientData.gender) {
      swal("Oops!", "Select Patient Gender", "error");
    } else if (!patientData.doctor) {
      swal("Oops!", "Select Doctor Name", "error");
    } else if (allTest.length < 2) {
      swal("Oops!", "No Test is Added", "error");
    } else {
      setIsEdit(false);
    }
  };
  return (
    <div className="isolate bg-white px-6 py-24 sm:py-3 lg:px-2">
      {/* <div
        className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
        aria-hidden="true"
      >
        <div
          className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div> */}
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Report
        </h2>
      </div>
      <form
        action="#"
        method="POST"
        className="container mx-auto mt-16 sm:mt-20"
      >
        <div className="flex flex-row justify-between mb-4">
          {/* <div>Report No. : {s_no}</div> */}
          <div><span>Report Date. : </span> {date.toLocaleDateString()}</div>
        </div>
        <div className="m-1 flex flex-row justify-between flex-wrap pb-4">
          <div>
            <label
              htmlFor="patient-name"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Patient name
            </label>
            <div className="mt-2.5">
              {isEdit ? (
                <input
                  type="text"
                  name="patient-name"
                  id="patient-name"
                  onChange={(e) =>
                    setPatientData({ ...patientData, name: e.target.value })
                  }
                  autoComplete="given-name"
                  className="block rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              ) : (
                patientData.name
              )}
            </div>
          </div>
          <div>
            <label
              htmlFor="age"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Age
            </label>
            <div className="mt-2.5">
              {isEdit ? (
                <input
                  type="number"
                  name="age"
                  id="age"
                  onChange={(e) =>
                    setPatientData({ ...patientData, age: e.target.value })
                  }
                  style={{ width: "-webkit-fill-available" }}
                  className="block rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              ) : (
                patientData.age
              )}
            </div>
          </div>
          <div>
            <label
              htmlFor="mob-no"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Mobile No
            </label>
            <div className="mt-2.5">
              {isEdit ? (
                <input
                  type="text"
                  name="mob-no"
                  id="mob-no"
                  onChange={(e) =>
                    setPatientData({
                      ...patientData,
                      mobileNumber: e.target.value,
                    })
                  }
                  autoComplete="family-name"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              ) : (
                patientData.mobileNumber
              )}
            </div>
          </div>
          <div>
            <label
              htmlFor="gender"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Gender
            </label>
            <div className="mt-2.5">
              {isEdit ? (
                <select
                  id="gender"
                  name="gender"
                  onChange={(e) =>
                    setPatientData({ ...patientData, gender: e.target.value })
                  }
                  className="block rounded-md border-0 px-3.5 py-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                >
                  <option>Select</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              ) : (
                patientData.gender
              )}
            </div>
          </div>

          <div>
            <label
              htmlFor="selectDr"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Select Dr.
            </label>
            <div className="mt-2.5">
              {isEdit ? (
                <select
                  id="selectDr"
                  name="selectDr"
                  onChange={(e) =>
                    setPatientData({ ...patientData, doctor: e.target.value })
                  }
                  className="block rounded-md border-0 px-3.5 py-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                >
                  <option>Select</option>
                  <option value="Dr. Manish Kumar Varshney">Dr. Manish Kumar Varshney</option>
                  {/* <option value="Dr. Amit">Dr. Amit </option> */}
                </select>
              ) : (
                patientData.doctor
              )}
            </div>
          </div>
        </div>
        

        <div className="flex flex-wrap justify-between mt-4 print:hidden pb-2">
          <div>
            <label
              htmlFor="category"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Select Category
            </label>
            <div className="mt-2.5">
              <select
                onChange={(e) => {
                  setTestData({ ...testData, category: e.target.value });
                }}
                id="category"
                name="category"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              >
                <option value="select">Select</option>
                {
                 testDataDefault && testDataDefault.map((item, index)=>{
                    return (
                      <option value={item.category} key={index}>{item.category}</option>
                    )
                  })
                }
               
              </select>
            </div>
          </div>
          <div>
            <label
              htmlFor="age"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Choose Test
            </label>
            <div className="mt-2.5">
              <select
                onChange={(e) => {
                  setTestData({
                    ...testData,
                    data: { ...testData.data, testName: e.target.value },
                  });
                }}
                id="test"
                name="test"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              >
                <option value="select">Select</option>
                {
                  testDataDefault && testDataDefault.map((item) => {
                    return (
                      item.category === testData.category &&
                      <>
                            { item.tests.map((test, index)=>{
                        //  console.log("This is test=>", test)
                         return  <option value={test.testName} key={index}>{test.testName}</option>
                        }) }
                      </>
                    )
                    
                  })
                }
                
               
              </select>
            </div>
          </div>
          <div>
            <label
              htmlFor="test-value"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Value
            </label>
            <div className="flex">
              <div className="mt-2.5">
                <input
                  onChange={(e) => {
                    setTestData({
                      ...testData,
                      data: { ...testData.data, testValue: e.target.value },
                    });
                  }}
                  type="text"
                  name="test-value"
                  id="test-value"
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
              <div>
                <button
                  type="button"
                  onClick={updateOrCreateCategory}
                  className="block mx-2 mt-2 rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  + Add Test
                </button>
              </div>
            </div>
          </div>
        </div>
        <SimpleTable data={allTest} />
        <div className="mt-10 flex print:hidden fixed bottom-3">
          <button
            type="button"
            onClick={handlePrintReport}
            className="block m-1 rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Save & Print Report
          </button>
          {/* <button
            type="button"
            className="block m-1 rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Print Bill
          </button> */}
          {/* <button
            type="reset"
            className="block m-1 rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Reset
          </button> */}
        </div>
      </form>
    </div>
  );
};
