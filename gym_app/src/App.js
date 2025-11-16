import "./App.css";

function App() {
  return (
    <div className="App">
      {/* Header with Login link */}
      <header className="app-header">
        <h1>Gym Application</h1>
        {/* This link satisfies the PBI "link in the webpage that takes clients to the log in page" */}
        <nav>
          <a href="#login" className="login-nav-link">
            Go to Login
          </a>
        </nav>
      </header>

      <p>Welcome! This is the base version of our gym app.</p>

      <div className="feature-notice">
        <p>
          🔧 New features (Trainer Dashboard, Progress Tracking, Workout Plans,
          Management Dashboard, etc.) will be added here based on our user
          stories.
        </p>
      </div>

      {/* Placeholder sections for future development */}
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

      {/* === PBI: Login Screen === */}
      <section id="login" className="login-section">
        <h2>Login</h2>

        <form className="login-form">
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            placeholder="Enter your username"
          />

          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            placeholder="Enter your password"
          />

          <button type="submit" className="login-button">
            Log In
          </button>
        </form>

        <div className="login-links">
          <a href="#forgot">Forgot Password?</a>
          <a href="#signup">Sign Up</a>
          <a href="#help">Help</a>
        </div>
      </section>
    </div>
  );
}

export default App;

