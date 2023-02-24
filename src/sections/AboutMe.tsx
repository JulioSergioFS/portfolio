import "../styles/sections/about.scss";

export function AboutMe() {
  return (
    <div className="content about">
      <div>
        <img
          className="my-photo"
          src="https://imgur.com/2wgjaKg.png"
          alt="My photo (creator of this website)"
        />
      </div>
      <div>
        <h2 className="title">About me</h2>
        <p>
          I am a Junior developer with almost 2 years of formal work experience
          seeking a new opportunity.
          <br />I have developed applications for various companies, I have
          experience working in a team and dealing with problems. Currently, I
          am deepening my knowledge in ReactJS and TypeScript.
        </p>
        <p>Read my articles &gt;&gt;</p>
      </div>
    </div>
  );
}
