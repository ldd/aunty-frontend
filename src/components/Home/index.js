import React from "react";
import Heading from "../Heading";

const Home = () => (
  <div className="hero-body">
    <div className="container has-text-centered">
      <Heading
        title="Track recurrent tasks"
        subtitle={
          <>
            Change <strike>the world</strike> yourself
          </>
        }
      />
      <div className="container" style={{ maxWidth: 350 }}>
        <img src="/images/undraw_travel_plans_li01.svg" alt="plans" />
      </div>
    </div>
  </div>
);

export default Home;
