import "../styles/sections/about.scss";

export function AboutMe() {
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
        <p>
          I am a Junior developer with almost 2 years of formal work experience
          seeking a new opportunity.
        </p>
        <p>
          I have developed applications for various companies, I have experience
          working in a team and dealing with problems. Currently, I am deepening
          my knowledge in ReactJS and TypeScript.
        </p>
        <h4 className="read-link">Read my articles &gt;&gt;</h4>
      </div>
    </div>
  );
}
