// Footer.jsx
import React from "react";

const Footer = ({ text }) => {
  return (
    <footer
      style={{
        background: "#333",
        color: "white",
        padding: "15px 0",
        marginTop: "40px",
        textAlign: "center",
        borderRadius: "8px",
      }}
    >
      <p>{text}</p>
    </footer>
  );
};

export default Footer;
