import { data } from '../data';
import '../assets/ProductList.css';
import {Link, useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/fa";


export const ProductList = ({
	props
}) => {

	const sortMethods = {
		none: { method: (a, b) => null },
		ascending: { method: (a, b) => a - b },
		descending: { method: (a, b) => b - a },
	  };

	const sortState = props.sortDir;
	const price = props.value; 
	const allProducts = props.allProducts;
	const setAllProducts = props.setAllProducts;
	const total = props.total;
	const setTotal = props.setTotal;
	const countProducts = props.countProducts;
	const setCountProducts = props.setCountProducts;
	const filter = props.filter;
	const setFilter=props.setFilter;
	const isAuthenticated = props.isAuthenticated;
	const setIsAuthenticated = props.setIsAuthenticated;

	const navigate = useNavigate();

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

	//const history = useHistory();
	//const handleClick = () => history.push ('/product_detail'); //Redirección

	return (
		<div className="body">
		<div className='container-items'>
			{data.filter((product) => {
				if (filter === 'Todo') {
				return true;
				}
				return product.tipo === filter;
			})
			
			.sort((a,b) => sortMethods[sortState].method(a.price, b.price))
			.filter(product => product.price >= price[0] && product.price <= price[1])
			.map(product => (
				<div className='item' key={product.id}>
					<figure>
						<img src={product.img} alt={product.nameProduct} />
					</figure>
					<div className='info-product'>
						<h2>{product.nameProduct}</h2>
						<p className='price'>{product.price}€</p>
						
						<div className='cart-buttons'>

							{isAuthenticated ? (
								<button className='btn-add-product' onClick={() => onAddProduct(product)}>
									Añadir al carrito
								</button>
							) : (
								<button className='btn-add-product' onClick={() => { navigate('/Login'); window.alert("Debes iniciar sesión para comprar productos online.")}}>
									Añadir al carrito
								</button>
							)}
							
							<Link to={`/detalle_producto/${product.id}`} className="link-style">
								<button className='btn-detail-product'>
									Ir al detalle del producto
								</button>
							</Link>
						</div>

					</div>
				</div>
			))}
		</div></div>
	);
};

export default ProductList