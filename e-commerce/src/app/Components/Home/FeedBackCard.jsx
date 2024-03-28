import React from "react";

const FeedBackCard = ({ data }) => {
  return (
    <div className="feedbackcard">
      <img src={data.img} alt="In The Limelight 2" />
      <h4>{data.tittle}</h4>
      <p>{data.describtion}</p>
    </div>
  );
};

export default FeedBackCard;
