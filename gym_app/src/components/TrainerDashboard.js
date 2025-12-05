import React, { useState } from "react";
import "./TrainerDashboard.css";

const mockClients = [
  { id: 1, name: "Rohit", status: "Active Today" },
  { id: 2, name: "Meera", status: "Inactive" },
  { id: 3, name: "Jason", status: "Needs Review" },
  { id: 4, name: "Anika", status: "Active Today" },
  { id: 5, name: "Sam", status: "Inactive" }
];

function TrainerDashboard() {
  const [filter, setFilter] = useState("All");

  const filteredClients =
    filter === "All"
      ? mockClients
      : mockClients.filter((client) => client.status === filter);

  return (
    <div className="trainer-dashboard">
      <h2>Trainer Dashboard</h2>
      <p>Filter your clients based on their activity status.</p>

      {/* FILTER BUTTONS */}
      <div className="filter-buttons">
        <button onClick={() => setFilter("All")}>All</button>
        <button onClick={() => setFilter("Active Today")}>Active Today</button>
        <button onClick={() => setFilter("Inactive")}>Inactive</button>
        <button onClick={() => setFilter("Needs Review")}>Needs Review</button>
      </div>

      {/* CLIENT LIST */}
      <div className="client-list">
        {filteredClients.map((client) => (
          <div key={client.id} className="client-card">
            <h3>{client.name}</h3>
            <span className={`status ${client.status.replace(" ", "-")}`}>
              {client.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TrainerDashboard;
