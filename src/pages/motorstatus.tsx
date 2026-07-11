import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./motorstatus.css";

export default function MotorStatus() {
  const navigate = useNavigate();

  const [motorOn, setMotorOn] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleMotor = () => {
    if (!motorOn) {
      setMotorOn(true);
      setLoading(true);

      setTimeout(() => {
        navigate("/sensor");
      }, 2000);
    } else {
      setMotorOn(false);
    }
  };

  return (
    <div className="motor-page">

      <div className="background"></div>

      <div className="motor-card">

        <div className="logo">
          ⚙
        </div>

        <h1>AI Smart Motor Controller</h1>

        <p className="subtitle">
          Industrial Motor Monitoring Dashboard
        </p>

        <div className="status-box">

          <h3>Motor Status</h3>

          <div className={motorOn ? "indicator on" : "indicator off"}></div>

          <h2 className={motorOn ? "green" : "red"}>
            {motorOn ? "MOTOR RUNNING" : "MOTOR STOPPED"}
          </h2>

        </div>

        {loading && (

          <div className="loading-area">

            <div className="loader"></div>

            <p>Initializing Motor...</p>

            <span>Loading AI Monitoring System...</span>

          </div>

        )}

        <button
          className={motorOn ? "off-btn" : "on-btn"}
          onClick={handleMotor}
        >
          {motorOn ? "Turn OFF Motor" : "Turn ON Motor"}
        </button>

      </div>

    </div>
  );
}