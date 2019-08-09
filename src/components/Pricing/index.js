import React from "react";

const labelData = {
  Community: {
    pricing: "Free",
    style: {
      titleColor: "#363636",
      actionClass: "is-outlined"
    },
    featureList: ["Unlimited Users", "1 GB Total Storage", "Slack Integration"]
  },
  Entreprise: {
    pricing: (
      <a
        href="mailto:aunty@lddstudios.com"
        style={{ color: "#ff3860", textDecoration: "underline" }}
      >
        Contact us
      </a>
    ),
    style: {
      titleColor: "#ff3860",
      actionClass: "is-outlined is-danger"
    },
    featureList: [
      "Unlimited Users",
      "5 GB Storage per User",
      "Unlimited Integrations",
      "Data Governance",
      "Activity Logs"
    ]
  }
};

const Feature = ({ description }) => (
  <div className="column is-full">
    <div className="field">
      <input
        className="is-checkradio"
        type="checkbox"
        checked="checked"
        readOnly
      />
      <label>{description}</label>
    </div>
  </div>
);

const PricingEntry = ({ label }) => {
  const { pricing, style, featureList = [] } = labelData[label];
  const { titleColor: color, actionClass } = style || {};
  return (
    <div className="box">
      <div
        className="column is-full   has-text-centered subtitle"
        style={{ color }}
      >
        {label}
      </div>
      <div className="column is-full"> {pricing}</div>
      {featureList.map(featureDescription => (
        <Feature
          description={featureDescription}
          key={`feature-${featureDescription}`}
        />
      ))}
      <div className="column is-full  has-text-centered">
        <div className={`button ${actionClass}`}>Choose</div>
      </div>
    </div>
  );
};

const Pricing = () => (
  <div className="hero-body">
    <div className="container">
      <div className="columns">
        <div className="column">
          <PricingEntry label="Community" />
        </div>
        <div className="column">
          <PricingEntry label="Entreprise" />
        </div>
      </div>
    </div>
  </div>
);

export default Pricing;
