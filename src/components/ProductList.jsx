import { data } from '../data';
import '../assets/ProductList.css';
import { useHistory } from 'react-router-dom';

export const ProductList = ({
	allProducts,
	setAllProducts,
	countProducts,
	setCountProducts,
	total,
	setTotal,
}) => {
	const onAddProduct = product => {
		if (allProducts.find(item => item.id === product.id)) {
			const products = allProducts.map(item =>
				item.id === product.id
					? { ...item, quantity: item.quantity + 1 }
					: item
			);
			setTotal(total + product.price * product.quantity);
			setCountProducts(countProducts + product.quantity);
			return setAllProducts([...products]);
		}

		setTotal(total + product.price * product.quantity);
		setCountProducts(countProducts + product.quantity);
		setAllProducts([...allProducts, product]);
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