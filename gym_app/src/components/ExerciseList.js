import React from "react";
import "./ExerciseList.css";

const exercises = [
  { id: 1, name: "Push Ups", difficulty: "Beginner" },
  { id: 2, name: "Squats", difficulty: "Beginner" },
  { id: 3, name: "Plank Hold", difficulty: "Intermediate" },
  { id: 4, name: "Deadlift", difficulty: "Advanced" },
  { id: 5, name: "Bench Press", difficulty: "Intermediate" },
];

function ExerciseList() {
  return (
    <div className="exercise-list">
      <h2>Exercises</h2>
      <p>Select the exercise that matches your fitness level.</p>

      <ul>
        {exercises.map((exercise) => (
          <li key={exercise.id} className="exercise-item">
            <span className="exercise-name">{exercise.name}</span>

            {/* Difficulty Tag */}
            <span className={`difficulty-tag ${exercise.difficulty.toLowerCase()}`}>
              {exercise.difficulty}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ExerciseList;
