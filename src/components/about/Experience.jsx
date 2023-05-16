import React from "react";
import Resumecontent from "./ResumeContent";
import pdf from "../../assets/Tasneemah.pdf";

const Experience = () => {
  return (
    <React.Fragment>
      <div className="bg-2 h-80">
        <div className="container py-4" id="experiences">
          <h1 className="subtitle">Experience</h1>
          <div data-aos="fade-up">
            <div className="container" >
              <div className="row" >
                <div className="mt-3 d-flex justify-content-center flex-wrap">
                  <a href="https://drive.google.com/file/d/1YdWHhBj04FNkfrY_fr6ePXTttQ2CCqBG/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                    <button className="button" href={pdf} >
                      Download CV <i className="fas fa-download"></i>
                    </button>
                  </a>
                </div>
              </div>
              <div  className="row resume">
                <div  className="col-md-6 resume-left">
                  <h3 className="resume-title">Experience</h3>
                  <Resumecontent
                    title="UI/UX and Frontend Engineer"
                    date=" 2022-continue"
                    content={[
                      "UI/UX Designer and Frontend Developer"
                    ]}
                  />
                  <Resumecontent
                    title="Junior UI/UX Engineer"
                    date=" 2021-2022"
                    content={[
                      "User Interface and User Experience Designer"
                    ]}
                  />
                  <Resumecontent
                    title="Freelance Web Developer"
                    date=" 2020-continue"
                    content={[
                      "Web Developer and Designer."
                    ]}
                  />
                   <Resumecontent
                    title="Student Counsellor"
                    date=" June, 2019- Oct, 2019"
                    content={[
                      "Prominent Consultant"   
                    ]}
                  />
                   <Resumecontent
                    title="Web Developer & SEO Expert"
                    date="Jan, 2019- May, 2019"
                    content={[
                      "CODETREEBD"          
                    ]}
                  />
                   <Resumecontent
                    title="Product Manage"
                    date="Jan, 2019 – Continuing"
                    content={[
                      "Ekhaneikini.com"          
                    ]}
                  />  
                </div>
                <div  className="col-md-6 resume-right">
                  <h3 className="resume-title">Education</h3>
                  <Resumecontent
                    title="B.Sc. in Computer Science & Engineering [EWU] "
                    date="2018"
                    content={[
                      "Software Engineer"
                    ]}
                    
                  />
                  <Resumecontent
                    title="H.S.C. [Milestone College]"
                    date="2012"
                    content={[
                      "Science"
                    ]}
                  />
                  <Resumecontent
                    title="S.S.C [Uttara High School & College] "
                    date="2010"
                    content={[
                      "Science"
                    ]}
                  />
                  <h3 className="resume-title">Research Experience</h3>
                  <Resumecontent
                    title="Differential Evolution Approach for
Localization in Wireless Sensor Networks [MATLAB]"
                    content={[
                      "The research is to find efficient localization in WSN using RSSI (Received Signal Strength Indicator) and an Evolutionary algorithm."
                    ]}
                  />
                </div>
              </div>
              <div className="row" >
                <div className="mt-3 d-flex justify-content-center flex-wrap">
                  <a href="https://drive.google.com/file/d/1Yxkn2zuma1IdWMfTJLTnS_YTCa-9Aov1/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                    <button className="button" href={pdf}>
                      Download CV <i className="fas fa-download"></i>
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Experience;
