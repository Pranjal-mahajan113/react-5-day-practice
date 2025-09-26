// Card.jsx
import React from "react";

const Card = ({ title, desc }) => {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        padding: "15px",
        borderRadius: "10px",
        width: "200px",
        textAlign: "center",
        background: "#fff",
        boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
      }}
    >
      <h3 style={{ color: "#333" }}>{title}</h3>
      <p style={{ color: "#666" }}>{desc}</p>
    </div>
  );
};

export default Card;
