// App.jsx
import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Card from "./Card";

function App() {
  // Fruits array
  const fruits = ["Apple", "Mango", "Banana", "Orange", "Pineapple"];

  // Card data
  const cards = [
    { title: "React Basics", desc: "Learning JSX & Components" },
    { title: "Props Practice", desc: "Passing data between components" },
    { title: "State Practice", desc: "Learning useState" },
  ];

  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        padding: "20px",
        background: "#a68c8cff",
      }}
    >
      <Header />

      <h1 style={{ textAlign: "center", color: "#d20909ff", margin: "20px 0" }}>
        Hello React Works!
      </h1>

      {/* Cards Section */}
      <div
        style={{
          display: "flex",
          gap: "15px",
          justifyContent: "center",
          // flexWrap: "wrap",
        }}
      >
        {cards.map((card, index) => (
          <Card key={index} title={card.title} desc={card.desc} />
        ))}
      </div>
   

      {/* Fruits Section */}
     <div>
      <ul>
      {fruits.map((fruit,index) =>(
        <li key={index}>{fruit}</li>

      ))}
      </ul>
     </div>
     

      <Footer text="Created by Pranjal Mahajan" />
    </div>
  );
}

export default App;
