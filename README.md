# 🚀 Day 1 - React Practice

**Topic:** React Basics, JSX, Components, Props, Lists & Styling  
**Author:** Pranjal Abhiman Mahajan  
**Date:** [26-09-2025]

---
## 🧠 What I Learned Today

### 1️⃣ JSX Basics
- HTML-like syntax inside React
- Curly braces `{}` to insert JavaScript expressions

```jsx
const name = "Pranjal";
<h1>Hello {name}</h1>
2️⃣ Functional Components
Reusable components using functions or arrow functions

jsx
Copy code
// Header Component
export default function Header() {
  return (
    <header>
      <h2 style={{ color: "#1e90ff", textAlign: "center" }}>My First React App</h2>
    </header>
  );
}

// Footer Component
const Footer = ({ text }) => {
  return (
    <footer style={{ textAlign: "center", marginTop: "20px", fontStyle: "italic" }}>
      {text}
    </footer>
  );
}
export default Footer;
3️⃣ Props
Passing data from parent to child

jsx
Copy code
<Card title="React Basics" desc="Learning JSX & Components" />
Example Card component:

jsx
Copy code
const Card = ({ title, desc }) => {
  return (
    <div style={{ border: "1px solid #ddd", padding: "15px", borderRadius: "8px", margin: "10px 0" }}>
      <h3>{title}</h3>
      <p>{desc}</p>
    </div>
  );
}
export default Card;
4️⃣ Lists & Keys
Rendering arrays dynamically

jsx
Copy code
const fruits = ["Apple", "Mango", "Banana"];

<ul style={{ listStyle: "none", padding: 0, textAlign: "center" }}>
  {fruits.map((fruit, index) => (
    <li
      key={index}
      style={{
        display: "inline-block",
        margin: "5px 10px",
        padding: "10px 15px",
        background: "#ffeb3b",
        borderRadius: "8px",
        fontWeight: "bold",
      }}
    >
      {fruit}
    </li>
  ))}
</ul>
📌 Day 1 Practice Summary
Built Header, Footer, Card components

Rendered fruits list dynamically using .map()

Practiced JSX, props, and inline styling

Learned where to declare functions and variables in a React component

🔜 Next Steps
Practice State with useState

Handling events in React

Learn Forms and Two-way Binding
