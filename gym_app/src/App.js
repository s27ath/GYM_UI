import './App.css';
import weightsPic from './images/weights.jpg';

function App() {
  return (
    <div className="App">
      {/* Attraction picture – first thing users see */}
      <div className="hero">
        <img
          src={weightsPic}
          alt="Gym weights"
          className="attraction-picture"
          style={{ width: '100%', maxHeight: '300px', objectFit: 'cover' }}
        />
        <h1>Gym Application</h1>
        <p>Welcome! This is the base version of our gym app.</p>
      </div>

      <div className="feature-notice">
        <p>
          🔧 New features (Trainer Dashboard, Progress Tracking, Workout Plans,
          Management Dashboard, etc.) will be added here based on our user stories.
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
    </div>
  );
}

export default App;
