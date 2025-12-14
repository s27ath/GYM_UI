import React, { useEffect } from "react";
import "./ExerciseDetailModal.css";

function ExerciseDetailModal({ isOpen, onClose, exercise }) {
  // Close modal on ESC key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen || !exercise) return null;

  const { name, difficulty, equipment = [], steps = [], safetyTips = [] } = exercise;

  return (
    <div className="modal-overlay" onClick={onClose} role="presentation">
      <div
        className="modal-card"
        onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside
        role="dialog"
        aria-modal="true"
        aria-label={`${name} details`}
      >
        <button className="modal-close" onClick={onClose} aria-label="Close modal">
          ×
        </button>

        <div className="modal-header">
          <h2 className="modal-title">{name}</h2>
          <span className={`modal-tag ${String(difficulty).toLowerCase()}`}>
            {difficulty}
          </span>
        </div>

        <div className="modal-section">
          <h3>Step-by-step</h3>
          {steps.length > 0 ? (
            <ol>
              {steps.map((s, idx) => (
                <li key={idx}>{s}</li>
              ))}
            </ol>
          ) : (
            <p className="muted">No steps added yet.</p>
          )}
        </div>

        <div className="modal-section">
          <h3>Equipment</h3>
          {equipment.length > 0 ? (
            <ul className="chip-row">
              {equipment.map((eq, idx) => (
                <li key={idx} className="chip">
                  {eq}
                </li>
              ))}
            </ul>
          ) : (
            <p className="muted">No equipment required.</p>
          )}
        </div>

        <div className="modal-section">
          <h3>Safety tips</h3>
          {safetyTips.length > 0 ? (
            <ul>
              {safetyTips.map((tip, idx) => (
                <li key={idx}>{tip}</li>
              ))}
            </ul>
          ) : (
            <p className="muted">No safety tips added yet.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default ExerciseDetailModal;
