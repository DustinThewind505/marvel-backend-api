import React, { useState } from "react";

function Geniesus() {
  const [i, setI] = useState(false);

  setTimeout(() => {
    setI(!i);
  }, 1000);

  if (i) {
    return (
      <div>
        When I<br />
        <Wrestle />
      </div>
    );
  } else {
    return (
      <div>
        When YOU
        <br />
        <Wrestle />
      </div>
    );
  }
}

function Wrestle() {
  const [fYou, setFYou] = useState(false);

  setTimeout(() => {
    setFYou(!fYou);
  }, 1000);

  if (fYou) {
    return (
      <div>
        Love YOU
        <br />
        <Bulb />
      </div>
    );
  } else {
    return (
      <div>
        Love ME
        <br />
        <Bulb />
      </div>
    );
  }
}

function Bulb() {
  const [isBulbOn, setIsBulbOn] = useState(false);

  setTimeout(() => {
    setIsBulbOn(!isBulbOn);
  }, 1000);

  return <div>The lighbulb is {isBulbOn ? "ON" : "OFF"}</div>;

  if (isBulbOn) {
    return (
      <div>
        The lightbulb is ON
        <br />
        <Animorph />
      </div>
    );
  } else {
    return (
      <div>
        The lightbulb is OFF
        <br />
        <Animorph />
      </div>
    );
  }
}

function Animorph() {
  const [animorph, setAnimorph] = useState(false);

  setTimeout(() => {
    setAnimorph(!animorph);
  }, 1000);

  if (animorph) {
    return (
      <div>
        And the animorph tranforms into a CAMEL<br />
        <Next />
      </div>
    );
  } else {
    return (
      <div>
        And the animorph tranforms into a PEACOCK<br />
        <Next />
      </div>
    );
  }
}

function Next() {
  const [anything, setAnything] = useState(false);

  if (anything) {
    return <div>I can be THIS</div>;
  } else {
    return <div>I can be THAT</div>;
  }
}
export default Geniesus;
