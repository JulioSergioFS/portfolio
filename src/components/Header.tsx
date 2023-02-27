import githubIcon from "@iconify/icons-mdi/github";
import linkedinIcon from "@iconify/icons-mdi/linkedin";
import { Icon } from "@iconify/react";
import { useEffect, useState } from "react";
import { useScrollSections } from "react-scroll-section";
import { sections } from "../constants/header";
import "../styles/header.scss";
import LanguagePopover from "./LanguagePopover";

export function Header() {
  const scrollSection = useScrollSections();
  const [hasBackground, setHasBackground] = useState(false);
  const offsetHeightBackground = 450;

  const changeBackgroundOnScroll = () => {
    if (window.pageYOffset > offsetHeightBackground) {
      setHasBackground(true);
    } else {
      setHasBackground(false);
    }
  };

  useEffect(() => {
    window.onscroll = () => {
      changeBackgroundOnScroll();
    };
    return () => {
      window.onscroll = null;
    };
  }, []);

  return (
    <ul className={`header${hasBackground ? " header-background" : ""}`}>
      <li className="menu">
        <ul>
          {sections.map((item, index) => (
            <li key={item.id} onClick={scrollSection[index]?.onClick}>
              {item.name}
            </li>
          ))}
        </ul>
      </li>
      <li className="menu">
        <ul className="socials">
          <li>
            <LanguagePopover />
          </li>
          <li>
            <Icon icon={linkedinIcon} color="#E3E3E3" height={24} />
          </li>
          <li>
            <Icon icon={githubIcon} color="#E3E3E3" height={24} />
          </li>
        </ul>
      </li>
    </ul>
  );
}
