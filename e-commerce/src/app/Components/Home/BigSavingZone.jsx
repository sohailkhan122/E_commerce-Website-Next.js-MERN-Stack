const BigSavingZone = () => {
  return (
    <div className="bigSavingZoneContent">
      <div className="newArrivalTittle">
        <img src="/Images/New Arrival Logo.png" alt="New Arrival Logo" />
        <span>Big Saving Zone</span>
      </div>
      <div style={{ display: "flex", gap: "12px", flexDirection: "column" }}>
        <div
          style={{
            width: "100%",
            height: "393px",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div className="bigSavingCard">
            <div className="bigSavingCardContent">
              <span>Hawaiian Shirts</span>
              <div className="bigSavingCardInnerContent">
                <p>Dress up in summer vibe</p>
                <h6>UPTO 50% OFF</h6>
              </div>
              <img
                src="./Images/arrow.png"
                style={{ alignContent: "center" }}
                alt="arrow "
                width={"23.622px"}
                height={"27.864px"}
              />
              <button>SHOP NOW</button>
            </div>
          </div>
          <div className="bigSavingCard1">
            <div
              style={{ marginLeft: "230px" }}
              className="bigSavingCardContent"
            >
              <span> Printed T-Shirt</span>
              <div className="bigSavingCardInnerContent">
                <p>New Designs Every Week</p>
                <h6>UPTO 40% OFF</h6>
              </div>
              <img
                src="./Images/arrow.png"
                style={{ alignContent: "center" }}
                alt="arrow "
                width={"23.622px"}
                height={"27.864px"}
              />
              <button>SHOP NOW</button>
            </div>
          </div>
          <div className="bigSavingCard2">
            <div
              style={{ marginLeft: "230px" }}
              className="bigSavingCardContent"
            >
              <span style={{ color: "black" }}>Cargo Joggers</span>
              <div className="bigSavingCardInnerContent">
                <p style={{ color: "black" }}>Move with style & comfort</p>
                <h6 style={{ color: "black" }}>UPTO 50% OFF</h6>
              </div>
              <img
                src="./Images/black arrow.png"
                style={{ alignContent: "center" }}
                alt="arrow "
                width={"23.622px"}
                height={"27.864px"}
              />
              <button style={{ color: "black", border: "1px solid black" }}>
                SHOP NOW
              </button>
            </div>
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div className="bigSavingCard3">
            <div
              style={{ marginLeft: "360px" }}
              className="bigSavingCardContent"
            >
              <span style={{ color: "black" }}>Urban Shirts</span>
              <div className="bigSavingCardInnerContent">
                <p style={{ color: "black" }}>Live In Confort</p>
                <h6 style={{ color: "black" }}>FLAT 60% OFF</h6>
              </div>
              <img
                src="./Images/black arrow.png"
                style={{ alignContent: "center" }}
                alt="arrow "
                width={"23.622px"}
                height={"27.864px"}
              />
              <button style={{ color: "black", border: "1px solid black" }}>
                SHOP NOW
              </button>
            </div>
          </div>
          <div className="bigSavingCard4">
            <div
              style={{ marginLeft: "360px" }}
              className="bigSavingCardContent"
            >
              <span style={{ color: "black" }}>Oversized T-Shirts</span>
              <div className="bigSavingCardInnerContent">
                <p style={{ color: "black" }}>Street Style Icon</p>
                <h6 style={{ color: "black" }}>FLAT 60% OFF</h6>
              </div>
              <img
                src="./Images/black arrow.png"
                style={{ alignContent: "center" }}
                alt="arrow "
                width={"23.622px"}
                height={"27.864px"}
              />
              <button style={{ color: "black", border: "1px solid black" }}>
                SHOP NOW
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BigSavingZone;
