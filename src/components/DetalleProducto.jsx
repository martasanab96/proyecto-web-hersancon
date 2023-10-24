import { data } from '../data';
import '../assets/DetalleProducto.css';
import { useParams } from 'react-router-dom';
import onAddProduct  from './ProductList';

const DetalleProducto =(
	props
) => {

	const {productId } = useParams();

	const allProducts = props.allProducts;
	const setAllProducts = props.setAllProducts;
	const total = props.total;
	const setTotal = props.setTotal;
	const countProducts = props.countProducts;
	const setCountProducts = props.setCountProducts;

	console.log("productos")
    console.log(props)

	const onAddProduct = product => {

		if (allProducts.find(item => item.id === product.id)) {
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
	

	return(

		<>

	<div className="card"></div>
	{data.filter(product => product.id == productId)
	.map(product => (
		
		<div className="cuerpo">
		<div className="container-title">{product.nameProduct}</div>
		<main>
		<div className="container-img">
			<figure className="img-container">
				<img src={product.img} className="img"/>
			</figure>
		</div>
		
		<div className="container-description">
					<div className="title-description">
						<h4>Descripción</h4>
						<i className="fa-solid fa-chevron-down"></i>
					</div>
					<div className="text-description">
						<p>{product.detail}</p>
					</div>

							
		<div className="container-info-product">
				<div className="container-price">
					<span>{product.price}€</span>
					<i className="fa-solid fa-angle-right"></i>
				</div>
		</div>
		</div>

		<div className="container-add-cart">
					<div className="container-quantity">
						<div className="btn-increment-decrement">
							<i className="fa-solid fa-chevron-up" id="increment"></i>
							<i className="fa-solid fa-chevron-down" id="decrement"></i>
						</div>
					</div>

					<button className='btn-add-to-cart' onClick={() => onAddProduct(product)}>
						<i className="fa-solid fa-plus"></i>
						Añadir al carrito
					</button>
		</div>

		</main>


		
		</div>
		
	))}
	</>
	);
}

export default DetalleProducto