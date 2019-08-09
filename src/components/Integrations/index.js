import React from "react";

const Integrations = () => (
  // simulate is-info color for this body
  <div className="hero-body" style={{ backgroundColor: "#209cee" }}>
    <div className="container">
      <div className="columns is-vcentered is-multiline is-centered">
        <div className="column is-full is-centered has-text-centered">
          <div className="button is-large is-primary">Install Slack App</div>
        </div>
        <div className="column is-half">
          <h1 className="title">Create tasks in seconds</h1>
          <h2 className="subtitle">Simple is best</h2>
        </div>
        <div className="column is-half">
          {/* <img src="/screenshots/integrations-slack-create-task.png" alt="Logo" /> */}
        </div>
        <div className="column is-half">
          {/* <img src="/screenshots/integrations-slack-confirm-task.png" alt="Logo" /> */}
        </div>
        <div className="column is-half">
          <h1 className="title">Check in daily</h1>
          <h2 className="subtitle">Or whenever you need to</h2>
        </div>
      </div>
    </div>
  </div>
);

export default Integrations;
