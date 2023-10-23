
import Navbar from './components/Navbar';
import Servicios from './pages/Servicios';
import Productos from './pages/Productos';
import Contacto from './pages/Contacto';
import Inicio from './pages/Inicio';
import {useState} from 'react'
import {Route, Routes} from "react-router-dom"
import Footer from './components/Footer';
import "./assets/App.css";
import { useCookies } from 'react-cookie';

import Carrito from './components/Carrito';
import DetalleProducto from './components/DetalleProducto';

function App() {

  
  const [allProducts, setAllProducts] = useState([]);
  const [total, setTotal] = useState(0);
  const [countProducts, setCountProducts] = useState(0);
  const [countCitas, setCountCitas] = useState(0);
  const [allCitas, setAllCitas] = useState([]);

  return (
    <>
      <Navbar 

      allProducts={allProducts}
      setAllProducts={setAllProducts}
      total={total}
      setTotal={setTotal}
      countProducts={countProducts}
      setCountProducts={setCountProducts}
      allCitas = {allCitas}
      setAllCitas = {setAllCitas}
      countCitas = {countCitas}
      setCountCitas = {setCountCitas}

        />

      <div className='container'>  
        <Routes>
          <Route path ="/" element={<Inicio />} />
          <Route path ="/Inicio" element={<Inicio />} />
          <Route path ="/Servicios" element={<Servicios />} />
          <Route path ="/Productos/*" element={<Productos 
            allProducts={allProducts}
            setAllProducts={setAllProducts}
            total={total}
            setTotal={setTotal}
            countProducts={countProducts}
            setCountProducts={setCountProducts}
          
          />} />
          <Route path ="/Contacto" element={<Contacto />} />
          <Route path="/detalle_producto" element={<DetalleProducto />} />
        </Routes>
      </div>
	
      <Footer />
    </ >

  );
}

export default App;
