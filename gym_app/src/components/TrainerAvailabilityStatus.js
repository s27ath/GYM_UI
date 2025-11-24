import React, { useState } from "react";

function TrainerAvailabilityStatus() {
  const [isAvailable, setIsAvailable] = useState(true);

  const toggleStatus = () => {
    setIsAvailable(!isAvailable);
  };

  return (
    <div style={{ marginTop: "20px", marginBottom: "20px" }}>
      <h3>Trainer Availability</h3>

      <p>Status: <strong>{isAvailable ? "Available" : "Busy"}</strong></p>

      <button onClick={toggleStatus}>
        Switch to {isAvailable ? "Busy" : "Available"}
      </button>
    </div>
  );
}

export default TrainerAvailabilityStatus;
