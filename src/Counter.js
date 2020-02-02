import React, { useState } from "react";
import "./styles.css";

const Jedi = [
  {
    name: "Yoda",
    force: "Light-side"
  },
  {
    name: "Darth Vader",
    force: "Dark-side"
  },
  {
    name: "Obi Wan",
    force: "Light-side"
  },
  {
    name: "The Emperor",
    force: "Dark-side"
  },
  {
    name: "Mace Windew",
    force: "Light-side"
  },
  {
    name: "Jar Jar Binks",
    force: "Dark-side"
  },
  {
    name: "Luke Skywalker",
    force: "Light-side"
  },
  {
    name: "Darth Maul",
    force: "Dark-side"
  }
];

export default function App() {
  let [count, setCount] = useState(0);

  function Add() {
    setCount(count + 1);
  }

  function Large(str) {
    return str.toLowerCase();
  }

  // setTimeout(() => {
  //   setCount(count = count + 1)
  // }, 1000)

  return (
    <div className="App">
      <div>I've been clicked {count} times!</div>
      <button onClick={Add} onClick={Large()}>Click me</button>
      {Jedi.map(jedi => (
        <div>
          <h1>By: {jedi.name}</h1>
          <h5>{jedi.force}</h5>
        </div>)
      ))}
    </div>
  );
}
