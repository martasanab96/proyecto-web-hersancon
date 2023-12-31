import { data_servicios } from '../data_servicios';
import '../assets/Detalles.css';
import { useParams } from 'react-router-dom';
import onAddProduct  from './ProductList';
import { Link } from 'react-router-dom';
import { data } from '../data';

const DetalleServicio =(
	props
) => {

	const {servicioId } = useParams();
	const allProducts = props.allProducts;
	const setAllProducts = props.setAllProducts;
	const total = props.total;
	const setTotal = props.setTotal;
	const countProducts = props.countProducts;
	const setCountProducts = props.setCountProducts;
	const data_total = data.concat(data_servicios);

	const mediaRating = product => {

		const producto = data_servicios.find(item => item.id === product.id);


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



	  const backServicios = () => {
		console.log("Volviendo a home...")

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
	

	return(

		<>

	<div className="card"></div>
	{data_servicios.filter(product => product.id == servicioId)
	.map(product => (
		
		<div className="cuerpo">
		<Link to={'/Servicios'}>
			<span className="back_home" onClick={backServicios}>Volver a servicios</span>
		</Link>
		
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
					<span>Desde {product.price}€</span>
					<i className="fa-solid fa-angle-right"></i>
				</div>
		</div>
		</div>

		<div className="container-add-cart">

					<Link to={`/PedirPresupuesto`} >
                                <button className='btn-presupuesto'>
								<i className="fa-solid fa-plus"></i>
                                    Pedir presupuesto
                                </button>
                            </Link>
		</div>

		</main>

		<div className="review-body">
				<div className="review-header">Recomendaciones</div>
		</div>

			<div class="reviewrating">Otros servicios y productos parecidos</div>

			<div className="review-dynamic-container">
				{console.log("recomendaciones")}
				{console.log(product.recomendaciones)}

				{product.recomendaciones && product.recomendaciones.length > 0 && (product.recomendaciones.map(recomendacionId => (
					data_total.filter(item => item.id === recomendacionId.id)
					.map(recomendacion  => (
						<div className="review-dynamic">
							<div className="review-scoller pad_backward">
								<div className="review-detail">


								{recomendacion.id >100 ? (
										<Link to={`/detalle_servicio/${recomendacion.id}`}>
											<div className="recomendacion-img"/> <img src={recomendacion.img} className="recomendacion-img"/>
											<div className="recomendacion-name">{recomendacion.nameProduct}</div>
										</Link>
									) : (
										<Link to={`/detalle_producto/${recomendacion.id}`}>
											<div className="recomendacion-img"/> <img src={recomendacion.img} className="recomendacion-img"/>
											<div className="recomendacion-name">{recomendacion.nameProduct}</div>
										</Link>
									)}
								
								</div>
							</div>
						</div>

							)))))}

		
			</div>

		
			<div className="review-body">
				<div className="review-header">Reseñas</div>
				<div className='review-stars'> 
					{renderStarRating(mediaRating(product))} {/* Llama a una función para generar las estrellas */}
				</div>
			</div>

			<div class="reviewrating">a base de <strong>{product.reseñas.length} evaluaciones</strong></div>

			<div className="review-dynamic-container">

				{product.reseñas.map(reseña => (

					<div className="review-dynamic">
						<div className="review-scoller pad_backward">
							<div className="review-detail">
								<div className="review-avatar">
									<img src={reseña.img} alt={reseña.user} className="review-img"/>
										<div className="review-name">{reseña.user}</div>
								</div>
								<div className="review-rating">
									{renderStarRating(reseña.rating)} {/* Llama a una función para generar las estrellas */}
								</div>
								<div className="review-text">{reseña.comment}</div>
							</div>
						</div>
					</div>

							))}

		
			</div>

			
		</div>

		
		
	))}
	</>
	);
}

export default DetalleServicio

