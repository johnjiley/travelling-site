import React from "react";
import CardItem from "./Carditem";
import "./Cards.css";

function Cards() {
  return (
    <div className="cards">
      <h1>Check out this EPIC destination!</h1>
      <div className="cards_container">
        <div className="cards_wrapper">
          <ul className="cards_item">
            <CardItem
              src="images/img-9.jpg"
              text="Explore the hidden waterfall deep inside the Amazon Jungle"
              label="Adventure"
              path="/services"
            />
            <CardItem
              src="images/img-2.jpg"
              text="Travel through the island of bali in private Cruise"
              label="Luxury"
              path="/services"
            />
          </ul>
          <ul className="cards_item">
            <CardItem
              src="images/img-3.jpg"
              text="Set saidls in atlantic ocean"
              label="Mystery"
              path="/services"
            />
            <CardItem
              src="images/img-4.jpg"
              text="Experievcen footbal on top of moutains"
              label="Adventure"
              path="/services"
            />
            <CardItem
              src="images/img-8.jpg"
              text="Ride through the Shara Desert"
              label="Adrealinae"
              path="/services"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
