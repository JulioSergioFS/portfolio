import googleGmail from "@iconify/icons-logos/google-gmail";
import whatsappIcon from "@iconify/icons-logos/whatsapp-icon";
import instagramIcon from "@iconify/icons-skill-icons/instagram";
import linkedinIcon from "@iconify/icons-skill-icons/linkedin";
import { Icon } from "@iconify/react";
import { useEffect, useState } from "react";
import { AnimateComponent } from "../components/AnimateComponent";
import useLocales from "../hooks/useLocales";
import "../styles/sections/contact.scss";

export function Contact() {
  const { t } = useLocales();
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1100);

  useEffect(() => {
    window.onresize = () => setIsMobile(window.innerWidth <= 1100);
  }, [window.innerWidth]);

  const socials = [
    {
      name: "Linkedin",
      link: "https://www.linkedin.com/in/julio-sergio-ferreira-silva",
      icon: <Icon icon={linkedinIcon} height={22} />,
    },
    {
      name: "juliosecondary@gmail.com",
      link: `mailto:juliosecondary@gmail.com?subject=${t(
        "sections.contact.subjects.email"
      )}`,
      icon: <Icon icon={googleGmail} height={22} />,
    },
    {
      name: "+55 (31) 99211-1538",
      link: `https://wa.me/5531992111538?text=${t(
        "sections.contact.subjects.number"
      )}`,
      icon: <Icon icon={whatsappIcon} height={22} />,
    },
    {
      name: "Instagram",
      link: "https://www.instagram.com/julio_sergiofs/",
      icon: <Icon icon={instagramIcon} height={22} />,
    },
  ];

  const socialsMobile = [socials[0], socials[3], socials[2], socials[1]];

  return (
    <div className="content contact">
      <AnimateComponent>
        <h4 className="title-variant">{t("sections.contact.title")}</h4>
      </AnimateComponent>
      <AnimateComponent
        variants={{
          visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
        }}
        className="socials"
      >
        {(isMobile ? socialsMobile : socials).map((social) => (
          <a key={social.name} href={social.link} target="_blank">
            {social.icon}
            <p>{social.name}</p>
          </a>
        ))}
      </AnimateComponent>
    </div>
  );
}
