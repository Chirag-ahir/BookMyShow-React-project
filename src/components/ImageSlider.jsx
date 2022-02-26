import React from "react";
import Carousel from "react-bootstrap/Carousel";

function ImageSlider() {
  return (

    <div>
      <Carousel carousel-indicators="false" fade variant="dark">
        <Carousel.Item>
          <img
            className="d-block rs"
            src="https://source.unsplash.com/1600x400/?movie"
            alt="First slide"
            style={{ opacity: "0.9" }}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block"
            src="https://source.unsplash.com/1600x400/?bollywood"
            alt="Second slide"
            style={{ opacity: "0.9" }}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block"
            src="https://source.unsplash.com/1600x400/?book"
            alt="Third slide"
            style={{ opacity: "0.9" }}
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default ImageSlider;
