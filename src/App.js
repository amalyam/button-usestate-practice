import "./styles.css";
import { useState } from "react";

/*
// create a component that has a button the user can click
// button will increase a counter
// if the count is even -> display "red"
// if count is odd -> display "blue"
*/

export default function App() {
  const [count, setCount] = useState(0);
  let displayString = count % 2 === 0 ? "red" : "blue";
  const languages = [
    "JavaScript",
    "TypeScript",
    "React",
    "NextJS",
    "NodeJS",
    "PostgreSQL"
  ];

  const clickHandler = () => {
    setCount((count) => count + 1);
  };

  return (
    <div className="App">
      <h1>{displayString}</h1>
      <button onClick={clickHandler} type="button">
        count
      </button>
      <h2>{count}</h2>
      <h2>Programming languages:</h2>
      {languages.map((language) => {
        return <h3 key={language}>{language}</h3>;
      })}
    </div>
  );
}
