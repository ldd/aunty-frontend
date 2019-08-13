import React, { useState, useEffect } from "react";
import Heading from "../Heading";
import { prepareData, fetchData } from "./data";
import { redirectToLogin } from "../Login";

const Entry = ({ done = false }) => (
  <div
    style={{
      width: 12,
      margin: 1.5,
      height: 12,
      backgroundColor: done ? "rgba(0,200,0,0.8)" : "rgba(0,200,0,0.2)"
    }}
  />
);

const Task = ({ label, description, data = [] }) => (
  <>
    <Heading title={label} subtitle={description} />
    <div className="box" style={{ display: "flex", flexDirection: "column" }}>
      {prepareData(data).map((weekData, j) => (
        <div key={`week-${j}`} style={{ display: "flex" }}>
          {weekData.map((el, day) => (
            <Entry key={`week-${j}-day-${day}`} done={el} />
          ))}
        </div>
      ))}
    </div>
  </>
);

const Tasks = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData(setData, redirectToLogin);
  }, []);
  return (
    <div className="hero-body">
      <div className="container has-text-centered">
        <div className="columns">
          {data.map(({ id, ...rest }) => (
            <div key={id} className="column is-narrow">
              <Task key={id} {...rest} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tasks;
