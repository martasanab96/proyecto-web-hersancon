
import Navbar from './components/Navbar';
import Servicios from './pages/Servicios';
import Productos from './pages/Productos';
import Contacto from './pages/Contacto';
import Inicio from './pages/Inicio';
import Login from './pages/Login';
import Registro from './pages/Registro';
import React, {useState, useEffect} from 'react'
import {Route, Routes} from "react-router-dom"
import Footer from './components/Footer';
import "./assets/App.css";
import { useCookies } from 'react-cookie';
import { data } from './data';
import { data_servicios } from './data_servicios';

import Carrito from './components/Carrito';
import DetalleProducto from './components/DetalleProducto';
import Axios from 'axios'; // Importa Axios para hacer solicitudes HTTP
import DetalleServicio from './components/DetalleServicio';
import PedirPresupuesto from './pages/PedirPresupuesto';

function App() {

  
  const [allProducts, setAllProducts] = useState([]);
  const [total, setTotal] = useState(0);
  const [countProducts, setCountProducts] = useState(0);
  const [countCitas, setCountCitas] = useState(0);
  const [allCitas, setAllCitas] = useState([]);
  const [sortDir, setSortDir] = useState("none");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [filter, setFilter] = useState('Todo');

  const data_total = data.concat(data_servicios);

  const maxPrice = data_total.reduce((accumulator, current) => Math.max(current.price, accumulator),0);

  const [value, setValue] = useState([0, maxPrice]);

  // Lógica para verificar la autenticación al cargar la página
  useEffect(() => {
    Axios.get('http://localhost:3001/api/verificar-autenticacion')
      .then((response) => {
        // Si el servidor responde con éxito, el usuario está autenticado
        setIsAuthenticated(true);
      })
      .catch((error) => {
        // Si hay un error o el servidor responde con error, el usuario no está autenticado
        setIsAuthenticated(false);
      });
  }, []);

    // Lógica para cerrar la sesión
  const logout = () => {
    Axios.get('http://localhost:3001/api/cerrar-sesion')
      .then((response) => {
        // Si el servidor responde con éxito, el usuario está desautenticado
        setIsAuthenticated(false);
      })
      .catch((error) => {
        // Manejar errores si es necesario
      });
  };



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
      isAuthenticated={isAuthenticated}
      setIsAuthenticated={setIsAuthenticated}
      logout={logout}
        />

      <div className='container'>  
        <Routes>
          <Route path ="/" element={<Inicio />} />
          <Route path ="/Inicio" element={<Inicio />} />
          <Route path ="/PedirPresupuesto" element={<PedirPresupuesto />} />
          <Route path ="/Servicios" element={<Servicios 
            allCitas={allCitas}
            setAllCitas={setAllCitas}
            total={total}
            setTotal={setTotal}
            countCitas={countCitas}
            setCountCitas={setCountCitas}
            sortDir={sortDir}
            setSortDir={setSortDir}
            value={value}
            setvalue={setValue}
            filter={filter}
            setFilter={setFilter}

          />} />
          <Route path ="/Productos/*" element={<Productos 
            allProducts={allProducts}
            setAllProducts={setAllProducts}
            total={total}
            setTotal={setTotal}
            countProducts={countProducts}
            setCountProducts={setCountProducts}
            sortDir={sortDir}
            setSortDir={setSortDir}
            value={value}
            setvalue={setValue}
            filter={filter}
            setFilter={setFilter}
            setIsAuthenticated={setIsAuthenticated}
            isAuthenticated={isAuthenticated}
          />} />
          <Route path ="/Contacto" element={<Contacto />} />
          <Route path="/detalle_producto/:productId" element={<DetalleProducto 
          
            allProducts={allProducts}
            setAllProducts={setAllProducts}
            total={total}
            setTotal={setTotal}
            countProducts={countProducts}
            setCountProducts={setCountProducts}
            sortDir={sortDir}
            setSortDir={setSortDir}
            value={value}
            setvalue={setValue}
            setIsAuthenticated={setIsAuthenticated}
            isAuthenticated={isAuthenticated}
          />} />

          <Route path ="/Registro" element={<Registro 
            setIsAuthenticated={setIsAuthenticated}
            isAuthenticated={isAuthenticated}
          />} />
          <Route path ="/Login" element={<Login 
            setIsAuthenticated={setIsAuthenticated}
            isAuthenticated={isAuthenticated}
          />} />
          
          <Route path="/detalle_servicio/:servicioId" element={<DetalleServicio 
          
          allCitas={allCitas}
            setAllCitas={setAllCitas}
            countCitas={countCitas}
            total={total}
            setTotal={setTotal}
            setCountCitas={setCountCitas}
            sortDir={sortDir}
            setSortDir={setSortDir}
            value={value}
            setvalue={setValue}

        />} />

        </Routes>
      </div>
	
      <Footer />
    </ >

  );
}

export default App;
