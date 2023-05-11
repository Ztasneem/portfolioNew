import React from "react";
import { socialMediaIcons } from "../../context/SocialMediaContext";
import GlowText from "../../partials/GlowText";
import Tasneem from "../../assets/tasneemah.svg";

const Intro = () => {
  return (
    <React.Fragment>
      <header className="bg-2 h-80">
        <div className="container pt-5">
          <div className="row">
            <div className="col-md-6">
              <h1 className="popout title">
                <span>T</span>
                <span>a</span>
                <span>s</span>
                <span>n</span>
                <span>e</span>
                <span>e</span>
                <span>m</span>
                <span>a</span>
                <span>h</span>
                <br />
                <span>Y</span>
                <span>a</span>
                <span>s</span>
                <span>m</span>
                <span>i</span>
                <span>n</span>
              </h1>
              <div className="w-25 mb-5">
                <hr className="title-hr mt-0" />
              </div>
              <div className="w-50">
                <div className="d-flex justify-content-between">
                  {socialMediaIcons.map((icon, index) => (
                    <a
                      href={icon.link}
                      target="_blank"
                      key={index + 1}
                      title={icon.title}
                      rel="noreferrer"
                    >
                      <i className={icon.classname} />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div
              className="col-md-6 d-flex justify-content-center align-items-center flex-column py-4"
              data-aos="fade-up"
            >
              <GlowText
                first="UI/UX "
                second=" Designer "
                third=" and Front-end"
                fourth="     Engineer"
              />
              <p className="mt-5">
              Creative and detail-oriented UI/UX designer with a passion for designing innovative and user-centered digital experiences. 
              </p>
              <a href="#projects">
                <button className="button mt-4">
                  <i className="ps-2 fas fa-suitcase" />
                  See My works!
                </button>
              </a>
              <img className="mt-5"
                  src={Tasneem} 
                  alt="avatar"
                />
            </div>

          </div>
        </div>
      </header>
    </React.Fragment>
  );
};

export default Intro;
