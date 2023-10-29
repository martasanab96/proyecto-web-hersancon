import React from 'react'
import Dropdown from '../components/Dropdown';
import RangeSliderFilter from '../components/RangeSliderFilter';
import '../assets/ServicioList.css';
import ServicioList from '../components/ServicioList';
import FilterMenu from '../components/FilterMenu';

const Servicios = (
    props
) => {
    
    const newFilter= props.newFilter;
    const setFilter=props.setFilter;
    
    const handleFilterChange = (newFilter) => {
		setFilter(newFilter);
	  };
    
    

    return (

        <>

        <div className='container_productos'>
        <h1 className="title-description-productos">SERVICIOS</h1>

        <div className='filter-menu-container'>
        <FilterMenu onFilterChange={handleFilterChange} /></div>

        <div className="contenido-productos">

            <div className="filtros">
            <RangeSliderFilter 
                    props = {props}/>
            <Dropdown 
                    props = {props}/>

            </div>
            <ServicioList
                    props = {props}
                />
        </div></div>
        
        </>
    )
}

export default Servicios