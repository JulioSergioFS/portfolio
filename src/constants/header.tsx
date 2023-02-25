import { AboutMe } from "../sections/AboutMe";
import { Contact } from "../sections/Contact";
import { Home } from "../sections/Home";
import { Portfolio } from "../sections/Portfolio";

export const sections = [
  { id: "1", name: "Home", component: <Home />, bgColor: "secondary" },
  { id: "2", name: "About", component: <AboutMe />, bgColor: "secondary" },
  { id: "3", name: "Portfolio", component: <Portfolio />, bgColor: "primary" },
  { id: "4", name: "Contact Me", component: <Contact />, bgColor: "secondary" },
];
