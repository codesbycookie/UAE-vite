import React, { useEffect, useState } from "react";
import "./OurProgram.css";
import Tab from "../AboutUs/components/Tab/Tab";
import Card from "./components/Card/Card";
import BroadCard from "./components/BroadCard/BroadCard";
import Testimonial from "./components/Testimonial/Testimonial";
import axios from "axios";

export default function OurProgram() {
  const [testimonials, setTestimonials] = useState([]);
  useEffect(() => {
    const fetch_testimonials = async () => {
      const response = await axios.get("https://iq-bridge-backend.onrender.com/get-feedbacks");
      console.log(response);
      setTestimonials(response.data.testimonials);
    };
    fetch_testimonials();
  }, []);

  const subject_data = [
    {
      title: "English",
      img: "/imgs/sub2.png",
      link: "#contact_us",
    },
    {
      title: "Hindi",
      img: "/imgs/sub1.png",
      link: "#contact_us",
    },
    {
      title: "Mathematics",
      img: "/imgs/sub6.png",
      link: "#contact_us",
    },
    {
      title: "Science",
      img: "/imgs/sub5.png",
      link: "#contact_us",
    },
    {
      title: "Social Science",
      img: "/imgs/sub4.png",
      link: "#contact_us",
    },
    {
      title: "Computer Science",
      img: "/imgs/sub3.png",
      link: "#contact_us",
    },
  ];

  const teaching_data = [
    {
      title: "Interactive Sessions",
      img: "/imgs/teaching1.png",
      content:
        "Interactive live classes using multimedia tools that promote active participation",
      is_right_pic: false,
    },
    {
      title: "Quizzes",
      img: "/imgs/teaching2.png",
      content:
        "Quizzes to encourage independent thought and self-directed learning",
      is_right_pic: true,
    },
    {
      title: "Regular Assesments",
      img: "/imgs/teaching5.png",
      content:
        "Regular assessments to monitor progress and identify areas for improvement",
      is_right_pic: false,
    },
    {
      title: "Personalized Attention",
      img: "/imgs/teaching4.png",
      content:
        "Personalized attention to meet the unique needs of each student",
      is_right_pic: true,
    },
  ];


  return (
    <div className="ourprogram mt-4" id="our_program">
      <h5 className="ourprogram_title mb-5">
        <i>Our Program </i>
      </h5>

      <div className="ourprogram_tab row g-0">
        <div className="col-md-7" id="ourprogram_img_Tab">
          <img
            className="ourprogram_img"
            src="/imgs/our program 1.jpg"
            alt="image"
          />
        </div>
        <div className="col-md-5 p-2 d-flex justify-content-center align-items-center flex-column">
          {" "}
          <h4 className="ourprogram_content">
            We offer one-on-one tutoring sessions tailored to each student's
            unique learning style and pace, ensuring effective understanding and
            retention of concepts.
          </h4>
          <a
            className="ourprogram_button btn hover-border-primary"
            href="#contact_us"
          >
            Book a Demo
          </a>
          <hr />
        </div>
      </div>
      <Tab title="Grade Specific Online Tuition" is_title={true} />

      <div className="row g-0 mb-4" id="Courses">
        <div className="col-md-6 p-2 mb-3 d-flex flex-column justify-content-center align-items-center">
          <h3 className="grade_title">Grade 3 - 5</h3>
          <div className="card text-bg-dark grade_card">
            <img src="/imgs/gradec2.png" className="card-img" alt="..." />
            <div className="card-img-overlay overlay-text">
              <p className="card-text p-3 pt-5 fs-5">
                This content hightlights the importance of building a strong
                foundation in Mathematics, Science and Engligh through
                activities that encourage curiosity and the ability to solve the
                problems independently.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-6 p-2 d-flex flex-column justify-content-center align-items-center">
          <h3 className="grade_title">Grade 6 - 9</h3>
          <div className="card text-bg-dark grade_card">
            <img src="/imgs/gradec1.png" className="card-img" alt="..." />
            <div className="card-img-overlay overlay-text">
              <p className="card-text p-3 pt-5 fs-5">
                The content emphasizes teaching advanced concepts in core
                subjects to help the students tackle academic challenges while
                providing comprehensive guidance to develop critical thinking
                and analytical skills.
              </p>
            </div>
          </div>
          {/* <div className="position-relative">
         <img
            src="/imgs/gradec1.png"
            className="grade_img shadow-lg"
            alt="image"
          />
          <p className="position-absolute top-50 start-50">Hii bro</p>
         </div> */}
        </div>
      </div>
      <Tab title="Subjects We Cover" is_title={true} />

      <div className="all_sub p-5 row d-flex g-0">
        {subject_data.map((sub, idx) => {
          return (
            <div
              key={idx}
              className="col-md-4 d-flex justify-content-center align-items-center"
            >
              <Card title={sub.title} img={sub.img} link={sub.link} />
            </div>
          );
        })}
      </div>
      <Tab title="Teaching Methodology" is_title={true} />
      <div
        className="teaching_container w-100 d-flex flex-column justify-content-center align-items-center"
        id="Teaching"
      >
        {teaching_data.map((d, idx) => {
          return (
            <BroadCard
              key={idx}
              title={d.title}
              content={d.content}
              img={d.img}
              is_right_pic={d.is_right_pic}
            />
          );
        })}
      </div>
      <Tab title="Testimonials" is_title={true} />
      <div className="testimonial-container ">
  <div className="testimonial-wrapper row g-1">
    {testimonials.map((testimonial, idx) => (
      <div className="testimonial-item col-md-3" key={idx}>
        <Testimonial testimonial={testimonial} />
      </div>
    ))}
  </div>
</div>

    </div>
  );
}
