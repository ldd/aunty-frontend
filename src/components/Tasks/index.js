import React, { useState, useEffect } from "react";
import Heading from "../Heading";
import AddTasks from "./AddTasks";
import { prepareData, fetchData, deleteTask } from "./data";
import { redirectToLogin } from "../Login";

export const Entry = ({ done = false }) => (
  <div
    style={{
      width: 12,
      margin: 1.5,
      height: 12,
      backgroundColor: done ? "rgba(0,200,0,0.8)" : "rgba(0,200,0,0.2)"
    }}
  />
);

export const Task = ({ label, description, data = [], deleteTask }) => (
  <>
    <div style={{ position: "relative" }}>
      <div
        className="delete"
        onClick={deleteTask}
        style={{ position: "absolute", right: 0, top: -10 }}
      />
      <Heading title={label} subtitle={description} />
    </div>
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

const Tasks = ({ initialData = [] }) => {
  const [data, setData] = useState(initialData);
  const [deleteId, setDeleteId] = useState(null);
  const [addedId, setAddedId] = useState(null);

  useEffect(() => {
    fetchData(setData, redirectToLogin);
  }, [deleteId, addedId]);
  useEffect(() => {
    if (typeof deleteId === "string") {
      deleteTask(deleteId, setDeleteId);
    }
  }, [deleteId]);
  return (
    <div className="hero-body">
      <div className="container has-text-centered">
        <div className="columns is-multiline is-vcentered">
          {data.map(({ id, ...rest }) => (
            <div key={id} className="column is-narrow">
              <Task key={id} {...rest} deleteTask={() => setDeleteId(id)} />
            </div>
          ))}
          <div className="column is-narrow">
            <AddTasks onTaskAdded={setAddedId} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tasks;
