import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import { Activos } from "./components/activos/Activos";
import { Altas } from "./components/activos/Altas";
import { Bajas } from "./components/activos/Bajas";
import { Login } from "./components/auth/Login";
import { NuevaCuenta } from "./components/auth/NuevaCuenta";
import { Home } from "./components/Home/Home";
function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/nueva-cuenta" element={<NuevaCuenta />} />
        <Route path='/home' element={<Home />} />
        <Route path='/activos'>
          <Route index element={<Activos />}/>
          <Route path='altas' element={<Altas />}/>
          <Route path='bajas' element={<Bajas />}/>
        </Route>
      </Routes>
    </Router >
  );
}

export default App;
