import githubIcon from "@iconify/icons-mdi/github";
import { Icon } from "@iconify/react";
import { useEffect, useState } from "react";
import { useScrollSections } from "react-scroll-section";
import { sections } from "../constants/header";
import useLocales from "../hooks/useLocales";
import "../styles/header.scss";
import LanguagePopover from "./LanguagePopover";

export function Header({ hasBackground }: { hasBackground: boolean }) {
  const { t } = useLocales();
  const scrollSection = useScrollSections();
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1100);

  useEffect(() => {
    window.onresize = () => setIsMobile(window.innerWidth <= 1100);
  }, [window.innerWidth]);

  return (
    <ul className={`header${hasBackground ? " header-background" : ""}`}>
      {isMobile ? (
        <li>
          <img src="/js.svg" alt="js logo" />
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
            <a target="_blank" href="https://github.com/JulioSergioFS/">
              <Icon
                icon={githubIcon}
                color="#fefefe"
                height={isMobile ? 32 : 24}
              />
            </a>
          </li>
        </ul>
      </li>
    </ul>
  );
}
