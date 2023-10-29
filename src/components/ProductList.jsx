import { data } from '../data';
import '../assets/ProductList.css';
import {Link } from 'react-router-dom';
import React, { useState } from 'react';
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/fa";


export const ProductList = ({
	props
}) => {

	const calculateAverageRating = (product) => {
		if (product.reseñas && product.reseñas.length > 0) {
			const totalRatings = product.reseñas.reduce((sum, review) => sum + review.rating, 0);
			return totalRatings / product.reseñas.length;
		  } else {
			return 0; // Si no hay reseñas, el promedio es 0
		  }
		};
	

	const sortMethods = {
		none: { method: (a, b) => null },
		mejor_valorados: {method: (a, b) => calculateAverageRating(b) - calculateAverageRating(a)},
		ascending: { method: (a, b) => a.price - b.price },
		descending: { method: (a, b) => b.price - a.price },
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
		
	const mediaRating = product => {

		const producto = data.find(item => item.id === product.id);

		if (!producto ){
			return 0;
		  }
		
		  const totalRating = producto.reseñas.reduce((accumulator, review) => accumulator + review.rating, 0);
		
		  const averageRating = totalRating / producto.reseñas.length;

		
		  return averageRating;
	}

	function renderStarRating(rating) {
		const stars = [];
		for (let i = 1; i <= 5; i++) {
		  if (i <= rating) {
			stars.push(<span key={i} className="star">&#9733;</span>); // Estrella rellena
		  } else {
			stars.push(<span key={i} className="star">&#9734;</span>); // Estrella vacía
		  }
		}
		return stars;
	  }

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
				if (filter === 'Ofertas'){
					return product.oferta !== undefined;
				}
				return product.tipo === filter;
			})
			
			.sort((a,b) => sortMethods[sortState].method(a, b))
			.filter(product => product.price >= price[0] && product.price <= price[1])
			.map(product => (
				<div className='item' key={product.id}>
					<figure>
						<img src={product.img} alt={product.nameProduct} />
					</figure>
					<div className='info-product'>
						<h2>{product.nameProduct}</h2>
						<div className='review-stars'> 
						{renderStarRating(mediaRating(product))} {/* Llama a una función para generar las estrellas */}
					</div>
						<p className='price'>
						{product.oferta ? (
							<>
							<span className='original-price'>{product.price}€</span>
							<span className='discounted-price'>{product.oferta}€</span>
							</>
						) : (
							`${product.price}€`
						)}
						</p>
													
						<div className='cart-buttons'>

							<button className='btn-add-product' onClick={() => onAddProduct(product)}>
								Añadir al carrito
							</button>
							
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