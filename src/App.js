import Navbar from './components/Navbar';
import Servicios from './pages/Servicios';
import Productos from './pages/Productos';
import Contacto from './pages/Contacto';
import Inicio from './pages/Inicio';
import {Route, Routes} from "react-router-dom"
import Footer from './components/Footer';
import "./assets/App.css"
import Carrito from './components/Carrito';
import Citas from './components/Citas';
import ProductList from './components/ProductList';
import {useState} from 'react'


function App() {

	const [allProducts, setAllProducts] = useState([]);
	const [total, setTotal] = useState(0);
	const [countProducts, setCountProducts] = useState(0);
	const [countCitas, setCountCitas] = useState(0);
	const [allCitas, setAllCitas] = useState([]);
  
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

	  <Carrito
				allProducts={allProducts}
				setAllProducts={setAllProducts}
				total={total}
				setTotal={setTotal}
				countProducts={countProducts}
				setCountProducts={setCountProducts}
			/>
			<Citas
				allCitas={allCitas}
				setAllCitas={setAllCitas}
				countCitas={countCitas}
				setCountCitas={setCountCitas}
			/>
			<ProductList
				allProducts={allProducts}
				setAllProducts={setAllProducts}
				total={total}
				setTotal={setTotal}
				countProducts={countProducts}
				setCountProducts={setCountProducts}
			/>
      <Footer />
    </ >

  );
}

export default App;
