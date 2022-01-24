import React, { useEffect, useState } from "react";
import bottle from "./bottle.png";
import { BottleImage } from "./Playground.style";

export default function Playground() {
  const [random, setrandom] = useState("0");

  const [stop, setstop] = useState(false);
  useEffect(() => {
    setrandom(Math.floor(Math.random() * 4) * (360 / 4));
    setTimeout(() => {
      setstop(true);
    }, 1000);
  }, []);

  return (
    <div>
      <BottleImage
        src={bottle}
        alt="No image"
        style={stop ? { transform: `rotate(${random}deg)` } : null}
      />
      ;
    </div>
  );
}
