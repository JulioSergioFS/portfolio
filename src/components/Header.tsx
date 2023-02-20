import "../styles/header.scss";

export function Header() {
  return (
    <ul className="header">
      <li>Home</li>
      <li>Quem Sou</li>
      <li>Portfólio</li>
      <li>Fale Comigo</li>
      <li>
        <ul className="socials">
          <li></li>
          <li></li>
        </ul>
      </li>
    </ul>
  );
}
