import React from "react";
import Activity from "./Activity";
import Carousel from "./Carousel";

const Others = () => {
  return (
    <React.Fragment>
      <section className="bg-1 h-80">
        <div className="container py-4" id="skills">
          <h1 className="subtitle mb-5">Others</h1>
          <Carousel />
          <Activity/>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Others;
