import logo from './logo.svg';
import './App.css'; // Assuming you'll customize App.css for styling

// Define a simple header component
function Header() {
  return (
    <header className="App-header">
      {/* This link could be the app's logo or home button */}
      <img src={logo} className="App-logo" alt="logo" />
      <nav>
        {/* Basic Navigation Links */}
        <a className="App-link" href="#workouts">Workouts</a>
        <a className="App-link" href="#schedule">Schedule</a>
        <a className="App-link" href="#profile">Profile</a>
      </nav>
    </header>
  );
}

// Define the main content component
function Content() {
  return (
    <main className="App-main">
      <h1>Welcome to the Gym Tracker!</h1>
      <p>
        Your centralized place to track progress, view class schedules, and manage your fitness journey.
      </p>
      {/* Placeholder for future components like <WorkoutList /> or <ClassSchedule /> */}
      <section id="workouts">
        <h2>My Workouts</h2>
        <p>Start logging your first workout today!</p>
      </section>
    </main>
  );
}

// Main App component combining the Header and Content
function App() {
  return (
    <div className="App">
      <Header />
      <Content />
    </div>
  );
}

export default App;