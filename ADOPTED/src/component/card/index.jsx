import React from "react";
import "./index.scss";
const Card = ({ user }) => {
  return (
    <div id="card">
      <div className="img-div">
      <img src={user.imgUrl} alt="" />

      </div>
      <h5>
        {user.name}, <span>{user.years} yrs. old</span>
      </h5>
    </div>
  );
};

export default Card;
