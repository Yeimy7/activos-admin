import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import { Login } from "./components/auth/Login";
import { NuevaCuenta } from "./components/auth/NuevaCuenta";
import { Dashboard } from "./components/Dashboard/Dashboard";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/nueva-cuenta" element={<NuevaCuenta />} />
        <Route path='/dashboard' element={<Dashboard />} />

      </Routes>
    </Router>
  );
}

export default App;
