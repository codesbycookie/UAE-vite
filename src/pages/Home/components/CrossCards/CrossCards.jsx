import React from "react";
import "./CrossCards.css";

const CrossCards = () => {
  return (
    <div className="row g-0 d-flex justify-content-center pt-5 position-relative">

      <div className="col-7 position-relative">
        <div className="back_card">
          <div className="card w-100 right_top_card" height='700' style={{height: '600px'}}>
            <div className="card-body"></div>
          </div>
        </div>
        <div className="position-absolute top-0 start-0">
          <div className="card cross_card p-3" style={{width: '300px', height: 'auto', bottom: '100px'}}>
            <div className="card-body d-flex justify-content-center align-items-center flex-column">
            <img src="/imgs/cross_card1.png" className="crosscard_img" alt="" />
            <h3 >Elite Mentorship</h3>
            <div className="cross_card_content text-center text-muted p-3">
                Mentoring from IIT-IIM Alumni Founders</div>
            </div>
          </div>
        </div>
        <div className="position-absolute bottom-0 end-0">
          <div className="card cross_card p-3" style={{width: '300px', height: 'auto',left: '100px',top: '200px' ,zIndex: '1'}}>
            <div className="card-body d-flex justify-content-center align-items-center flex-column">
            <img src="/imgs/cross_card2.png"  className="crosscard_img" alt="" />

                <h3>One-on-One Sessions</h3>
              <div className="cross_card_content text-center text-muted p-3">
              One-on-One interactive live online sessions              </div>
            </div>
          </div>
        </div>
        
      </div>
      <div className="col-6 position-relative">
        <div className="back_card">
          <div className="card w-100 left_top_card" height="500px"  style={{}}>
            <div className="card-body"></div>
          </div>
        </div>
        <div className="position-absolute bottom-0 start-0">
          <div className="card cross_card p-3" style={{right: '150px',top: '100px', zIndex: '1', width: '300px', height: 'auto'}}>
            <div className="card-body  d-flex justify-content-center align-items-center flex-column">
            <img src="/imgs/cross_card3.png" className="crosscard_img" alt="" />

                <h3>Personalized study plans</h3>
              <div className="content cross_card_content text-center text-muted p-3">
              Personalized Study Plans tailored to each student              </div>
            </div>
          </div>
        </div>
       
        
      </div>
      <div className="col-7 position-relative">
        <div className="back_card">
          <div className="card w-100 right_top_card" style={{}}>
            <div className="card-body"></div>
          </div>
        </div>
        <div className="position-absolute top-0 start-0">
          
        </div>
        <div className="position-absolute bottom-0 end-0">
          <div className="card cross_card p-3" style={{left: '150px',top: '100px' ,zIndex: '1', width: '300px', height: 'auto'}}>
            <div className="card-body d-flex justify-content-center align-items-center flex-column">
            <img src="/imgs/cross_card4.png" className="crosscard_img" alt="" />

                <h3>Certified Mentors</h3>
              <div className="cross_card_content text-center text-muted p-3">
              Experienced and certified CBSE educators              </div>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default CrossCards;
