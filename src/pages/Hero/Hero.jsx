import React from "react";
import { RiArrowRightDoubleLine } from "react-icons/ri";
import "./Hero.css";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Hero() {
  return (
    <div className="hero_section" style={{height: 'calc(100vh+100px)', paddingBottom: '30px'}}>
      <div className="row g-0" style={{height: '100%'}}>
        <div className="col-lg-6 order-2 order-md-1 d-flex flex-column justify-content-center">
          {" "}
          <div className="hero_content">
            <h1>
              Empowering <br />
              Excellence
            </h1>
            <h4>
              Personalized Online CBSE Tuition for <br />
              Grades 2-9 in the GSC
            </h4>
            <div className="hero_buttons d-flex">
              <a className="book_button " href="#contact_us">Book a Demo</a>
              <a
                className="explore_us d-flex justify-content-center align-items-center"
                id="button"
                href="#our_program"
              >
                Explore Us
              
              </a>
            </div>
          </div>
        </div>
        <div className="col-lg-6 order-1 order-md-2 d-flex flex-column justify-content-center align-items-center">
        <div className="d-flex justify-content-center align-items-center">
      <Carousel controls={false} indicators={false} interval={2000} className="carousel slide carousel-fade" style={{ borderRadius: '50%',transition: '2s ease'}}>
        <Carousel.Item className="d-flex justify-content-center align-items-center">
          <img
            src="/imgs/hero_main_pic2.png"
            alt="Image 1"
            className="d-block"
            style={{ width: '80%', objectFit: "cover", borderRadius: '50%' }}
          />
        </Carousel.Item>
        <Carousel.Item className="d-flex justify-content-center align-items-center">
          <img
            src="/imgs/Hero_img2.png"
            alt="Image 2"
            className="d-block"
            style={{ width: '80%', objectFit: "cover", borderRadius: '50%' }}
          />
        </Carousel.Item>
        <Carousel.Item className="d-flex justify-content-center align-items-center">
          <img
            src="/imgs/Hero_img_3.png"
            alt="Image 3"
            className="d-block"
            style={{ width: '80%', objectFit: "cover", borderRadius: '50%' }}
          />
        </Carousel.Item>
      </Carousel>
    </div>
        </div>
      </div>
    </div>
  );          
}
