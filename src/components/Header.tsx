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
            <img src="/icons/linkedin.svg" />
          </li>
          <li>
            <img src="/icons/github.svg" />
          </li>
        </ul>
      </li>
    </ul>
  );
}
