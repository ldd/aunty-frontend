import React from "react";
import Heading from "../Heading";

const generateFakeData = () =>
  Array(31)
    .fill(true)
    .map(_ => Math.random() < 0.5);

const prepareData = (data = []) =>
  data.reduce(
    (acc, n, i) =>
      i % 7 === 0
        ? [...acc, [n]]
        : [...acc.slice(0, acc.length - 1), acc[acc.length - 1].concat(n)],
    []
  );

const preparedFakeData = prepareData(generateFakeData());

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
      {preparedFakeData.map((weekData, j) => (
        <div key={`week-${j}`} style={{ display: "flex" }}>
          {weekData.map((el, day) => (
            <Entry key={`week-${j}-day-${day}`} done={el} />
          ))}
        </div>
      ))}
    </div>
  </>
);
const Tasks = () => (
  <div className="hero-body">
    <div className="container has-text-centered">
      <div className="columns">
        <div className="column is-narrow">
          <Task label="Gym" description="Go to the Gym" />
        </div>
        <div className="column is-narrow">
          <Task label="Read" description="Read 10 pages" />
        </div>
      </div>
    </div>
  </div>
);

export default Tasks;
