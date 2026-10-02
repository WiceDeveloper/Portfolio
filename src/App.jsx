import React, { useEffect, useState } from "react";
import Bio from "./components/Bio.jsx";
import LanguageSwitcher from "./components/LanguageSwitcher.jsx";
import JourneySections from "./components/JourneySections.jsx";
import { translations } from "./data.js";

export default function App() {
  const [language, setLanguage] = useState("en");
  const content = translations[language];

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  return (
    <main className="page-shell">
      <header className="topbar">
        <a className="wordmark" href="#" aria-label="Profolio home">
          <span className="wordmark-mark">p.</span>
          profolio
        </a>
        <LanguageSwitcher language={language} onChange={setLanguage} />
      </header>

      <section className="intro-section" aria-labelledby="intro-title">
        <div className="intro-copy">
          <p className="eyebrow">
            <span className="eyebrow-line" />
            {content.intro.eyebrow}
          </p>
          <h1 id="intro-title">
            {content.intro.titleStart}
            <span>{content.intro.titleAccent}</span>
          </h1>
          <p className="intro-description">{content.intro.description}</p>
          <a className="explore-link" href="#journey">
            {content.intro.explore}
            <span aria-hidden="true">↘</span>
          </a>
        </div>
        <Bio content={content.bio} />
      </section>

      <JourneySections content={content.journey} />

      <footer className="footer">
        <span>{content.footer}</span>
        <span className="footer-sparkle" aria-hidden="true">✳</span>
      </footer>
    </main>
  );
}
