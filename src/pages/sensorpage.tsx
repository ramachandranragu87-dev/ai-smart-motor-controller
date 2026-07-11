import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SensorPage.css";

export default function SensorPage() {

  const navigate = useNavigate();

  const [sensor, setSensor] = useState({
    temperature: 31,
    humidity: 62,
    voltage: 229,
    current: 4.8,
    water: 84,
    soil: 52,
    rpm: 1450,
    health: 98,
  });

  const refreshData = () => {

    setSensor({
      temperature: Math.floor(Math.random() * 8 + 28),
      humidity: Math.floor(Math.random() * 20 + 55),
      voltage: Math.floor(Math.random() * 10 + 225),
      current: Number((Math.random() * 2 + 4).toFixed(1)),
      water: Math.floor(Math.random() * 30 + 70),
      soil: Math.floor(Math.random() * 40 + 40),
      rpm: Math.floor(Math.random() * 100 + 1400),
      health: Math.floor(Math.random() * 5 + 95),
    });
  };

  return (

    <div className="sensor-page">

      <header>

        <h1>AI Smart Motor Controller</h1>

        <div className="online">
          ● Connected
        </div>

      </header>

      <div className="dashboard">

        <div className="card">
          <h3>🌡 Temperature</h3>
          <h2>{sensor.temperature} °C</h2>
        </div>

        <div className="card">
          <h3>💧 Humidity</h3>
          <h2>{sensor.humidity} %</h2>
        </div>

        <div className="card">
          <h3>⚡ Voltage</h3>
          <h2>{sensor.voltage} V</h2>
        </div>

        <div className="card">
          <h3>🔋 Current</h3>
          <h2>{sensor.current} A</h2>
        </div>

        <div className="card">
          <h3>🚰 Water Level</h3>
          <h2>{sensor.water} %</h2>
        </div>

        <div className="card">
          <h3>🌱 Soil Moisture</h3>
          <h2>{sensor.soil} %</h2>
        </div>

        <div className="card">
          <h3>⚙ Motor Speed</h3>
          <h2>{sensor.rpm} RPM</h2>
        </div>

        <div className="card ai">

          <h3>🤖 AI Motor Health</h3>

          <h1>{sensor.health}%</h1>

          <p>
            Prediction : Motor is Healthy
          </p>

        </div>

      </div>

      <div className="buttons">

        <button
          className="refresh"
          onClick={refreshData}
        >
          Refresh Sensor Data
        </button>

        <button
          className="chat"
          onClick={() => navigate("/chat")}
        >
          AI Assistant
        </button>

      </div>

    </div>

  );

}