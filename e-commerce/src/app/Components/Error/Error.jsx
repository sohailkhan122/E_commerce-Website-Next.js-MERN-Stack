import React from "react";

const Error = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <img
        src="/Images/Error.png"
        alt="error"
        width={"395.96px"}
        height={"273.551px"}
      />
      <div
        style={{
          width: "459px",
          height: "171px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "40px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <h3 style={{ color: "#000", fontSize: "34px", fontWeight: "600" }}>
            Oops! Page not found
          </h3>
          <p
            style={{
              textAlign: "center",
              color: "#807D7E",
              fontSize: "16px",
              fontWeight: "500",
              lineHeight: "124.7%",
              letterSpacing: "0.32px",
            }}
          >
            The page you are looking for might have been removed or temporarily
            unavailable.
          </p>
        </div>
        <button
          style={{
            width: "244px",
            height: "46px",
            display: "inline-flex",
            padding: "12px 48px",
            justifyContent: "center",
            alignItems: "center",
            gap: "12px",
            borderRadius: "8px",
            background: "#8A33FD",
            border: "none",
            color: "#FFF",
            textAlign: "center",
            fontSize: "15px",
            fontWeight: "600",
          }}
        >
          Back to HomePage
        </button>
      </div>
    </div>
  );
};

export default Error;
