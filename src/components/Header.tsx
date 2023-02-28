import githubIcon from "@iconify/icons-mdi/github";
import linkedinIcon from "@iconify/icons-mdi/linkedin";
import { Icon } from "@iconify/react";
import { useEffect, useState } from "react";
import { useScrollSections } from "react-scroll-section";
import { sections } from "../constants/header";
import useLocales from "../hooks/useLocales";
import "../styles/header.scss";
import LanguagePopover from "./LanguagePopover";

export function Header() {
  const { t } = useLocales();
  const scrollSection = useScrollSections();
  const [hasBackground, setHasBackground] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1100);
  const offsetHeightBackground = 450;
  const currentSection = scrollSection.filter((section) => section.selected)[0];

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

  useEffect(() => {
    window.onresize = () => setIsMobile(window.innerWidth <= 1100);
  }, [window.innerWidth]);

  return (
    <ul className={`header${hasBackground ? " header-background" : ""}`}>
      {isMobile ? (
        <li
          style={{
            fontWeight: "bold",
            fontSize: "1.4rem",
            display: "flex",
            alignItems: "center",
          }}
        >
          {t(
            currentSection
              ? sections[Number(currentSection.id) - 1].name
              : sections[0].name
          )}
        </li>
      ) : (
        <li className="menu">
          <ul>
            {sections.map((item, index) => (
              <li key={item.id} onClick={scrollSection[index]?.onClick}>
                {t(item.name)}
              </li>
            ))}
          </ul>
        </li>
      )}
      <li className="menu">
        <ul className="socials">
          <li>
            <LanguagePopover />
          </li>
          <li>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/julio-sergio-ferreira-silva/"
            >
              <Icon
                icon={linkedinIcon}
                color="#E3E3E3"
                height={isMobile ? 32 : 24}
              />
            </a>
          </li>
          <li>
            <a target="_blank" href="https://github.com/JulioSergioFS/">
              <Icon
                icon={githubIcon}
                color="#E3E3E3"
                height={isMobile ? 32 : 24}
              />
            </a>
          </li>
        </ul>
      </li>
    </ul>
  );
}
