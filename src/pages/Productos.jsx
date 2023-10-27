import React from 'react'
import ProductList from '../components/ProductList';
import Dropdown from '../components/Dropdown';
import RangeSliderFilter from '../components/RangeSliderFilter';


const Productos = (
    props
) => {
    
    

    return (

        <>
        <h1>Productos</h1>

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