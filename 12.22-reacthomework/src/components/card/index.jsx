import React from "react";
import "./index.scss";
const CardComp = ({ cards }) => {
  console.log(cards);
  return (
    <div className="card-div">
      {cards.map((card) => {
        return (
          <div id="card">
            <div className="card">
              <h3>{card.title}</h3>
              <p>{card.description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default CardComp;
