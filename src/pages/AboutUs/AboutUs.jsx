import React from "react";
import "./AboutUs.css";
import Card from "./components/Card/Card";
import Tab from "./components/Tab/Tab";

export default function AboutUs() {
  const about_contents = [
    {
      img: "/src/assets/our mission.jpg",
      title: "Our Mission",
      content:
        "To deliver an online education experience for CBSE students currently in Grades 3-9 across the GCC region, fostering independent thinking[, bridging learning gaps, and nurturing a love for knowledge.",
      right_pic: false,
      is_content: false,
    },
    {
      img: "/src/assets/oru vission.jpg",
      title: "Our Vision",
      content:
        "To deliver an online education experience for CBSE students currently in Grades 3-9 across the GCC region, fostering independent thinking[, bridging learning gaps, and nurturing a love for knowledge.",
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
      img: "/src/assets/about c1.jpg",
      title: "Elite Educators",
      content:
        "   Choose your Mentor from 1000+ Mentors From Skill Link Community",
    },
    {
      img: "/src/assets/about c2.jpg",
      title: "State-of-the-Art",
      content:
        "Get Certified from Skill Link For Every Course you Finish on Skill Link",
    },
    {
      img: "/src/assets/about c3.jpg",
      title: "Affordable Pricing",
      content: "Track your Progress and Gain Your Skill Accordingly",
    },
    {
      img: "/src/assets/about c4.jpg",
      title: "Flexible Schedules",
      content:
        "Get Notification Alerts for Every Unfinished Courses to Keep You Motivated",
    },
    {
      img: "/src/assets/about c5.jpg",
      title: "Personalized Learning Approach",
      content: "Get Your Roadmap According to your skills and Skill Alerts",
    },
  ];
  const our_Process=[
    {
      img:"",
      tittle:"Contact Us",
      content:"Start by reaching out to us via WhatsApp or through our Contact Us form. We’ll guide you through the next steps"
    },
    {
      img:"",
      tittle:"Schedule a Trial Class",
      content:"Book a trial class at your convenience to experience our teaching approach firsthand"
    },
    {
      img:"",
      title:"Initial Evaluation",
      content:"During the first few sessions, we assess the student's strengths, weaknesses, and areas of improvement"
    },
    {
      img:"",
      title:"Tailored Learning Plan",
      content:"Based on the evaluation, we create a customized program to meet your child’s unique learning needs"
    },
    {
      img:"",
      title:"Continuous Progress Updates",
      content:"During the first few sessions, we assess the student's strengths, weaknesses, and areas of improvement"
    },
]

  return (
    <div className="about" id="about">
      <h5 className="about_title"><i>About Us </i></h5>

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
        <h3>Why IQ Bridge ?</h3>

        <div className="about_cards row d-flex justify-content-center g-0">
          {about_card_contents.map((card, idx) => {
            return (
              <div className="col-4 d-flex justify-content-center">
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
        <div className="process">
          
        </div>
      </div>
      <hr />
    </div>
  );
}
