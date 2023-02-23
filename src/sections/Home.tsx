import "../styles/sections/home.scss";

export function Home() {
  return (
    <div className="content">
      <div className="info">
        <h2>Hi, I'm Julio!</h2>
        <p>I'm a front-end developer and freelancer</p>
        <button>Contact Me</button>
        <button>Download Resume</button>
      </div>
      <img
        className="my-photo"
        src="/images/eu.png"
        alt="Foto minha (criador do site) de perto"
      />
    </div>
  );
}
