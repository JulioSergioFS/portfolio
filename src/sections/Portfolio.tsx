import "../styles/sections/portfolio.scss";

export function Portfolio() {
  return (
    <div className="content">
      <h2 className="title">Portfolio</h2>
      <div className="experience-text">
        <div className="column card">
          <h3 className="subtitle">Formal Work</h3>
          <div className="container text-secondary">
            <p>
              <b>Intern and Junior Developer</b> at Dash Solutions (june 2021 -
              present)
            </p>

            <p>
              At Dash Solutions, I worked as a front-end development intern from
              June 2021 to July 2022, and right after I got promoted to Junior
              Developer. During this period, I was responsible for:
            </p>

            <ul className="responsabilities-list">
              <li>Developing applications using ReactJS and TypeScript</li>
              <li>Creating forms using React Hook Forms</li>
              <li>Creating CRUDs using Redux and Axios</li>
              <li>Creating layouts using Figma</li>
              <li>Collaborating with the back-end team</li>
            </ul>

            <p>
              As Dash Solutions is a company that develops applications for
              clients, these are some of the projects I was involved:
            </p>

            <ul className="company-list">
              <li className="company">
                <img
                  className="logo"
                  src="data:image/png;base64,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"
                />
                Creation of presentations in Power BI and development of an
                online course website including a blog with student posts.
              </li>
              <li className="company">
                <img
                  className="logo"
                  src="https://www.go-bbx.com/static/media/logoBBXlight.3a7e4475.svg"
                />
                Development of a landing page with purchase and payment
                sections.
              </li>
              <li className="company">
                <img
                  className="logo"
                  src="https://content.epadoca.com/images/padaria/ateliedodoce/Logo_638023121452894709_638084491063065753.jpeg"
                />
                Creation of a customized e-commerce website including payment
                and delivery sections and reports for administrators.
              </li>
            </ul>

            <p>
              Additionally, I also had the opportunity to collaborate on the
              creation of a package for automating the creation of CRUDs, the{" "}
              <a>custom-crud-dash</a>.
            </p>
          </div>
        </div>
        <div className="column sections">
          <div className="card">
            <h3 className="subtitle">Education</h3>
            <div className="container">
              <p className="text-secondary">
                <b>Estácio, Bachelor's Degree —</b> Computer Information Systems
                JANUARY 2022 - EXPECTED ENDING DATE FOR 2025
              </p>

              <p className="text-secondary">
                <b>Alura —</b> Front-End 170 HOURS A course in which I learned
                both in theory and practice, creating various projects, all of
                which can be found on my Github.
              </p>
            </div>
          </div>
          <div className="card">
            <h3 className="subtitle">Open Source Experience</h3>
            <p className="text-secondary">
              <b>developer-roadmap —</b> Open Source Collaboration Translated
              the project introduction from English to Portuguese. The project
              has 228,000 stars on GitHub and has impacted developers.
            </p>
          </div>
          <div className="card">
            <h3 className="subtitle">Projects</h3>
            <p className="text-secondary">
              <b>Web Template —</b> An application made in ReactJS with a
              dashboard, a login page, and, in the future, an e-commerce
              section. The project is currently in progress and I am reinforcing
              what I have learned and getting to know new tools such as, for
              example, PNPM.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
