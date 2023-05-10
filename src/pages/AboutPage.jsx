import React from "react";
import Experience from "../components/about/Experience";
import Intro from "../components/about/Intro";
import Skills from "../components/about/Skills";
import Others from "../components/about/Others";
import Footer from "../components/common/Footer";

const AboutPage = () => {
  return (
    <section className="page-fade">
      <Intro />
      <Skills />
      <Experience />
      <Others/>
      <Footer />
    </section>
  );
};

export default AboutPage;
