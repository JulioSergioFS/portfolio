import cssIcon from "@iconify/icons-skill-icons/css";
import figmaDark from "@iconify/icons-skill-icons/figma-dark";
import htmlIcon from "@iconify/icons-skill-icons/html";
import javascriptIcon from "@iconify/icons-skill-icons/javascript";
import reactDark from "@iconify/icons-skill-icons/react-dark";
import typescriptIcon from "@iconify/icons-skill-icons/typescript";
import { Icon } from "@iconify/react";
import useLocales from "../hooks/useLocales";
import "../styles/sections/about.scss";

export function AboutMe() {
  const { t } = useLocales();
  const logos = [
    typescriptIcon,
    javascriptIcon,
    reactDark,
    figmaDark,
    cssIcon,
    htmlIcon,
  ];

  return (
    <div className="content about">
      <div className="image-container">
        <img
          className="my-photo"
          src="https://i.imgur.com/dXUCZM0.png"
          alt={t("sections.about.alt")}
        />
      </div>
      <div className="text">
        <h2 className="title">{t("sections.about.title")}</h2>
        <div className="text-content text-secondary">
          <p>{t("sections.about.text1")}</p>
          <p>{t("sections.about.text2")}</p>
          <a
            className="redirect-link"
            target="_blank"
            href="https://juliosergiofs.medium.com/"
          >
            {t("sections.about.link")} &gt;&gt;
          </a>
        </div>
        <div className="logos">
          {logos.map((logo, index) => (
            <Icon key={index} icon={logo} height={48} />
          ))}
        </div>
      </div>
    </div>
  );
}
