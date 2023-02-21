import "../styles/sections/home.scss";

export function Home() {
  return (
    <div className="home">
      <div className="info">
        <h2>Hi, I'm Julio!</h2>
        <p>Bem-vindo!</p>
        <button>Bem-vindo!</button>
      </div>
      <img
        className="my-photo"
        src="/images/eu.png"
        alt="Foto minha (criador do site) de perto"
      />
    </div>
  );
}
