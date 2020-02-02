import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const WhiteLight = "https://image.flaticon.com/icons/png/512/32/32177.png";
  const YellowLight =
    "https://i.pinimg.com/originals/92/94/ba/9294badee7b8f3d93fa9bc6c874641b2.png";

  const [lightOn, setLightOn] = useState(false);

  // setTimeout(() => {
  //     setLightOn(!lightOn)
  // }, 1000)

  console.log(lightOn);

  return (
    <div onClick={() => setLightOn(!lightOn)} className="App">
      <img src={lightOn ? YellowLight : WhiteLight} alt="A lighbulb" />
    </div>
  );
}
