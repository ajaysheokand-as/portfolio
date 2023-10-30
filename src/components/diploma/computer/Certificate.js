import React, { useState } from "react";
import "./certificate.css";
import CertificateImg from "../../../assets/images/CertificateImg.jpeg";

export const Certificate = () => {
  const [isEdit, setIsEdit] = useState(false);
  const [data, setData] = useState({
    rollNo: "123456789",
    enrollmentNo: "123456789",
    name: "name",
    motherName: "mother",
    fatherName: "father",
    dob: Date("2023-01-01"),
    course: "course",
    instituteName: "Computer Solutions",
    grade: "A+",
    sessionStart: Date("2023-01-01"),
    sessionEnd: Date("2023-01-01"),
    duration: "1 Year",
  });
  const handleIsEdit = () => {
    setIsEdit(!isEdit);
  };
  const onChangeHandler = (name, e) => {
    setData({ ...data, [name]: e.target.value });
  };
  return (
    <div className="main-container">
      <div>
        <div className="position-absolute rollNo">
          {isEdit ? (
            <input
              type="number"
              placeholder="Roll No"
              onChange={(e) => {
                onChangeHandler("rollNo", e);
              }}
            ></input>
          ) : (
            data.rollNo
          )}
        </div>
        <div className="position-absolute enrollmentNo">
          {isEdit ? (
            <input
              type="number"
              placeholder="Enrollment Number"
              onChange={(e) => {
                onChangeHandler("enrollmentNo", e);
              }}
            ></input>
          ) : (
            data.enrollmentNo
          )}
        </div>
        <div className="position-absolute name">
          {isEdit ? (
            <input
              type="text"
              placeholder="Name"
              onChange={(e) => {
                onChangeHandler("name", e);
              }}
            ></input>
          ) : (
            data.name
          )}{" "}
        </div>
        <div className="position-absolute motherName">
          {isEdit ? (
            <input
              type="text"
              placeholder="Mother Name"
              onChange={(e) => {
                onChangeHandler("motherName", e);
              }}
            ></input>
          ) : (
            data.motherName
          )}
        </div>
        <div className="position-absolute fatherName">
          {isEdit ? (
            <input
              type="text"
              placeholder="Father Name"
              onChange={(e) => {
                onChangeHandler("fatherName", e);
              }}
            ></input>
          ) : (
            data.fatherName
          )}
        </div>
        <div className="position-absolute dob">
          {isEdit ? (
            <input
              type="date"
              placeholder="Date of Birth"
              onChange={(e) => {
                onChangeHandler("dob", e);
              }}
            ></input>
          ) : (
            data.dob
          )}
        </div>
        <div className="position-absolute enrollmentNo2">
          {data.enrollmentNo}
        </div>
        <div className="position-absolute course">
          {isEdit ? (
            <select
              onChange={(e) => {
                onChangeHandler("course", e);
              }}
            >
              <option value="1 Year Advance Computer Course">
                1 Year Advance Computer Course
              </option>
              <option value="6 Month Computer course">
                6 Month Computer course
              </option>
            </select>
          ) : (
            data.course
          )}
        </div>
        <div className="position-absolute instituteName">
          {data.instituteName}
        </div>
        <div className="position-absolute grade">
          {isEdit ? (
            <select
              onChange={(e) => {
                onChangeHandler("grade", e);
              }}
            >
              <option value="A+">A+</option>
              <option value="A">A</option>
              <option value="B+">B+</option>
              <option value="B">B</option>
              <option value="C">C</option>
              <option value="D">D</option>
            </select>
          ) : (
            data.grade
          )}
        </div>
        <div className="position-absolute sessionStart">
          {isEdit ? (
            <input
              type="date"
              placeholder="Start Date"
              onChange={(e) => {
                onChangeHandler("sessionStart", e);
              }}
            ></input>
          ) : (
            data.sessionStart
          )}
        </div>
        <div className="position-absolute sessionEnd">{data.sessionEnd}</div>
        <div className="position-absolute duration">
          {isEdit ? (
            <select
              onChange={(e) => {
                onChangeHandler("duration", e);
              }}
            >
              <option value="1 Year">1 Year</option>
              <option value="6 Month's">6 Month's</option>
            </select>
          ) : (
            data.duration
          )}
        </div>
        <img className="position-absolute img" src={CertificateImg} />
      </div>
      <div className="float-right mr-5">
        <button
          onClick={handleIsEdit}
          className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow m-2"
        >
          Edit
        </button>
        <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow m-2">
          Save & Print
        </button>
        <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow m-2">
          Reset
        </button>
        <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow m-2">
          Save
        </button>
      </div>
    </div>
  );
};
