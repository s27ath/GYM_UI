import React, { useState } from "react";
import "./ExerciseList.css";
import ExerciseDetailModal from "./ExerciseDetailModal"; // ✅ NEW IMPORT

const exercises = [
  {
    id: 1,
    name: "Push Ups",
    difficulty: "Beginner",
    equipment: ["No Equipment"],
    steps: [
      "Place hands shoulder-width apart",
      "Keep body straight",
      "Lower chest and push back up",
    ],
    safetyTips: ["Keep core tight to avoid back strain"],
  },
  {
    id: 2,
    name: "Squats",
    difficulty: "Beginner",
    equipment: ["No Equipment"],
    steps: [
      "Stand with feet shoulder-width apart",
      "Lower hips back and down",
      "Push through heels to stand",
    ],
    safetyTips: ["Do not let knees cave inward"],
  },
  {
    id: 3,
    name: "Plank Hold",
    difficulty: "Intermediate",
    equipment: ["No Equipment"],
    steps: [
      "Elbows under shoulders",
      "Keep body straight",
      "Hold position",
    ],
    safetyTips: ["Stop if lower back hurts"],
  },
  {
    id: 4,
    name: "Deadlift",
    difficulty: "Advanced",
    equipment: ["Barbell"],
    steps: [
      "Grip bar close to shins",
      "Hinge at hips",
      "Stand tall with neutral spine",
    ],
    safetyTips: ["Never round your back"],
  },
  {
    id: 5,
    name: "Bench Press",
    difficulty: "Intermediate",
    equipment: ["Barbell", "Bench"],
    steps: [
      "Lie flat on bench",
      "Lower bar to chest",
      "Press bar upward",
    ],
    safetyTips: ["Use a spotter when lifting heavy"],
  },
];

function ExerciseList() {
  // ✅ Modal state
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedExercise, setSelectedExercise] = useState(null);

  const openDetails = (exercise) => {
    setSelectedExercise(exercise);
    setIsModalOpen(true);
  };

  const closeDetails = () => {
    setIsModalOpen(false);
    setSelectedExercise(null);
  };

  return (
    <div className="exercise-list">
      <h2>Exercises</h2>
      <p>Select the exercise that matches your fitness level.</p>

      <ul>
        {exercises.map((exercise) => (
          <li key={exercise.id} className="exercise-item">
            <span className="exercise-name">{exercise.name}</span>

            <span
              className={`difficulty-tag ${exercise.difficulty.toLowerCase()}`}
            >
              {exercise.difficulty}
            </span>

            {/* ✅ NEW BUTTON */}
            <button
              className="details-btn"
              onClick={() => openDetails(exercise)}
            >
              View Details
            </button>
          </li>
        ))}
      </ul>

      {/* ✅ MODAL RENDER */}
      <ExerciseDetailModal
        isOpen={isModalOpen}
        onClose={closeDetails}
        exercise={selectedExercise}
      />
    </div>
  );
}

export default ExerciseList;

