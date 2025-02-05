import React from "react";
import "./Card.css";

export default function Card({ img, title, content }) {
  return (
    <div className="card shadow-lg col-4">
      <div className="card-body">
        <div className="card_img_section">
          <img src={img} alt="" />
        </div>
        <div className="card_content text-center mt-4">
          <h3>{title}</h3>
          <div className="card_paragraph">
            {" "}
            <h6>{content}</h6>
          </div>
        </div>
      </div>
    </div>
  );
}
