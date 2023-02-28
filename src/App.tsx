import { ScrollingProvider, Section } from "react-scroll-section";
import { Header } from "./components/Header";
import { sections } from "./constants/header";
import "./styles/global.scss";

function App() {
  return (
    <ScrollingProvider scrollBehavior="smooth">
      <div className="app">
        <Header />
        <Section id="1">
          <section
            className="section"
            style={{
              height: "540px",
              padding: 0,
            }}
          >
            <div
              style={{
                width: "100%",
                height: "100%",
                position: "fixed",
                zIndex: 1,
              }}
            >
              {sections[0].component}
            </div>
          </section>
          <div className="divider" />
        </Section>
        {sections.map((section, index) =>
          index != 0 ? (
            <Section
              id={(index + 1).toString()}
              key={index}
              style={{
                zIndex: 2,
              }}
            >
              <section className={`section background-${section.bgColor}`}>
                {section.component}
              </section>
              {sections.length !== index + 1 ? (
                <div className="divider" />
              ) : null}
            </Section>
          ) : null
        )}
      </div>
    </ScrollingProvider>
  );
}

export default App;
