import React from "react";

export const BACKEND_URL =
  process.env.NODE_ENV === "production"
    ? "https://auntyapp.io/api"
    : "http://localhost:4000";

const SLACK_CLIENT_ID = "695399984727.687207103297";

const SLACK_REDIRECT_URI = encodeURI(`${BACKEND_URL}/auth/slack`);

export const redirectToLogin = () => {
  // we want to force the page to reload, to the login page
  window.location.href = "/#Login";
  window.location.reload();
};

const Login = () => (
  <div className="hero-body">
    <div className="container has-text-centered">
      <div className="columns">
        <div className="column is-narrow">
          {/* from slack's button generator https://api.slack.com/docs/sign-in-with-slack#generator */}
          <a
            href={`https://slack.com/oauth/authorize?scope=identity.basic&client_id=${SLACK_CLIENT_ID}&redirect_uri=${SLACK_REDIRECT_URI}`}
          >
            <img
              alt="Sign in with Slack"
              height="40"
              width="172"
              src="https://platform.slack-edge.com/img/sign_in_with_slack.png"
              srcSet="https://platform.slack-edge.com/img/sign_in_with_slack.png 1x, https://platform.slack-edge.com/img/sign_in_with_slack@2x.png 2x"
            />
          </a>
        </div>
      </div>
    </div>
  </div>
);

export default Login;
