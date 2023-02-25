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

            <ul>
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

            <ul>
              <li>
                <b>Gonew:</b> Creation of presentations in Power BI and
                development of an online course website including a blog with
                student posts.
              </li>
              <li>
                <b>BBX:</b> Development of a landing page with purchase and
                payment sections.
              </li>
              <li>
                <b>Ateliê do Doce:</b> Creation of a customized e-commerce
                website including payment and delivery sections and reports for
                administrators.
              </li>
            </ul>

            <p>
              Additionally, I also had the opportunity to collaborate on the
              creation of a package for automating the creation of CRUDs, the
              custom-crud-dash.
            </p>
          </div>
        </div>
        <div className="column sections">
          <div className="card">
            <h3 className="subtitle">Education</h3>
            <div className="container">
              <div>
                <p className="text-secondary">
                  <b>Estácio, Bachelor's Degree —</b> Computer Information
                  Systems JANUARY 2022 - EXPECTED ENDING DATE FOR 2025
                </p>
              </div>

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
