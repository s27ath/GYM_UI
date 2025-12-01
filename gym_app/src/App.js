import './App.css';
import './components/PopUp.css';

import React, { useState } from "react";

// Components
import FavoritesList from "./components/FavoritesList"; // PBI 19 – Favorites List
import PopUp from "./components/PopUp";
import HomeImage from "./components/HomeImage";
import AboutPage from "./components/AboutPage";
import LoginPage from "./components/LoginPage";
import Reviews from "./components/Reviews";
import TrainerAvailabilityStatus from "./components/TrainerAvailabilityStatus";
import QuickWorkout from "./components/Quickworkout";
import ProgressChart from "./components/ProgressChart";

function App() {
  const [view, setView] = useState("home"); // home | login | quick | progress

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
      <nav style={{ marginBottom: "20px" }}>
        <button onClick={() => setView("home")}>Home</button>
        <button onClick={() => setView("login")}>Login</button>
        <button onClick={() => setView("quick")}>Quick Workout</button>
        <button onClick={() => setView("progress")}>Weekly Progress</button>
      </nav>

      {/* Conditional Rendering per PBI View */}
      {view === "home" && (
        <>
          <AboutPage />
          <Reviews />
          <TrainerAvailabilityStatus />

          <section>
            <h2>Customer Features</h2>
            <p>Progress Tracking, Visual Charts, Weekly Goals, Photo Upload, etc.</p>
          </section>
{/* Favorites List – customers can save favorite exercises */}
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

      {view === "login" && <LoginPage />}
      {view === "quick" && <QuickWorkout />}
      {view === "progress" && <ProgressChart />}
    </div>
  );
}

export default App;









