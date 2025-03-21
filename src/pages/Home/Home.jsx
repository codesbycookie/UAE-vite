import React, { useEffect } from "react";
import "./Home.css";
import Home_card from "./Home_card";
import CrossCards from "./components/CrossCards/CrossCards";
import VerticalCards from "./components/VerticalCards/VerticalCards";

export default function Home() {
  const card_data = [
    {
      img: "/src/assets/Card_img_2.jpg",
      title: "Elite Mentorship",
      para: "Mentoring from IIT-IIM Alumni Founders",
    },
    {
      img: "/src/assets/Card_img_3.jpg",
      title: "One - On - One Sessions",
      para: "One-on-One interactive live online sessions",
    },
    {
      img: "/src/assets/Card_img_4.jpg",
      title: "Personalized study plans",
      para: "Personalized Study Plans tailored to each student",
    },
    {
      img: "/src/assets/Card_img_1.jpg",
      title: "Certified Mentors",
      para: "Experienced and certified CBSE educators",
    },
  ];

  return (
    <div className="Home home_page" id="home_section">
      <div className="text-center">
      <div className="content text-center  d-flex justify-content-center align-items-center flex-column gap-5">
        <h2 className="Title">
          Personalised <span>Learning</span> Experience
        </h2>
        <h2 className="para">
          Helping students think independently, bridge learning gaps, and
          achieve academic
          excellence through expert-led personalized education
        </h2>
      </div>
      </div>

      <div className="pt-5 d-md-none d-lg-block d-xl-block d-md-block d-none position-relative">
        <div className="position-absolute end-0 d-flex flex-column align-items-end" style={{ right: "20px" }}>
          {/* Large Circle */}
          <div
            style={{
              height: "200px",
              width: "200px",
              backgroundColor: "#041D60",
              borderRadius: "50%",
              // marginBottom: "0px",
              marginRight:"50px",
            }}
          ></div>
          
          {/* Small Circle */}
          <div
            style={{
              height: "100px",
              width: "100px",
              backgroundColor: "#F27A0A",
              borderRadius: "50%",
              marginRight: "20px", 
            }}
          ></div>
        </div>

        <div className="circle position-absolute top-50 start-0">
          <div
            style={{
              height: "600px",
              width: "600px",
              backgroundColor: "#041D60",
              borderRadius: "50%",
              right: "500px",
            }}
          ></div>
        </div>
        <div className="circle position-absolute bottom-0 end-0">
          <div
            style={{
              height: "400px",
              width: "400px",
              backgroundColor: "#F27A0A",
              borderRadius: "50%",
              right: "500px",
            }}
          ></div>
        </div>
        <CrossCards />
      </div>

      <div className="pt-5 d-md-block d-lg-none d-xl-none d-block">
        <VerticalCards />
      </div>

      {/* {card_data.map((card_data,index) =>{
      return  (
        <div key={index}
        className="Home_card text-center d-flex justify-content-center align-items-center gap-3 border-2 rounded-5">
          <Home_card 
          img={card_data.img} 
          title={card_data.title} 
          para={card_data.para}
          
          />
        </div>
    );
    })} */}
    </div>
  );
}
