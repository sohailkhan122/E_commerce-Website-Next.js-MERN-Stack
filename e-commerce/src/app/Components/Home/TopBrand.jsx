import React from "react";

const TopBrand = () => {
  return (
    <div className="topBrandContainer">
      <h1>Top Brands Deal </h1>
      <br />
      <p>
        Up To{" "}
        <span style={{ color: "#FBD103", fontWeight: "700", fontSize: "22px" }}>
          60%
        </span>{" "}
        off on brands
      </p>
      <br />
      <br />
      <br />
      <br />
      <div className="brands">
        <img src="/Images/Group 43.png" alt="Group" />
        <img src="/Images/Group 44.png" alt="Group1" />
        <img src="/Images/Group 45.png" alt="Group2" />
        <img src="/Images/Group 46.png" alt="Group3" />
        <img src="/Images/Group 47.png" alt="Group4" />
      </div>
    </div>
  );
};

export default TopBrand;
