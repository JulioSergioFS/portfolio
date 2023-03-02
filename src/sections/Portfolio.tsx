import { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import { AnimateComponent } from "../components/AnimateComponent";
import { projects } from "../constants/project";
import useLocales from "../hooks/useLocales";
import "../styles/sections/portfolio.scss";

export function Portfolio() {
  const { t } = useLocales();
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1100);

  useEffect(() => {
    window.onresize = () => setIsMobile(window.innerWidth <= 1100);
  }, [window.innerWidth]);

  return (
    <div className="content">
      <AnimateComponent
        variants={{
          visible: { opacity: 1, y: 0, transition: { duration: 0.2 } },
        }}
      >
        <h2 className="title">{t("sections.portfolio.title")}</h2>
      </AnimateComponent>

      <AnimateComponent
        variants={{
          visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
        }}
      >
        <p className="subtitle">{t("sections.portfolio.subtitle")}</p>
      </AnimateComponent>

      <AnimateComponent
        variants={{
          visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
        }}
      >
        <Carousel
          className="carousel"
          autoPlay
          infiniteLoop
          showThumbs={false}
          centerMode
          centerSlidePercentage={isMobile ? undefined : 30}
          interval={6000}
          showStatus={false}
          renderIndicator={(onClickHandler, isSelected, index, label) => (
            <div
              className={`indicator${isSelected ? " select" : ""}`}
              onClick={onClickHandler}
            />
          )}
        >
          {projects.map((project) => (
            <a
              className="card"
              key={project.name}
              target="_blank"
              href={project.url}
            >
              <div>
                <img className="logo" src={project.image} alt={project.name} />
              </div>
              <h4>{project.name}</h4>
              <div className="company-text">
                <p className="text-secondary">
                  {t(`sections.portfolio.description.${project.smallName}`)}
                </p>
                <div className="redirect-link">Visitar site</div>
              </div>
            </a>
          ))}
        </Carousel>
      </AnimateComponent>
    </div>
  );
}
