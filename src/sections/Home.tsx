import keyboardArrowDownRounded from "@iconify/icons-material-symbols/keyboard-arrow-down-rounded";
import { Icon } from "@iconify/react";
import { useScrollSection } from "react-scroll-section";
import { sections } from "../constants/header";
import "../styles/sections/home.scss";

export function Home() {
  const section2 = useScrollSection(sections[1].id);

  return (
    <div className="home content">
      <div className="info">
        <h2>Hi, I'm Julio!</h2>
        <p>I'm a front-end developer and freelancer</p>
      </div>
      <Icon
        icon={keyboardArrowDownRounded}
        height={40}
        className="down-arrow"
        onClick={section2.onClick}
      />
    </div>
  );
}
