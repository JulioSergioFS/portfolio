import keyboardArrowDownRounded from "@iconify/icons-material-symbols/keyboard-arrow-down-rounded";
import { Icon } from "@iconify/react";
import { useState } from "react";
import "../styles/sections/home.scss";

export function Home() {
  const [coordinate, setCoordinate] = useState({ x: "50%", y: "50%" });

  const handleMouseMove = (e: any) => {
    let offsetX;
    let offsetY;
    var zoomer = e.target;
    offsetX = e.nativeEvent.offsetX;
    offsetY = e.nativeEvent.offsetY;
    const x = `${(offsetX / zoomer.offsetWidth) * 100}%`;
    const y = `${(offsetY / zoomer.offsetHeight) * 100}%`;

    console.log(e);
    setCoordinate({ x, y });
  };

  const handleMouseLeave = (e: any) => {
    setCoordinate({ x: "50%", y: "50%" });
  };

  return (
    <div
      className="home content"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        backgroundPositionX: coordinate.x,
        backgroundPositionY: coordinate.y,
        ...(coordinate.x !== "50%" && coordinate.y !== "50%" && { zoom: 1 }),
      }}
    >
      <div className="info">
        <h2>Hi, I'm Julio!</h2>
        <p>I'm a front-end developer and freelancer</p>
      </div>
      <Icon
        icon={keyboardArrowDownRounded}
        height={40}
        className="down-arrow"
      />
    </div>
  );
}
