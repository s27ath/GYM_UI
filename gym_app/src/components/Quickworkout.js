import React, { useState } from "react";

function QuickWorkout() {
  const presetWorkouts = [
    { id: 1, name: "Beginner Full Body", description: "Light full-body routine." },
    { id: 2, name: "Strength Focus", description: "Heavy compound lifts." },
    { id: 3, name: "Cardio Blast", description: "High-intensity cardio circuits." }
  ];

  const demoClients = ["Alex Carter", "Jordan Smith", "Taylor Nguyen"];

  const [selectedClient, setSelectedClient] = useState("");
  const [selectedWorkoutId, setSelectedWorkoutId] = useState("");
  const [assignmentMessage, setAssignmentMessage] = useState("");

  const assignWorkout = () => {
    if (!selectedClient || !selectedWorkoutId) {
      setAssignmentMessage("Please select both a client and a workout routine.");
      return;
    }

    const workout = presetWorkouts.find(w => w.id === Number(selectedWorkoutId));
    setAssignmentMessage(`Assigned "${workout.name}" to ${selectedClient}.`);
  };

  return (
    <div className="quick-workout">
      <h2>Quick Workout Assignment</h2>

      <label>Select Client</label>
      <select value={selectedClient} onChange={(e) => setSelectedClient(e.target.value)}>
        <option value="">-- Choose a client --</option>
        {demoClients.map((c) => (
          <option key={c} value={c}>{c}</option>
        ))}
      </select>

      <label>Select Workout</label>
      <select value={selectedWorkoutId} onChange={(e) => setSelectedWorkoutId(e.target.value)}>
        <option value="">-- Choose a workout --</option>
        {presetWorkouts.map((w) => (
          <option key={w.id} value={w.id}>{w.name}</option>
        ))}
      </select>

      <ul>
        {presetWorkouts.map((w) => (
          <li key={w.id}>
            <strong>{w.name}</strong>: {w.description}
          </li>
        ))}
      </ul>

      <button onClick={assignWorkout}>Assign Workout</button>

      {assignmentMessage && <p>{assignmentMessage}</p>}
    </div>
  );
}

export default QuickWorkout;

