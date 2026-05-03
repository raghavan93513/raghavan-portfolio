import React from "react";

const FACTS = [
  "🎙️ Delivered nationwide Spark tech talks in Databricks",
  "🧑‍🏫 Mentored new engineers as an SME in Spark, Delta Lake & MLflow",
  "🏆 1st Runner-Up — Databricks Global Hackathon 2025",
  "📚 2 published research papers in AI/ML",
  "👨‍💻 Mentored and Judged AI Hackathons at IIT Madras and IISc Bangalore",
  "🌍 Led STEM sessions for 100+ students across multiple schools (NGO)",
  "🩸 Organized blood donation drives with 60+ donors each (NGO)",
  "💡 Authored 20+ enablement articles used globally"
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
