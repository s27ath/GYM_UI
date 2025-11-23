import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer
} from "recharts";

// Dummy data for last 7 days (replace with real workout logs later)
const sampleData = [
  { day: "Mon", progress: 3 },
  { day: "Tue", progress: 4 },
  { day: "Wed", progress: 2 },
  { day: "Thu", progress: 5 },
  { day: "Fri", progress: 6 },
  { day: "Sat", progress: 4 },
  { day: "Sun", progress: 7 }
];

function ProgressChart({ data = sampleData }) {
  return (
    <div style={{ width: "100%", height: 250, marginTop: "20px" }}>
      <h3>Weekly Progress</h3>

      <ResponsiveContainer>
        <LineChart data={data}>
          <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
          <XAxis dataKey="day" />
          <YAxis />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="progress"
            stroke="#0077ff"
            strokeWidth={2}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default ProgressChart;
