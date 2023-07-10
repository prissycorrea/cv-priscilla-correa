import React from "react";
import styled from "@emotion/styled";
import ReactFullpage from "@fullpage/react-fullpage";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import aboutTranslationEN from "./locales/en/about.json";
import contactTranslationEN from "./locales/en/contact.json";
import homeTranslationEN from "./locales/en/home.json";
import menuLinksTranslationEN from "./locales/en/menuLinks.json";
import portfolioTranslationEN from "./locales/en/portfolio.json";
import skillsTranslationEN from "./locales/en/skills.json";
import aboutTranslationPT from "./locales/pt/about.json";
import contactTranslationPT from "./locales/pt/contact.json";
import homeTranslationPT from "./locales/pt/home.json";
import menuLinksTranslationPT from "./locales/pt/menuLinks.json";
import portfolioTranslationPT from "./locales/pt/portfolio.json";
import skillsTranslationPT from "./locales/pt/skills.json";
import Navbar from "./components/Navbar/Navbar.jsx";
import Home from "./components/Home/Home.jsx";
import About from "./components/About/About.jsx";
import Skills from "./components/Skills/Skills.jsx";
import Portfolio from "./components/Portfolio/Portfolio.jsx";
import Contact from "./components/Contact/Contact.jsx";
import Footer from "./components/Footer/Footer.jsx";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      about: aboutTranslationEN,
      contact: contactTranslationEN,
      home: homeTranslationEN,
      menuLinks: menuLinksTranslationEN,
      portfolio: portfolioTranslationEN,
      skills: skillsTranslationEN,
    },
    pt: {
      about: aboutTranslationPT,
      contact: contactTranslationPT,
      home: homeTranslationPT,
      menuLinks: menuLinksTranslationPT,
      portfolio: portfolioTranslationPT,
      skills: skillsTranslationPT,
    },
  },
  lng: "pt",
  fallbackLng: "pt",
  interpolation: {
    escapeValue: false,
  },
});

const GlobalStyles = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const FullPageOptions = {
  licenseKey: "OPEN-SOURCE-GPLV3-LICENSE",
  scrollingSpeed: 1000,
};

const App = () => {
  return (
    <GlobalStyles>
      <Navbar />
      <ReactFullpage.Wrapper>
        <div id="home" className="section">
          <Home />
        </div>
        <div id="about" className="section">
          <About />
        </div>
        <div id="skills" className="section">
          <Skills />
        </div>
        <div id="portfolio" className="section">
          <Portfolio />
        </div>
        <div id="contact" className="section">
          <Contact />
        </div>
      </ReactFullpage.Wrapper>

      <Footer />
    </GlobalStyles>
  );
};

export default App;
