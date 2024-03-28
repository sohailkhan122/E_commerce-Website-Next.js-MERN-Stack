import React from "react";
import FeedBackCard from "./FeedBackCard";

const Feedback = () => {
  const feedbackCardContent = [
    {
      id: "1",
      img: "/Images/In The Limelight 2.png",
      tittle: "Floyd Miles",
      describtion:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    },
    {
      id: "2",
      img: "/Images/In The Limelight 8.png",
      tittle: "Ronald Richards",
      describtion:
        "ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    },
    {
      id: "3",
      img: "/Images/In The Limelight 1.png",
      tittle: "Savannah Nguyen",
      describtion:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    },
  ];
  return (
    <div className="feedbackContainer">
      <div className="newArrivalTittle">
        <img src="/Images/New Arrival Logo.png" alt="New Arrival Logo" />
        <span>Feedback</span>
      </div>
      <div className="feedbackCardContainer">
        {feedbackCardContent.map((item) => {
          return <FeedBackCard key={item.id} data={item} />;
        })}
      </div>
    </div>
  );
};

export default Feedback;
