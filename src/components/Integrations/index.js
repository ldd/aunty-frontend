import React from "react";
import Heading from "../Heading";

const Integrations = () => (
  // simulate is-info color for this body
  <div className="hero-body" style={{ backgroundColor: "#209cee" }}>
    <div className="container">
      <div className="columns is-vcentered is-multiline is-centered">
        <div className="column is-full is-centered has-text-centered">
          <div className="button is-large is-success is-outlined">
            Install Slack App
          </div>
        </div>
        <div className="column is-half">
          <Heading title="Create tasks in seconds" subtitle="Simple is best" />
        </div>
        <div className="column is-half">
          <img
            src="/screenshots/integrations-slack-create-task.png"
            alt="Logo"
          />
        </div>
        <div className="column is-half" style={{ padding: "3.5rem" }}>
          <img
            src="/screenshots/integrations-slack-confirm-task.png"
            alt="Logo"
          />
        </div>
        <div className="column is-half">
          <Heading title="Check in daily" subtitle="Or whenever you need to" />
        </div>
      </div>
    </div>
  </div>
);

export default Integrations;
