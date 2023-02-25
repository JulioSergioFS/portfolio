import { ScrollingProvider, Section } from "react-scroll-section";
import { Header } from "./components/Header";
import { sections } from "./constants/header";
import "./styles/global.scss";

function App() {
  return (
    <ScrollingProvider scrollBehavior="smooth">
      <div className="app">
        <Header />
        {sections.map((section, index) => (
          <Section id={(index + 1).toString()} key={index}>
            <section
              className={`section background-${section.bgColor}`}
              style={{
                ...(index === 0 && { padding: 0 }),
              }}
            >
              {section.component}
            </section>
            {sections.length !== index + 1 ? <div className="divider" /> : null}
          </Section>
        ))}
      </div>
    </ScrollingProvider>
  );
}

export default App;
