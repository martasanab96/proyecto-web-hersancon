import { data } from '../data_servicios';
import '../assets/ServicioList.css';
import {Link } from 'react-router-dom';

export const ServicioList = ({
	props
}) => {

	const sortMethods = {
		none: { method: (a, b) => null },
		ascending: { method: (a, b) => a - b },
		descending: { method: (a, b) => b - a },
	  };

	const sortState = props.sortDir;
	const price = props.value; 
	const allCitas = props.allCitas;
	const setAllCitas = props.setAllCitas;
    const total = props.total;
	const setTotal = props.setTotal;
	const countCitas = props.countCitas;
	const setCountCitas = props.setCountCitas;

		

	const onAddCitas = servicio => {

		if (allCitas.find(item => item.id === servicio.id)) {
			const servicios = allCitas.map(item =>
				item.id === servicio.id
					? { ...item, quantity: item.quantity + 1 }
					: item
			);
            setTotal(total + servicio.price * servicio.quantity)			
			setCountCitas(countCitas + servicio.quantity)			
			return setAllCitas([...servicios])
		}

		setTotal(total + (servicio.price * servicio.quantity))
		setCountCitas(countCitas + servicio.quantity)
		setAllCitas([...countCitas, servicio])
		
	};

	//const history = useHistory();
	//const handleClick = () => history.push ('/product_detail'); //Redirección

	return (
		<div className='container-items'>
			{data.map(servicio => (
				<div className='item' key={servicio.id}>
					<figure>
						<img src={servicio.img} alt={servicio.nameProduct} />
					</figure>
					<div className='info-servicio'>
						<h2>{servicio.nameProduct}</h2>
                        
                        <p className='price'>Desde {servicio.price}€</p>

                        <div className='cart-buttons'>

                            <Link to={`/PedirPresupuesto`} className="link-style">
                                <button className='btn-presupesto-product'>
                                    Pedir presupuesto
                                </button>
                            </Link>
							
							<Link to={`/detalle_servicio/${servicio.id}`} className="link-style">
								<button className='btn-detail-servicio'>
									Ir al detalle del servicio
								</button>
							</Link>
						</div>

					</div>
				</div>
			))}
		</div>
	);
};

export default ServicioList