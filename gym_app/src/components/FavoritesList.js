import React, { useState } from "react";

const ALL_EXERCISES = ["Squats", "Bench Press", "Deadlift", "Pull-Ups", "Plank"];

function FavoritesList() {
  // Start with no favorites (or you can pre-fill a couple if you want)
  const [favorites, setFavorites] = useState([]);

  const toggleFavorite = (exercise) => {
    setFavorites((prev) =>
      prev.includes(exercise)
        ? prev.filter((item) => item !== exercise) // remove if already favorited
        : [...prev, exercise]                      // add if not in list yet
    );
  };

  return (
    <div className="favorites-list" style={{ marginTop: "20px", marginBottom: "20px" }}>
      <h2>Favorites List</h2>
      <p>Tap the heart to add or remove exercises from favorites.</p>

      {/* All exercises with heart buttons */}
      <h4>All Exercises</h4>
      <ul className="exercise-list">
        {ALL_EXERCISES.map((exercise) => {
          const isFav = favorites.includes(exercise);
          return (
            <li key={exercise}>
              <button
                onClick={() => toggleFavorite(exercise)}
                style={{
                  border: "none",
                  background: "none",
                  cursor: "pointer",
                  fontSize: "18px",
                  marginRight: "8px",
                }}
                aria-label={isFav ? "Remove from favorites" : "Add to favorites"}
              >
                {isFav ? "❤️" : "🤍"}
              </button>
              {exercise}
            </li>
          );
        })}
      </ul>

      {/* Favorites list */}
      <h4>Your Favorites</h4>
      {favorites.length === 0 ? (
        <p>No favorites yet. Click a heart to add an exercise.</p>
      ) : (
        <ul className="favorites-list-items">
          {favorites.map((exercise) => (
            <li key={exercise}>{exercise}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default FavoritesList;

