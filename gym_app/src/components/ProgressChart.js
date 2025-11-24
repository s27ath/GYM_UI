import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend);

function ProgressChart() {
  const data = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "Workout Intensity",
        data: [3, 4, 2, 5, 6, 4, 7],
        borderColor: "blue",
        borderWidth: 2
      }
    ]
  };

  return (
    <div style={{ width: "60%", margin: "auto" }}>
      <h2>Weekly Progress Chart</h2>
      <Line data={data} />
    </div>
  );
}

export default ProgressChart;

