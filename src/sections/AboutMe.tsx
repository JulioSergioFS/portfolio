import cssIcon from "@iconify/icons-skill-icons/css";
import figmaDark from "@iconify/icons-skill-icons/figma-dark";
import htmlIcon from "@iconify/icons-skill-icons/html";
import javascriptIcon from "@iconify/icons-skill-icons/javascript";
import reactDark from "@iconify/icons-skill-icons/react-dark";
import typescriptIcon from "@iconify/icons-skill-icons/typescript";
import { Icon } from "@iconify/react";
import "../styles/sections/about.scss";

export function AboutMe() {
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
          alt="My photo (creator of this website)"
        />
      </div>
      <div className="text">
        <h2 className="title">About me</h2>
        <div className="text-content">
          <p>
            I am a Junior developer with almost 2 years of formal work
            experience seeking a new opportunity.
          </p>
          <p>
            I have developed applications for various companies, I have
            experience working in a team and dealing with problems. Currently, I
            am deepening my knowledge in ReactJS and TypeScript.
          </p>
          <a
            className="read-link"
            target="_blank"
            href="https://juliosergiofs.medium.com/"
          >
            Read my articles &gt;&gt;
          </a>
        </div>
        <div className="logos">
          {logos.map((logo, index) => (
            <Icon icon={logo} height={48} />
          ))}
        </div>
      </div>
    </div>
  );
}
