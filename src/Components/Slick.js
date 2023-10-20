import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./components.css";
export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    autoplay: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="slick-carousel">
      <div className="sliders">
        <Slider {...settings}>
          <div>
            <div className="slider-card">
              <img
                className="slider-card-img"
                src="https://www.rwandaheritage.gov.rw/index.php?eID=dumpFile&t=f&f=30188&token=771d7f4be7fbde327dcf59a29ef98670370a98e0"
                alt="sliderimage1"
              />
              <h3>Against Genocide Museum</h3>
              <p>
                The Campaign Against Genocide Museum is one of the eight museums
                managed by the Rwanda Cultural Heritage Academy.
              </p>
            </div>
          </div>
          <div>
            <div className="slider-card">
              <img
                className="slider-card-img"
                src="https://www.rwandaheritage.gov.rw/index.php?eID=dumpFile&t=f&f=30214&token=6ac4cf5b184db6c4dd9d9449f53ce0387f319e83"
                alt="sliderimage2"
              />
              <h3>Traditional Dances</h3>
              <p>
                Music and dance have always been an integral part of Rwandan
                culture. The dance part, however, is considered one of the
                finest reflections of who Rwandans are—graceful and elegant.
              </p>
            </div>
          </div>
          <div>
            <div className="slider-card">
              <img
                className="slider-card-img"
                src="https://www.rwandaheritage.gov.rw/index.php?eID=dumpFile&t=f&f=40153&token=792ff2322c295b8527550174dc1a5d1d7d0de282"
                alt="sliderimage3"
              />
              <h3>King's Palace</h3>
              <p>
                Home to the King's Palace - a reconstruction of the traditional
                royal residence, a beautifully-crafted thatched dwelling shaped
                like a beehive.
              </p>
            </div>
          </div>
          <div>
            <div className="slider-card">
              <img
                className="slider-card-img"
                src="https://www.rwandaheritage.gov.rw/index.php?eID=dumpFile&t=f&f=46685&token=e4cbe12afdec0da6060367bce33cd0c24e214f08"
                alt="sliderimage4"
              />
              <h3>National Archive Center</h3>
              <p>
                National Archives Building is a recently completed Government
                building, the later was initiated and constructed in order to
                enforce the national legislation in the field of Archives and
                records storage.
              </p>
            </div>
          </div>
          <div>
            <div className="slider-card">
              <img
                className="slider-card-img"
                src="https://www.rwandaheritage.gov.rw/index.php?eID=dumpFile&t=f&f=51813&token=90a9f17edb44a0b33b69fef207ade192a39b0d88"
                alt="sliderfive"
              />
              <h3>National Archive center</h3>
              <p>
                .National Archives Building is a recently completed Government
                building, the later was initiated and constructed in order to
                enforce the national legislation in the field of Archives and
                records storage.
              </p>
            </div>
          </div>
          <div>
            <div className="slider-card">
              <img
                className="slider-card-img"
                src="https://www.visitrwanda.com/wp-content/uploads/fly-images/1789/Visit-Rwanda-Ethnographic-Museum-1650x1097.jpg"
                alt="sliderimagesix"
              />
              <h3>Huye Museum</h3>
              <p>
                National Museum located in Huye. It has several historic tools
                and events.
              </p>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
}
