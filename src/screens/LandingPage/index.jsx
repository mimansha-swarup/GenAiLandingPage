import React from "react";
import { Button, Card } from "../../components";
import "./style.css";
import { cardsRecord } from "./helper";
import { Arc, Star } from "../../assets";

const titleText = "Creative Projects with the ultimate AI-Powered Pattern"

export const LandingPage = () => {
  return (
    <div className="wrapper" >
      <img src={Star} alt="star" className="star-1" />
      <img src={Arc} alt="Arc" className="arc" />
      <div className="title-container">
        <h4 className="gray-text m-0">Revolutionize your</h4>
        <div className="title">
        <h1 className="sentence">
        {titleText}
        </h1>
          {titleText
            .split(" ")
            ?.map((el) => (
              <h1 key={el} className="word" >{el}</h1>
            ))}
          <Button type="primary">Start Generating</Button>
          <div>
            <h4 className="gray-text m-0">The Next Generation</h4>
            <h4 className="gray-text m-0">
              <strong>Production</strong> for Designers{" "}
            </h4>
          </div>
        </div>
      </div>
      <div className="card-layout">
        {cardsRecord?.map((card) => (
          <Card
            key={card.position}
            className={`card-${card.position}`}
            tagLabel={`0${card.position}`}
          >
            {card.element}
            {/* <Features/> */}
          </Card>
        ))}
      </div>
    </div>
  );
};
