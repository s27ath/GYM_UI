// src/App.js
import React, { useState } from "react";
import "./App.css";

function App() {
  const [view, setView] = useState("home"); // 'home' | 'login' | 'quick'

  // --- Quick Workout data ---
  const presetWorkouts = [
    { id: 1, name: "Beginner Full Body", description: "Light full-body routine." },
    { id: 2, name: "Strength Focus", description: "Heavy compound lifts." },
    { id: 3, name: "Cardio Blast", description: "High-intensity cardio circuits." },
  ];

  const demoClients = ["Alex Carter", "Jordan Smith", "Taylor Nguyen"];

  const [loginUsername, setLoginUsername] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [loginStatus, setLoginStatus] = useState("");

  const [selectedClient, setSelectedClient] = useState("");
  const [selectedWorkoutId, setSelectedWorkoutId] = useState("");
  const [assignmentMessage, setAssignmentMessage] = useState("");

  // --- PBI 8: login submit handler ---
  const handleLoginSubmit = (e) => {
    e.preventDefault();

    if (loginUsername.trim() === "" || loginPassword.trim() === "") {
      setLoginStatus("Please enter both a username and password.");
    } else {
      setLoginStatus(`Login attempted for user: ${loginUsername}`);
    }
  };

  // --- PBI 14: quick workout assign handler ---
  const handleAssignWorkout = () => {
    if (!selectedClient || !selectedWorkoutId) {
      setAssignmentMessage("Please select both a client and a workout routine.");
      return;
    }

    const workout = presetWorkouts.find(
      (w) => w.id === Number(selectedWorkoutId)
    );

    setAssignmentMessage(
      `Assigned "${workout.name}" to ${selectedClient} with one click.`
    );
  };

  return (
    <div className="App">
      {/* Header / title from template */}
      <header>
        <h1>Gym Application</h1>
        <p>Welcome! This is the base version of our gym app.</p>
      </header>

      {/* Simple nav instead of router, so everything is in one file */}
      <nav style={{ marginBottom: "20px" }}>
        <button onClick={() => setView("home")} style={{ marginRight: "10px" }}>
          Home
        </button>
        <button onClick={() => setView("login")} style={{ marginRight: "10px" }}>
          Login
        </button>
        <button onClick={() => setView("quick")}>
          Quick Workout Assignment
        </button>
      </nav>

      {/* Feature notice from the template */}
      <div className="feature-notice">
        <p>
          🔧 New features (Trainer Dashboard, Progress Tracking, Workout Plans,
          Management Dashboard, etc.) will be added here based on our user stories.
        </p>
      </div>

      {/* ---------- HOME VIEW: original template sections ---------- */}
      {view === "home" && (
        <>
          <section>
            <h2>Customer Features</h2>
            <p>Progress Tracking, Visual Charts, Weekly Goals, Photo Upload, etc.</p>
          </section>

          <section>
            <h2>Trainer Features</h2>
            <p>Workout Plan Assignment, Alerts, Modification Requests, etc.</p>
          </section>

          <section>
            <h2>Management Features</h2>
            <p>Analytics Dashboard, Membership Monitoring, Trend Reports, etc.</p>
          </section>
        </>
      )}

      {/* ---------- PBI 8: LOGIN SCREEN VIEW ---------- */}
      {view === "login" && (
        <div className="login-page">
          <h2>Login</h2>

          <form className="login-form" onSubmit={handleLoginSubmit}>
            <label htmlFor="username">Username</label>
            <input
              id="username"
              type="text"
              placeholder="Enter username"
              value={loginUsername}
              onChange={(e) => setLoginUsername(e.target.value)}
            />

            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              placeholder="Enter password"
              value={loginPassword}
              onChange={(e) => setLoginPassword(e.target.value)}
            />

            <button type="submit">Login</button>

            <div className="login-links">
              <a href="#forgot">Forgot Password?</a>
              <a href="#signup">Sign Up</a>
              <a href="#help">Help</a>
            </div>
          </form>

          {loginStatus && <p className="login-status">{loginStatus}</p>}
        </div>
      )}

      {/* ---------- PBI 14: QUICK WORKOUT ASSIGNMENT VIEW ---------- */}
      {view === "quick" && (
        <div className="quick-workout-page">
          <h2>Quick Workout Assignment</h2>
          <p>
            As a trainer, use this screen to quickly assign a preset workout
            routine to a client with a single button click.
          </p>

          {/* Select client */}
          <div className="quick-workout-section">
            <label htmlFor="client-select">Select Client</label>
            <select
              id="client-select"
              value={selectedClient}
              onChange={(e) => setSelectedClient(e.target.value)}
            >
              <option value="">-- Choose a client --</option>
              {demoClients.map((client) => (
                <option key={client} value={client}>
                  {client}
                </option>
              ))}
            </select>
          </div>

          {/* Select preset workout */}
          <div className="quick-workout-section">
            <label htmlFor="workout-select">Select Preset Workout</label>
            <select
              id="workout-select"
              value={selectedWorkoutId}
              onChange={(e) => setSelectedWorkoutId(e.target.value)}
            >
              <option value="">-- Choose a workout --</option>
              {presetWorkouts.map((workout) => (
                <option key={workout.id} value={workout.id}>
                  {workout.name}
                </option>
              ))}
            </select>

            <ul className="workout-descriptions">
              {presetWorkouts.map((workout) => (
                <li key={workout.id}>
                  <strong>{workout.name}:</strong> {workout.description}
                </li>
              ))}
            </ul>
          </div>

          {/* One-click assign button */}
          <button className="assign-workout-button" onClick={handleAssignWorkout}>
            Assign Workout
          </button>

          {assignmentMessage && (
            <p className="assignment-message">{assignmentMessage}</p>
          )}
        </div>
      )}
    </div>
  );
}

export default App;
