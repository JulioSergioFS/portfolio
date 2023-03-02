import { m } from "framer-motion";
import React, { useEffect, useState } from "react";
import { ScrollingProvider, Section } from "react-scroll-section";
import { Header } from "./components/Header";
import MotionLazyContainer from "./components/MotionLazyContainer";
import { sections } from "./constants/header";
import "./styles/global.scss";

function App() {
  const [hidden, setHidden] = useState(false);
  const [hasBackground, setHasBackground] = useState(false);
  const offsetHeightBackground = 450;

  const hideSection1 = () => {
    if (window.pageYOffset > offsetHeightBackground) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  };

  const changeHeaderBackgroundOnScroll = () => {
    if (window.pageYOffset > offsetHeightBackground) {
      setHasBackground(true);
    } else {
      setHasBackground(false);
    }
  };

  useEffect(() => {
    window.onscroll = () => {
      hideSection1();
      changeHeaderBackgroundOnScroll();
    };
    return () => {
      window.onscroll = null;
    };
  }, []);

  return (
    <MotionLazyContainer>
      <ScrollingProvider scrollBehavior="smooth">
        <div className="app">
          <Header hasBackground={hasBackground} />
          <Section id="1">
            <section className="section home-section">
              <m.div
                animate={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                style={{
                  width: "100%",
                  height: "100%",
                  position: "fixed",
                  zIndex: 1,
                }}
              >
                {React.cloneElement(sections[0].component, {
                  hidden,
                })}
              </m.div>
            </section>
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
                {index !== 0 ? <div className="divider" /> : null}
                <section
                  className={`section background-${section.bgColor}`}
                  style={{
                    width: "100%",
                    height: "100%",
                  }}
                >
                  {section.component}
                </section>
              </Section>
            ) : null
          )}
        </div>
      </ScrollingProvider>
    </MotionLazyContainer>
  );
}

export default App;
