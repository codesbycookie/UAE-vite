import "./Hero.css";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";
import { content } from "../../utils/Content";

export default function Hero() {

  const { hero_page } = content;

  return (
    <div className="hero_section" id="hero_section">
      <div className="row g-0" id="HeroPage" style={{ height: "100%" }}>
        <div className="col-lg-6 order-2 order-xl-1 d-flex flex-column justify-md-content-center justify-content-center">
          {" "}
          <div className="hero_content">
            <h1>
              <Typewriter
                words={hero_page.titles}
                cursorBlinking={true}
                loop={false}
              />
            </h1>
            <h4>
              {hero_page.content[0]}
              <br />
              {hero_page.content[1]}
            </h4>
            <div className="hero_buttons d-flex">
              <Link className="book_button" to="/contact-us">
                {hero_page.big_button}
              </Link>
              <Link
                className="explore_us d-flex justify-content-center align-items-center"
                id="button"
                to="/our-programs"
              >
                {hero_page.small_button}
              </Link>
            </div>
          </div>
        </div>
        <div className="col-lg-6 order-1 order-xl-2 d-flex flex-column justify-content-center align-items-center">
          <div className="d-flex justify-content-center align-items-center">
            <Carousel
              controls={false}
              indicators={false}
              interval={2000}
              className="carousel slide carousel-fade"
              style={{ borderRadius: "50%", transition: "2s ease",marginTop:"30px" }}
            >
              {hero_page.images.map((image, idx) => (
                  <Carousel.Item className="d-flex justify-content-center align-items-center" key={idx}>
                    <img
                      src={image}
                      alt="Image 1"
                      className="d-block"
                      style={{
                        width: "80%",
                        height: "95%",
                        objectFit: "cover",
                        borderRadius: "50%",
                        marginBottom: "15px",
                      }}
                    />
                  </Carousel.Item>
              ))}
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
}
