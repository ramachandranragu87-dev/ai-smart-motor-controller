import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginPage.css";

export default function LoginPage() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = () => {
    setError("");

    if (!username || !password) {
      setError("Please enter username and password.");
      return;
    }

    setLoading(true);

    setTimeout(() => {
      if (username === "admin" && password === "admin123") {
        navigate("/motor");
      } else {
        setLoading(false);
        setError("Invalid Username or Password");
      }
    }, 1500);
  };

  return (
    <div className="login-page">

      <div className="background-animation"></div>

      <div className="login-card">

        <div className="logo-circle">
          🤖
        </div>

        <h1>AI Smart Motor Controller</h1>

        <p className="subtitle">
          Intelligent Industrial Monitoring System
        </p>

        <div className="input-group">
          <label>Username</label>

          <input
            type="text"
            placeholder="Enter Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div className="input-group">

          <label>Password</label>

          <div className="password-box">

            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <button
              className="eye-btn"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "🙈" : "👁"}
            </button>

          </div>

        </div>

        <div className="options">

          <label>

            <input type="checkbox" />

            Remember Me

          </label>

          <span className="forgot">
            Forgot Password?
          </span>

        </div>

        {error && <p className="error">{error}</p>}

        <button
          className="login-btn"
          onClick={handleLogin}
          disabled={loading}
        >
          {loading ? "Connecting..." : "Login"}
        </button>

        <div className="footer">
          AI Powered Monitoring • Secure Access
        </div>

      </div>

    </div>
  );
}