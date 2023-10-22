import logo from './images/logo.svg';
import './assets/App.css';
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
    <div className="App">
    
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
    </div>
  );
}

export default App;
