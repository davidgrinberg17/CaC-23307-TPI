import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
//import { Login } from './Components/login';
import { Efectores } from './Components/efectores';
import { CrearEf } from './Components/crearef';
import { Equipos } from './Components/equipos';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Efectores/>}/>
        <Route path="/efectores" element={<Efectores/>}/>
        <Route path="/crearEf" element={<CrearEf/>}/>
        <Route path="/equipos/:nombrEf" element={<Equipos/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;