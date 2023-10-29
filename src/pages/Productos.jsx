import React from 'react'
import ProductList from '../components/ProductList';
import Dropdown from '../components/Dropdown';
import RangeSliderFilter from '../components/RangeSliderFilter';
import '../assets/ProductList.css';
import { useState } from 'react';
import FilterMenu from '../components/FilterMenu';


const Productos = (
    props
) => {

    const newFilter= props.newFilter;
    const setFilter=props.setFilter;
    
    const handleFilterChange = (newFilter) => {
		setFilter(newFilter);
	  };
    

    return (

        <>
        

        <div className="title-description-productos">
            <h4>PRODUCTOS</h4>
            <i className="fa-solid fa-chevron-down"></i>
        </div>

        <div className='filter-menu-container'>
        <FilterMenu onFilterChange={handleFilterChange} /></div>

        <div className="filtros">
        <RangeSliderFilter 
                props = {props}/>
        <Dropdown 
                props = {props}/>


        

        </div>
        <ProductList
				props = {props}
			/>
        </>
    )
}

export default Productos