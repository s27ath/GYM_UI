import "./App.css";
import "./components/PopUp.css";

import React, { useState } from "react";

// Components
import FavoritesList from "./components/FavoritesList"; 
import ExerciseList from "./components/ExerciseList"; 
import PopUp from "./components/PopUp";
import HomeImage from "./components/HomeImage";
import AboutPage from "./components/AboutPage";
import LoginPage from "./components/LoginPage";
import Reviews from "./components/Reviews";
import TrainerAvailabilityStatus from "./components/TrainerAvailabilityStatus";
import QuickWorkout from "./components/Quickworkout";
import ProgressChart from "./components/ProgressChart";

function App() {
  const [view, setView] = useState("home"); 
  // views → home | login | quick | progress | exercises

  return (
    <div className="App">

      {/* Pop-up Notification */}
      <PopUp />

      {/* Hero Image */}
      <HomeImage />

      {/* Main Title */}
      <h1>Gym Application</h1>
      <p>Welcome! This is the base version of our gym app.</p>

      {/* Navigation Buttons */}
      <nav className="nav-buttons">
        <button onClick={() => setView("home")}>Home</button>
        <button onClick={() => setView("login")}>Login</button>
        <button onClick={() => setView("quick")}>Quick Workout</button>
        <button onClick={() => setView("progress")}>Weekly Progress</button>
        <button onClick={() => setView("exercises")}>Exercises</button>
      </nav>

      {/* ============================ HOME VIEW ============================ */}
      {view === "home" && (
        <>
          <AboutPage />
          <Reviews />
          <TrainerAvailabilityStatus />

          <section>
            <h2>Customer Features</h2>
            <p>Progress Tracking, Visual Charts, Weekly Goals, Photo Upload, etc.</p>
          </section>

          {/* Favorites */}
          <FavoritesList />

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

      {/* ============================ LOGIN VIEW ============================ */}
      {view === "login" && <LoginPage />}

      {/* ============================ QUICK WORKOUT VIEW ============================ */}
      {view === "quick" && <QuickWorkout />}

      {/* ============================ WEEKLY PROGRESS VIEW ============================ */}
      {view === "progress" && <ProgressChart />}

      {/* ============================ EXERCISES VIEW ============================ */}
      {view === "exercises" && (
        <>
          <h2>Workout Exercises</h2>
          <p>Choose exercises based on your difficulty level.</p>
          <ExerciseList />
        </>
      )}

    </div>
  );
}

export default App;










