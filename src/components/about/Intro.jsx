import React from "react";
import Tasneemah  from "../../assets/avatar.svg";

const Intro = () => {
  return (
    <React.Fragment>
      <section className="bg-2 h-80">
        <div className="container">
          <div className="row">
            <div className="col-sm-4 d-flex justify-content-center align-items-center">
              <img
                src={Tasneemah}
                alt="tasneemah's emoji"
                className="img-fluid"
                title="Happy Tasneemah !!"
                loading="lazy"
              />
            </div>
            <div className="col-sm-8 d-flex justify-content-center flex-column py-4">
              <h1 className="subtitle">About</h1>

              <p className="mt-4">
                As a UI/UX and front-end developer with over 3 years of
                experience, I bring a unique blend of technical skills, design,
                business strategy, and research to every project I undertake.
                With a passion for SaaS and data, I am committed to creating
                seamless digital experiences that make a difference in users'
                lives.
              </p>
              <p className="mt-4">
                I love Javascript and its frameworks mostly(Vue.js, Svelte.js) and have build both mobile and
                web applications UI/UX. I am currently into AI.
              </p>
              {/* <p className="text-muted mt-3">
                P.S Using first person is cliche !!!
              </p> */}
              <div className="mt-3 d-flex justify-content-between flex-wrap">
                <a href="#skills">
                  <button className="button">My Skills</button>
                </a>
                <a href="#experiences">
                  <button className="button">My Experience</button>
                </a>
                {/* <button className="button">Others</button> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Intro;
