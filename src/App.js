
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
import { data } from './data';
import Carrito from './components/Carrito';
import DetalleProducto from './components/DetalleProducto';
import DetalleServicio from './components/DetalleServicio';
import PedirPresupuesto from './pages/PedirPresupuesto';

function App() {

  
  const [allProducts, setAllProducts] = useState([]);
  const [total, setTotal] = useState(0);
  const [countProducts, setCountProducts] = useState(0);
  const [countCitas, setCountCitas] = useState(0);
  const [allCitas, setAllCitas] = useState([]);
  const [sortDir, setSortDir] = useState("none");
  const [filter, setFilter] = useState('all');


  const maxPrice = data.reduce((accumulator, current) => Math.max(current.price, accumulator),0);


  console.log("El máximo valor es:", maxPrice);

  const [value, setValue] = useState([0, maxPrice]);


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
