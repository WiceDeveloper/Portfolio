import React, { useState } from "react";
import "./ProfolioSections.css";

export default function ProfolioSections({ content }) {
  const [activeCategory, setActiveCategory] = useState(0);
  const [previewCategory, setPreviewCategory] = useState(null);
  const [entryIndexes, setEntryIndexes] = useState({});
  const displayedCategory = previewCategory ?? activeCategory;
  const category = content.categories[displayedCategory];
  const entryIndex = entryIndexes[category.id] ?? 0;
  const entry = category.entries[entryIndex];

  function selectCategory(index) {
    if (index === activeCategory) {
      const id = content.categories[index].id;
      setEntryIndexes((current) => ({
        ...current,
        [id]: ((current[id] ?? 0) + 1) % content.categories[index].entries.length,
      }));
    } else {
      setActiveCategory(index);
    }
    setPreviewCategory(null);
  }

  function moveEntry(direction) {
    setEntryIndexes((current) => ({
      ...current,
      [category.id]:
        (entryIndex + direction + category.entries.length) % category.entries.length,
    }));
  }

  return (
    <section className="journey-section" id="journey" aria-labelledby="journey-title">
      <div className="journey-heading">
        <div>
          <p className="eyebrow">
            <span className="eyebrow-line" />
            {content.eyebrow}
          </p>
          <h2 id="journey-title">
            {content.title} <span>{content.titleAccent}</span>
          </h2>
        </div>
        <p className="journey-description">{content.description}</p>
      </div>

      <div className="journey-layout">
        <nav className="journey-nav" aria-label="Portfolio sections">
          <span className="journey-thread" aria-hidden="true" />
          {content.categories.map((item, index) => {
            const isActive = activeCategory === index;
            const isPreview = previewCategory === index;
            return (
              <button
                className={`journey-stop${isActive ? " is-active" : ""}${isPreview ? " is-preview" : ""}`}
                key={item.id}
                type="button"
                aria-pressed={isActive}
                aria-label={`${item.name}${isActive ? `, ${content.itemOf} ${entryIndex + 1} ${content.itemOf} ${item.entries.length}` : ""}`}
                onMouseEnter={() => setPreviewCategory(index)}
                onMouseLeave={() => setPreviewCategory(null)}
                onFocus={() => setPreviewCategory(index)}
                onBlur={() => setPreviewCategory(null)}
                onClick={() => selectCategory(index)}
              >
                <span className="journey-stop-label">{item.name}</span>
                <span className="journey-bubble" aria-hidden="true">
                  <span className="journey-bubble-icon">{item.icon}</span>
                  <span className="journey-bubble-index">0{index + 1}</span>
                </span>
                <span className="journey-mobile-label">{item.shortName}</span>
              </button>
            );
          })}
        </nav>

        <article className="journey-card" aria-live="polite">
          <div className="journey-card-topline">
            <span className="journey-category-label">
              <span className="journey-category-icon" aria-hidden="true">
                {category.icon}
              </span>
              {category.name}
            </span>
            <span className="journey-counter">
              {String(entryIndex + 1).padStart(2, "0")}
              <span> / {String(category.entries.length).padStart(2, "0")}</span>
            </span>
          </div>
          <p className="journey-date">{entry.date}</p>
          <h3>{entry.title}</h3>
          <p className="journey-organization">{entry.organization}</p>
          <p className="journey-entry-description">{entry.description}</p>
          <div className="journey-tags">
            {entry.tags.map((tag) => (
              <span className="journey-tag" key={tag}>
                {tag}
              </span>
            ))}
          </div>
          <div className="journey-card-footer">
            <span className="journey-hint">
              {content.itemOf} {entryIndex + 1} {content.itemOf} {category.entries.length}
            </span>
            <div className="journey-controls">
              <button
                className="journey-previous"
                type="button"
                aria-label={content.previous}
                onClick={() => moveEntry(-1)}
              >
                ←
              </button>
              <button
                className="journey-next"
                type="button"
                onClick={() => moveEntry(1)}
              >
                {content.next}
                <span aria-hidden="true">↗</span>
              </button>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
