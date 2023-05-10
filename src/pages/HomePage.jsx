import React from "react";
import Intro from "../components/home/Intro";
import Works from "../components/home/Works";
import Footer from "../components/common/Footer";

const HomePage = () => {
  return (
    <React.Fragment>
      <section className="page-fade">
        <Intro />
        <Works />
        <Footer />
      </section>
    </React.Fragment>
  );
};

export default HomePage;
