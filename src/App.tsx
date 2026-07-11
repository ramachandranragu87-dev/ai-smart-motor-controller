import { BrowserRouter, Routes, Route } from "react-router-dom";

import LoginPage from "./pages/loginpage";
import MotorStatus from "./pages/motorstatus";
import SensorPage from "./pages/sensorpage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/motor" element={<MotorStatus />} />
        <Route path="/sensor" element={<SensorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;