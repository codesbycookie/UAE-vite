import React from "react";
import "./AboutUs.css";
import Card from "./components/Card/Card";
import Tab from "./components/Tab/Tab";
import CircularCard from "./components/CircularCard/CircularCard";
import { FaLongArrowAltDown, FaLongArrowAltRight } from "react-icons/fa";

export default function AboutUs() {
  const about_contents = [
    {
      img: "/imgs/our mission.jpg",
      title: "Our Mission",
      content:
        "To deliver an online education experience for CBSE students currently in Grades 3-9 across the GCC region, fostering independent thinking, bridging learning gaps, and nurturing a love for knowledge.",
      right_pic: false,
      is_content: false,
    },
    {
      img: "/imgs/oru vission.jpg",
      title: "Our Vision",
      content:
        "To deliver an online education experience for CBSE students currently in Grades 3-9 across the GCC region, fostering independent thinking, bridging learning gaps, and nurturing a love for knowledge.",
      right_pic: true,
      is_content: false,
    },
    {
      img: "",
      title: "Our Founders",
      content:
        "IQ Bridge was founded by alumni of IIT and IIM, two of India’s most prestigious institutions. With a shared vision for academic brilliance and a passion for impactful education, our founders bring a wealth of expertise and leadership to redefine online learning. Their combined experience in cutting-edge technology, strategic problem-solving, and advanced pedagogy ensures that every student benefits from world-class guidance.",
      right_pic: true,
      is_content: true,
    },
  ];

  const about_card_contents = [
    {
      img: "/imgs/about c1.jpg",
      title: "Elite Educators",
      content:
        "   Choose your Mentor from 1000+ Mentors From Skill Link Community",
    },
    {
      img: "/imgs/about c2.jpg",
      title: "State-of-the-Art",
      content:
        "Get Certified from Skill Link For Every Course you Finish on Skill Link",
    },
    {
      img: "/imgs/about c3.jpg",
      title: "Affordable Pricing",
      content: "Track your Progress and Gain Your Skill Accordingly",
    },
    {
      img: "/imgs/about c4.jpg",
      title: "Flexible Schedules",
      content:
        "Get Notification Alerts for Every Unfinished Courses to Keep You Motivated",
    },
    {
      img: "/imgs/about c5.jpg",
      title: "Personalized Learning Approach",
      content: "Get Your Roadmap According to your skills and Skill Alerts",
    },
  ];
  const our_process_data = [
    {
      img: "/imgs/circular_card1.jpeg",
      title: "1. Contact Us",
      content:
        "Start by reaching out to us via WhatsApp or through our Contact Us form",
    },
    {
      img: "/imgs/circular_card2.jpeg",
      title: "2. Schedule a Trial Class",
      content:
        "Book a trial class at your convenience to experience our teaching approach firsthand",
    },
    {
      img: "/imgs/circular_card3.jpeg",
      title: "3. Initial Evaluation",
      content:
        "During the first few sessions, we assess the student's strengths, weaknesses, and areas of improvement",
    },
    {
      img: "/imgs/circular_card4.jpeg",
      title: "4. Tailored Learning Plan",
      content:
        "Based on the evaluation, we create a customized program to meet your child’s unique learning needs",
    },
    {
      img: "/imgs/circular_car5.jpeg",
      title: "5. Continuous Updates",
      content:
        "Stay informed with bi-weekly performance reports to track your child’s progress and development",
    },
  ];

  return (
    <div className="about" id="about_Us">
      <h5 className="about_title">
        <i>About Us</i>
      </h5>

      {about_contents.map((about, idx) => {
        return (
          <Tab
            title={about.title}
            content={about.content}
            img={about.img}
            right_pic={about.right_pic}
            is_content={about.is_content}
            key={idx}
          />
        );
      })}

      <div className="whyiq">
        <Tab title={"Why IQ Bridge ?"} is_title={true} />

        <div className="about_cards ">
          <div className="cards mt-5 row d-flex justify-content-center g-0">
            {about_card_contents.map((card, idx) => {
              return (
                <div className="col-lg-4 d-flex justify-content-center">
                  <Card
                    img={card.img}
                    title={card.title}
                    content={card.content}
                    key={idx}
                  />
                </div>
              );
            })}
          </div>
        </div>
        <Tab title={"Our Process"} is_title={true} />
        <div className="process my-3" id='our_process'>
          <div className="row g-0 circular_cards d-flex justify-content-around align-items-center">
            {our_process_data.map((card, idx) => {
              return (
                <div className="col-xl-2 d-flex flex-sm-column flex-xl-row justify-content-center align-items-center">
                  <CircularCard
                    img={card.img}
                    content={card.content}
                    title={card.title}
                  />
                  <div className="fs-1 mb-5" style={{ color: "#041D60" }}>
                    {idx < our_process_data.length - 1 ? (
                      <>
                        <div className="d-none d-xl-block">
                          <FaLongArrowAltRight />
                        </div>

                        <div className="d-none d-xl-none d-xxl-none d-lg-block d-md-block d-sm-block">
                          <FaLongArrowAltDown />
                        </div>
                      </>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
