import { AnimateComponent } from "../components/AnimateComponent";
import { testimonials } from "../constants/testimonials";
import useLocales from "../hooks/useLocales";
import "../styles/sections/testimonials.scss";

export function Testimonials({ isMobile }: { isMobile?: boolean }) {
  const { t } = useLocales();

  return (
    <div className="content">
      <AnimateComponent
        variants={{
          visible: { opacity: 1, y: 0, transition: { duration: 0.2 } },
        }}
      >
        <h2 className="title">{t("sections.testimonials.title")}</h2>
      </AnimateComponent>

      <div className="testimonials">
        {testimonials.map((person, index) => (
          <AnimateComponent
            className="item"
            key={person.name}
            variants={{
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.8 * ((index + 1) / 4) },
              },
            }}
          >
            <p className="text description">
              "{t(`sections.testimonials.list.${person.name}.text`)}"
            </p>
            <a className="profile" target="_blank" href={person.link}>
              <img
                className="logo"
                src={person.photo}
                alt={
                  t("sections.testimonials.alt") +
                  t(`sections.testimonials.list.${person.name}.fullName`)
                }
              />
              <div className="info">
                <p className="redirect-link name">
                  {t(`sections.testimonials.list.${person.name}.fullName`)}
                </p>
                <p className="role">
                  {t(`sections.testimonials.list.${person.name}.role`)}
                </p>
              </div>
            </a>
          </AnimateComponent>
        ))}
      </div>
    </div>
  );
}
