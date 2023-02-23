import { useState } from "react";
import { Header } from "./components/Header";
import { AboutMe } from "./sections/AboutMe";
import { Contact } from "./sections/Contact";
import { Home } from "./sections/Home";
import { Portfolio } from "./sections/Portfolio";
import "./styles/global.scss";

function App() {
  const [count, setCount] = useState(0);
  const sections = [
    { component: <Home />, bgColor: "primary" },
    { component: <AboutMe />, bgColor: "secondary" },
    { component: <Portfolio />, bgColor: "primary" },
    { component: <Contact />, bgColor: "secondary" },
  ];

  return (
    <div className="app">
      <Header />
      {sections.map((section, index) => (
        <>
          <section className={`section background-${section.bgColor}`}>
            {section.component}
          </section>
          {sections.length !== index + 1 ? <div className="divider" /> : null}
        </>
      ))}
    </div>
  );
}

export default App;
