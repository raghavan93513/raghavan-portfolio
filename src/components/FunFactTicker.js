import React from "react";

const FACTS = [
  "🚀 80% runtime improvements delivered on Spark pipelines",
  "🏆 1st Runner-Up — Databricks Global Hackathon 2025",
  "🤖 Built GPT-powered outreach tool that increased reply rates by 40%",
  "📚 2 published research papers in AI/ML",
  "🌍 Led STEM sessions for 100+ students across multiple schools",
  "🩸 Organized blood donation drives with 60+ donors each",
  "💡 Authored 20+ enablement articles used globally at Databricks",
  "🎙️ Delivered two nationwide Spark tech talks",
  "🧑‍🏫 Mentored 8 engineers as an SME in Spark, Delta Lake & MLflow",
  "☕ Fueled by chai, code, and the occasional banana 🍌",
];

function FunFactTicker() {
  const doubled = [...FACTS, ...FACTS];
  return (
    <div className="ticker-wrapper" aria-label="Fun facts about Raghavan">
      <div className="ticker-label">✦ HIGHLIGHTS</div>
      <div className="ticker-track">
        <div className="ticker-inner">
          {doubled.map((fact, i) => (
            <span key={i} className="ticker-item">
              {fact}
              <span className="ticker-sep" aria-hidden="true">✦</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FunFactTicker;
