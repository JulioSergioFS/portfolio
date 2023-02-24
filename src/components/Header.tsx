import githubIcon from "@iconify/icons-mdi/github";
import linkedinIcon from "@iconify/icons-mdi/linkedin";
import { Icon } from "@iconify/react";
import "../styles/header.scss";

export function Header() {
  return (
    <ul className="header">
      <li>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Portfolio</li>
          <li>Contact Me</li>
        </ul>
      </li>
      <li>
        <ul className="socials">
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
