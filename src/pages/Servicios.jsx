import React from 'react'
import Dropdown from '../components/Dropdown';
import RangeSliderFilter from '../components/RangeSliderFilter';
import '../assets/ServicioList.css';
import ServicioList from '../components/ServicioList';

const Servicios = (
    props
) => {
    
    

    return (

        <>
        <div className="title-description-servicios">
            <h4>SERVICIOS</h4>
            <i className="fa-solid fa-chevron-down"></i>
        </div>

        <ServicioList
				props = {props}
			/>
        

        
        </>
    )
}

export default Servicios