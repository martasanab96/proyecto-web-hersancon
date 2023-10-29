import { data_servicios } from '../data_servicios';
import '../assets/ServicioList.css';
import {Link, useNavigate } from 'react-router-dom';

export const ServicioList = ({
	props
}) => {

	const calculateAverageRating = (servicio) => {
		if (servicio.reseñas && servicio.reseñas.length > 0) {
			const totalRatings = servicio.reseñas.reduce((sum, review) => sum + review.rating, 0);
			return totalRatings / servicio.reseñas.length;
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

	console.log("data")
	console.log(data_servicios);
	const sortState = props.sortDir;
	const price = props.value; 
	const allCitas = props.allCitas;
	const setAllCitas = props.setAllCitas;
    const total = props.total;
	const setTotal = props.setTotal;
	const countCitas = props.countCitas;
	const setCountCitas = props.setCountCitas;
	const filter = props.filter;
	const setFilter=props.setFilter;

	const navigate = useNavigate();
		
	const mediaRating = service => {

		const servicio = data_servicios.find(item => item.id === service.id);

		if (!servicio ){
			return 0;
		  }
		
		  const totalRating = servicio.reseñas.reduce((accumulator, review) => accumulator + review.rating, 0);
		
		  const averageRating = totalRating / servicio.reseñas.length;

		
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

	

	//const history = useHistory();
	//const handleClick = () => history.push ('/product_detail'); //Redirección

	return (
		<div className="body">
		<div className='container-items'>
			{data_servicios.filter((service) => {
				if (filter === 'Todo') {
					return true;
				}
				if (filter === 'Ofertas'){
					return service.oferta !== undefined;
				}
				return service.tipo === filter;
			})
			
			.sort((a,b) => sortMethods[sortState].method(a, b))
			.filter(service => service.price >= price[0] && service.price <= price[1])
			.map(service => (
				<div className='item' key={service.id}>
					<figure>
						<img src={service.img} alt={service.nameProduct} />
					</figure>
					<div className='info-product'>
						<h2>{service.nameProduct}</h2>
						<div className='review-stars'> 
						{renderStarRating(mediaRating(service))} {/* Llama a una función para generar las estrellas */}
					</div>
						<p className='price'>
						{service.oferta ? (
							<>
							<span className='original-price'>Desde {service.price}€</span>
							<span className='discounted-price'>Desde {service.oferta}€</span>
							</>
						) : (
							`Desde ${service.price}€`
						)}
						</p>
													
						<div className='cart-buttons'>

                            <Link to={`/PedirPresupuesto`} className="link-style">
                                <button className='btn-presupesto-product'>
                                    Pedir presupuesto
                                </button>
                            </Link>
							
							<Link to={`/detalle_servicio/${service.id}`} className="link-style">
								<button className='btn-detail-servicio'>
									Ir al detalle del servicio
								</button>
							</Link>
						</div>

					</div>
				</div>
			))}
		</div></div>

	);
};

export default ServicioList