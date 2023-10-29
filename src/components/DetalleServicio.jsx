import { data } from '../data';
import '../assets/DetalleProducto.css';
import { useParams } from 'react-router-dom';
import onAddProduct  from './ProductList';
import { Link } from 'react-router-dom';

const DetalleServicio =(
	props
) => {

	const {servicioId } = useParams();


	return(
        console.log("servicio")
    );
}

export default DetalleServicio