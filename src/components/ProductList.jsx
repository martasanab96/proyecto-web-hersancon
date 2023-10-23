import { data } from '../data';
import '../assets/ProductList.css';
import { useHistory } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import { useLocation } from 'react-router-dom'
import {useState, useEffect} from 'react'



export const ProductList = ({
	props
}) => {

	//const location = useLocation()
/*	
	useEffect(() => {
		setTotal(cookies.total)
		setCountProducts(cookies.countProducts)
		setAllProducts(cookies.allProducts)

		

	  }, [location.state]);
*/

	const onAddProduct = product => {

		console.log(props);

		const allProducts = props.allProducts;
		const setAllProducts = props.setAllProducts;
		const total = props.total;
		const setTotal = props.setTotal;
		const countProducts = props.countProducts;
		const setCountProducts = props.setCountProducts;

		if (allProducts.find(item => item.id === product.id)) {
			console.log("entroal if")
			const products = allProducts.map(item =>
				item.id === product.id
					? { ...item, quantity: item.quantity + 1 }
					: item
			);
			setTotal(total + product.price * product.quantity)			
			setCountProducts(countProducts + product.quantity)			
			return setAllProducts([...products])
		}



		setTotal(total + (product.price * product.quantity))
		setCountProducts(countProducts + product.quantity)
		setAllProducts([...allProducts, product])
		
	};

	//const history = useHistory();
	//const handleClick = () => history.push ('/product_detail'); //Redirección

	return (
		<div className='container-items'>
			{data.map(product => (
				<div className='item' key={product.id}>
					<figure>
						<img src={product.img} alt={product.nameProduct} />
					</figure>
					<div className='info-product'>
						<h2>{product.nameProduct}</h2>
						<p className='price'>{product.price}€</p>
						
						<div className='cart-buttons'>

							<button className='btn-add-product' onClick={() => onAddProduct(product)}>
								Añadir al carrito
							</button>

							<button className='btn-detail-product'>
								Ir al detalle del producto
							</button>
						</div>

					</div>
				</div>
			))}
		</div>
	);
};

export default ProductList