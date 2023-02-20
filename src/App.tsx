import { useState } from "react";
import { Header } from "./components/Header";
import Contact from "./sections/Contact";
import { Home } from "./sections/Home";
import Portfolio from "./sections/Portfolio";
import WhoAmI from "./sections/WhoAmI";
import "./styles/global.scss";

function App() {
  const [count, setCount] = useState(0);
  const sections = [
    { component: <Home />, bgColor: "primary" },
    { component: <WhoAmI />, bgColor: "secondary" },
    { component: <Portfolio />, bgColor: "secondary" },
    { component: <Contact />, bgColor: "secondary" },
  ];

  return (
    <div className="app">
      <Header />
      {sections.map((section, index) => (
        <>
          <div className={`section background-${section.bgColor}`}>
            {section.component}
          </div>
          {sections.length !== index + 1 ? <div className="divider" /> : null}
        </>
      ))}
    </div>
  );
}

export default App;
