import React from "react";
import GlowText from "../../partials/GlowText";

const Carousel = () => {
  const Images = [
    {
      caption: "Sunset",
      image:
        "https://ik.imagekit.io/pvsizywre9b/sunset_JMB1MSYDN1e.jpg?updatedAt=1628227446027"
    },
    {
      caption: "EarthLine",
      image:
        "https://ik.imagekit.io/pvsizywre9b/earthLine_DzubtYy0A.jpg?updatedAt=1628227661351&tr=w-1200,h-628,fo-auto"
    },
    {
      caption: "Signature of Bangladesh",
      image:
        "https://ik.imagekit.io/pvsizywre9b/signatureOfBangladesh_phpYc_q2W.jpg?updatedAt=1628228739370"
    }
  ];
  return (
    <React.Fragment>
      <GlowText first="P" second="hoto" third="g" fourth="raphy" />
      <div
        id="photography"
        className="carousel slide mt-5"
        data-ride="carousel"
      >
        <div
          id="carouselPhoto"
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
            data-bs-target="#carouselPhoto"
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
            data-bs-target="#carouselPhoto"
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

export default Carousel;
