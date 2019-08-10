import React from "react";

const Heading = ({ title, subtitle }) => (
  <>
    {title && <h1 className="title">{title}</h1>}
    {subtitle && <h2 className="subtitle">{subtitle}</h2>}
  </>
);

export default Heading;
