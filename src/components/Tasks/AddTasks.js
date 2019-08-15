import React, { useEffect, useState, useCallback } from "react";
import Heading from "../Heading";
import { addTask } from "./data";

const Field = ({ label, value, setValue, hint }) => {
  const onChange = e => setValue(e.target.value);
  return (
    <div className="field" style={{ textAlign: "left" }}>
      <label className="label">{label}</label>
      <div className="control has-icons-left has-icons-right">
        <input
          className="input is-success"
          type="text"
          value={value}
          onChange={onChange}
        />
        <span className="icon is-small is-left">
          <i className="fas fa-user" />
        </span>
        <span className="icon is-small is-right">
          <i className="fas fa-check" />
        </span>
      </div>
      <p className="help is-dark">{hint}</p>
    </div>
  );
};

const Control = ({ onSubmit, onCancel }) => (
  <div className="field is-grouped is-grouped-right">
    <div className="control">
      <div onClick={onCancel} className="button is-light">
        Cancel
      </div>
    </div>
    <div className="control">
      <div onClick={onSubmit} className="button is-primary">
        Submit
      </div>
    </div>
  </div>
);
const Form = ({ hideModal, onTaskAdded }) => {
  // field data
  const [label, setLabel] = useState("");
  const [description, setDescription] = useState("");
  const [frequency, setFrequency] = useState("");
  // for submitting the form
  const [payload, setPayload] = useState(null);
  const onSubmit = () => {
    setPayload({
      task_label: label,
      task_description: description,
      task_frequency: frequency
    });
  };
  useEffect(() => {
    if (payload !== null) {
      addTask(
        JSON.stringify(payload),
        (...args) => {
          hideModal();
          onTaskAdded(...args);
        },
        hideModal
      );
    }
  }, [payload, hideModal, onTaskAdded]);

  return (
    <div className="box">
      <Field
        label="Label"
        value={label}
        hint="example: read"
        setValue={setLabel}
      />
      <Field
        label="Description"
        value={description}
        hint="example: read at least 10 pages"
        setValue={setDescription}
      />
      <Field
        label="Frequency"
        value={frequency}
        hint="examples: monday, wednesday, friday | daily | weekends"
        setValue={setFrequency}
      />
      <Control onSubmit={onSubmit} onCancel={hideModal} />
    </div>
  );
};
const AddTasks = ({ onTaskAdded }) => {
  const [modal, setModal] = useState(false);
  const showModal = () => setModal(true);
  const hideModal = useCallback(() => setModal(false), []);
  return (
    <>
      <div
        onClick={showModal}
        className="button is-large is-success is-inverted"
        style={{ fontSize: "2.5rem" }}
      >
        +
      </div>
      <div className={`modal ${modal ? "is-active" : ""}`}>
        <div className="modal-background" />
        <div className="modal-content">
          <Heading title="Add Task" />
          <Form hideModal={hideModal} onTaskAdded={onTaskAdded} />
        </div>
        <button
          onClick={hideModal}
          className="modal-close is-large"
          aria-label="close"
        />
      </div>
    </>
  );
};

export default AddTasks;
