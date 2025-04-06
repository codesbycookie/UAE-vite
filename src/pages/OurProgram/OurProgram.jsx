/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import "./OurProgram.css";
import Tab from "../AboutUs/components/Tab/Tab";
import Card from "./components/Card/Card";
import BroadCard from "./components/BroadCard/BroadCard";
import Testimonial from "./components/Testimonial/Testimonial";
import axios from "axios";
import { Link } from "react-router-dom";
import AboutUs from "../AboutUs/AboutUs";
import { content } from "../../utils/Content";

export default function OurProgram({ is_main_page }) {
  const {our_program_page } = content;

  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTestimonials = async () => {
      setLoading(true);

      try {
        console.log("fetching testimonials");
        ///
        const response = await axios.get("https://iq-bridge-backend-i5tu.onrender.com/get-feedbacks");
        setTestimonials(response.data.testimonials);
        console.log("fetched testimonials");
      } catch (error) {
        console.error("Error fetching testimonials:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchTestimonials();
  }, []);



  const renderProgramSection = () => (
    <div className="ourprogram" id="our_program_section">
      <h5 className="ourprogram_title">
        <i>Our Programs</i>
      </h5>
      <div className="ourprogram_tab row g-0">
        <div className="col-12 col-md-7" id="ourprogram_img_Tab">
          <img
            className="ourprogram_img"
            src="/imgs/our program 1.jpg"
            alt="Our Programs"
          />
        </div>
        <div className="col-12 col-md-5 p-2 d-flex justify-content-center align-items-center flex-column">
          <h4 className="ourprogram_content">
            We offer one-on-one tutoring sessions tailored to each student&apos;s
            unique learning style and pace, ensuring effective understanding and
            retention of concepts.
          </h4>
          <Link
            className="ourprogram_button btn hover-border-primary"
            to="/contact-us"
          >
            Book a Demo
          </Link>
          <hr />
        </div>
      </div>
      <Tab title="Grade Specific Online Tuition" is_title={true} />
      <div className="row g-0 mb-4 md-flex flex-row" id="Courses">
        {our_program_page.grade_card_content.map((card, idx) => (
          <div
            key={idx}
            className="col-12 col-md-6 p-2 mb-3 d-flex flex-column justify-content-center align-items-center"
          >
            <h3 className="grade_title">
              {card.title}
            </h3>
            <div className="card text-bg-dark grade_card " data-aos="zoom-in" data-aos-duration="2000">
              <img
                src={card.img}
                className="card-img"
                alt={card.title}
              />
              <div className="card-img-overlay overlay-text">
                <p className="card-text p-3 pt-5 fs-5">
                  {card.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Tab title="Subjects We Cover" is_title={true} />
      <div className="all_sub p-5 pt-0 row d-flex g-0 align-items-center justify-content-center">
        {our_program_page.subject_data.map((sub, idx) => (
          <div
            key={idx}
            className="col-6 col-md-4 d-flex justify-content-center align-items-center"
          >
            <Card title={sub.title} img={sub.img} link={sub.link} />
          </div>
        ))}
      </div>
    </div>
  );

  const renderTeachingMethodology = () => (
    <>
      <Tab title="Teaching Methodology" is_title={true} />
      <div
        className="teaching_container w-100 d-flex flex-column justify-content-center align-items-center"
        id="Teaching"
      >
        {our_program_page.teaching_data.map((d, idx) => (
          <BroadCard
            key={idx}
            title={d.title}
            content={d.content}
            img={d.img}
            is_right_pic={d.is_right_pic}
          />
        ))}
      </div>
    </>
  );

  const renderTestimonials = () => (
    <>
      <Tab title="Testimonials" is_title={true} />
      <div className="testimonial-container">
        {loading ? (
          <div className="d-flex justify-content-center align-items-center w-100 h-100">
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        ) : testimonials.length ? (
          <div className="testimonial-wrapper row g-0 d-flex flex-row">
            {testimonials.map((testimonial, idx) => (
              <div className="col-lg-4 col-md-6 p-1 " key={idx}>
                <Testimonial testimonial={testimonial} testing={false} />
              </div>
            ))}
          </div>
        ) : (
          <div className="d-flex justify-content-center align-items-center w-100 h-100">
            <span>
              <strong style={{ color: "red" }}>
                No Testimonials Available
              </strong>
            </span>
          </div>
        )}
      </div>
    </>
  );

  if (is_main_page) {
    return (
      <>
        {renderProgramSection()}
        <AboutUs is_main_page={is_main_page} />
        {renderTeachingMethodology()}
        {renderTestimonials()}
      </>
    );
  }

  return (
    <div className="ourprogram" id="our_program_section">
      {renderProgramSection()}
      {renderTeachingMethodology()}
      {renderTestimonials()}
    </div>
  );
}
