import React from "react";
import "./ExerciseEquipment.css";

function ExerciseEquipment() {
  return (
    <div className="equipment-container">
      <h1>Exercise Equipment Guide</h1>

      <p>Each exercise below shows the equipment you need so you can prepare before starting:</p>

      <div className="exercise-card">
        <img src="https://cdn-icons-png.flaticon.com/512/2964/2964514.png" alt="Push Ups" />
        <div>
          <h3>Push-Ups</h3>
          <p>Equipment: <strong>No Equipment</strong></p>
        </div>
      </div>

      <div className="exercise-card">
        <img src="https://cdn-icons-png.flaticon.com/512/2964/2964525.png" alt="Dumbbells" />
        <div>
          <h3>Dumbbell Curls</h3>
          <p>Equipment: <strong>Dumbbells</strong></p>
        </div>
      </div>

      <div className="exercise-card">
        <img src="https://cdn-icons-png.flaticon.com/512/4834/4834671.png" alt="Barbell" />
        <div>
          <h3>Bench Press</h3>
          <p>Equipment: <strong>Barbell</strong></p>
        </div>
      </div>

      <div className="exercise-card">
        <img src="https://cdn-icons-png.flaticon.com/512/4151/4151048.png" alt="Plank" />
        <div>
          <h3>Plank</h3>
          <p>Equipment: <strong>No Equipment</strong></p>
        </div>
      </div>

      <div className="exercise-card">
        <img src="https://cdn-icons-png.flaticon.com/512/4834/4834667.png" alt="Lat Pulldown" />
        <div>
          <h3>Lat Pulldown</h3>
          <p>Equipment: <strong>Machine</strong></p>
        </div>
      </div>

      <div className="exercise-card">
        <img src="https://cdn-icons-png.flaticon.com/512/2973/2973292.png" alt="Squats" />
        <div>
          <h3>Squats</h3>
          <p>Equipment: <strong>Barbell</strong></p>
        </div>
      </div>

      <div className="exercise-card">
        <img src="https://cdn-icons-png.flaticon.com/512/2964/2964561.png" alt="Shoulder Press" />
        <div>
          <h3>Shoulder Press</h3>
          <p>Equipment: <strong>Dumbbells</strong></p>
        </div>
      </div>
    </div>
  );
}

export default ExerciseEquipment;
