import React from "react";
import "./LanguageSwitcher.css";

export default function LanguageSwitcher({ language, onChange }) {
  return (
    <div className="language-switcher" aria-label="Språk / Language">
      <span className="language-title">Språk / Language</span>
      <div className="language-options" role="group" aria-label="Choose language">
        <button
          className={language === "no" ? "language-option is-selected" : "language-option"}
          type="button"
          aria-pressed={language === "no"}
          onClick={() => onChange("no")}
        >
          NO
        </button>
        <button
          className={language === "en" ? "language-option is-selected" : "language-option"}
          type="button"
          aria-pressed={language === "en"}
          onClick={() => onChange("en")}
        >
          EN
        </button>
      </div>
    </div>
  );
}
