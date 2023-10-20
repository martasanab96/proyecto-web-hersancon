import Navbar from './components/Navbar';
import Servicios from './pages/Servicios';
import Productos from './pages/Productos';
import Contacto from './pages/Contacto';
import Inicio from './pages/Inicio';
import {Route, Routes} from "react-router-dom"

function App() {
  
  return (
    <>
      <Navbar />
      <div className='container'>  
        <Routes>
          <Route path ="/" element={<Inicio />} />
          <Route path ="/Inicio" element={<Inicio />} />
          <Route path ="/Servicios" element={<Servicios />} />
          <Route path ="/Productos" element={<Productos />} />
          <Route path ="/Contacto" element={<Contacto />} />
        </Routes>
      </div>
    </ >
  );
}

export default App;
