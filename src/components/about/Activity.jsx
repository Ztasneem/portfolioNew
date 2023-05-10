import React from "react";
import GlowText from "../../partials/GlowText";

const Activity = () => {
  const Images = [
    {
      caption: "Seminar Host",
      image:
        "https://ik.imagekit.io/pvsizywre9b/IMG_3658_O7B3rrSUH.JPG?updatedAt=1683523758218"
    },
    {
      caption: "ShowStopper",
      image:
        "https://ik.imagekit.io/pvsizywre9b/IMG_0596_cX0stVutG.JPG?updatedAt=1683523757364"
    },
    {
      caption: "Participated in Digital Mela 2023",
      image:
        "https://ik.imagekit.io/pvsizywre9b/IMG_2836_K88ogfNI2.JPG?updatedAt=1683525307291"
    }
  ];
  return (
    <React.Fragment>
      <GlowText first="A" second="ct" third="i" fourth="vity" />
      <div
        id="activity"
        className="carousel slide mt-5"
        data-ride="carousel"
      >
        <div
          id="activityPhoto"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            {Images.map((img, index) => (
              <div
                className={
                  index === 0 ? "carousel-item active" : "carousel-item"
                }
                key={index}
              >
                <img
                  src={img.image}
                  className="d-block w-100"
                  alt="..."
                  height="400px"
                  style={{ objectFit: "contain" }}
                  loading="lazy"
                />
                <div className="carousel-caption d-none d-md-block">
                  <p className="designer-heading">{img.caption}</p>
                </div>
              </div>
            ))}
          </div>
          <button
            className="carousel-control-prev border border-0"
            type="button"
            data-bs-target="#activityPhoto"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next border border-0"
            type="button"
            data-bs-target="#activityPhoto"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Activity;
