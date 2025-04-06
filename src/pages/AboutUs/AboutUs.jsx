import { useEffect } from "react";
import "./AboutUs.css";
import Card from "./components/Card/Card";
import Tab from "./components/Tab/Tab";
import CircularCard from "./components/CircularCard/CircularCard";
import { FaLongArrowAltDown, FaLongArrowAltRight } from "react-icons/fa";
import { useLocation } from "react-router-dom";

import {content} from '../../utils/Content.jsx';

const {about_page} = content;

export default function AboutUs({is_main_page}) {
  // const about_contents = [
  //   {
  //     img: "/imgs/our mission.jpg",
  //     title: "Our Mission",
  //     content:
  //       "To deliver an online education experience for CBSE students currently in Grades 3-9 across the GCC region, fostering independent thinking, bridging learning gaps, and nurturing a love for knowledge.",
  //     right_pic: false,
  //     is_content: false,
  //   },
  //   {
  //     img: "/imgs/oru vission.jpg",
  //     title: "Our Vision",
  //     content:
  //       "To become the premier platform for academic excellence, empowering students to achieve their highest potential augmented through innovative and personalized help with their school curriculum.",
  //     right_pic: true,
  //     is_content: false,
  //   },
  //   {
  //     img: "",
  //     title: "Our Founders",
  //     content:
  //       "IQ Bridge was founded by alumni of IIT and IIM, two of India’s most prestigious institutions. With a shared vision for academic brilliance and a passion for impactful education, our founders bring a wealth of expertise and leadership to redefine online learning. Their combined experience in cutting-edge technology, strategic problem-solving, and advanced pedagogy ensures that every student benefits from world-class guidance.",
  //     right_pic: true,
  //     is_content: true,
  //   },
  // ];

  // const about_card_contents = [
  //   {
  //     img: "/imgs/about c1.jpg",
  //     title: "Elite Educators",
  //     content:
  //       "   All our tutors are experienced professionals with a deep understanding of the CBSE curriculum, with a passion for teaching",
  //   },
  //   {
  //     img: "/imgs/about c2.jpg",
  //     title: "Personalized Learning Approach",
  //     content:
  //       "Each student’s learning journey is uniquely tailored to maximize understanding, retention, and academic performance",
  //   },
  //   {
  //     img: "/imgs/about c3.jpg",
  //     title: "Flexible Schedules",
  //     content: "Designed to fit into the routines of families across the GCC, ensuring convenience and consistency",
  //   },
  //   {
  //     img: "/imgs/about c4.jpg",
  //     title: "Affordable Pricing",
  //     content:
  //       "Quality education should be accessible. We provide top-notch tutoring services at competitive rates, ensuring value for your investment",
  //   },
  //   {
  //     img: "/imgs/about c5.jpg",
  //     title: "State-of-the-Art Technology",
  //     content: "Our interactive virtual classrooms provide an immersive and engaging learning experience",
  //   },
  // ];
 

  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const scrollToSection = params.get("scrollTo");

    if (scrollToSection) {
      const targetElement = document.getElementById(scrollToSection);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80, 
          behavior: "smooth",
        });
      }
    }
  }, [location]);

  return (
    <div className="about" id="about_section">
     {!is_main_page ? (
        <h5 className="about_title">
        <i>About Us</i>
      </h5>
     ): ('')}

      {about_page.about_us_tabs.map((about, idx) => {
        return (
          <Tab
          is_main_page={is_main_page}
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
        <Tab title={"Why IQ Bridge "} is_title={true} />

        <div className="about_cards ">
          <div className="cards row d-flex justify-content-center g-0">
            {about_page.about_card_contents.map((card, idx) => {
              return (
                <div  key={idx} className="col-lg-4 d-flex justify-content-center">
                  <Card
                    img={card.img}
                    title={card.title}
                    content={card.content}
                   
                  />
                </div>
              );
            })}
          </div>
        </div>
        <Tab title={"Our Process"} is_title={true} />
        <div className="process my-3" id='our_process'>
          <div className="row g-0 circular_cards d-flex justify-content-around align-items-center pb-0">
            {about_page.our_process_data.map((card, idx) => {
              return (
                <div key={idx} className="col-xl-2 d-flex flex-sm-column flex-xl-row justify-content-center align-items-center">
                  <CircularCard
                    img={card.img}
                    content={card.content}
                    title={card.title}
                    idx={idx}
                  />
                  <div className="fs-1 mb-5" style={{ color: "#041D60" }}>
                    {idx < about_page.our_process_data.length - 1 ? (
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
