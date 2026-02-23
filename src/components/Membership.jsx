import React from "react";

const Membership = () => {
  return (
    <section id="membership">
      <h2>Membership Plans</h2>
      <div className="plans">
        <div className="plan">
          <h3>Basic</h3>
          <p>₹999 / Month</p>
        </div>
        <div className="plan">
          <h3>Pro</h3>
          <p>₹1999 / Month</p>
        </div>
        <div className="plan">
          <h3>Elite</h3>
          <p>₹2999 / Month</p>
        </div>
      </div>
    </section>
  );
};

export default Membership;