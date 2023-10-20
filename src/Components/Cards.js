import React from "react";
import "./components.css";
const Cards = () => {
  return (
    <div className="cards">
      <h1 className="section_title">Our Tours</h1>
      <div className="cards-container">
        <div className="card">
          <div className="card_image">
            <img
              src="https://live.staticflickr.com/272/20260445971_2c6b9574a3_b.jpg"
              alt="Huye museum"
            />
          </div>
          <div className="card-bottom">
            <h3>Virtual Tour</h3>
            <p>Lorem ipusm</p>
            <button className="book_btn">Book Tour</button>
          </div>
        </div>
        <div className="card">
          <div className="card_image">
            <img
              src="https://joinupsafaris.com/images/activities/274/1051.jpg"
              alt="Huye museum"
            />
          </div>
          <div className="card-bottom">
            <h3>Normal Tour</h3>
            <p>Lorem ipusm</p>
            <button className="book_btn">Book Tour</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
