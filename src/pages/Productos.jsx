import React from 'react'
import ProductList from '../components/ProductList';
import Dropdown from '../components/Dropdown';


const Productos = (
    props
) => {
    
    console.log("productos")
    console.log(props)

    return (

        <>
        <h1>Productos</h1>
        <Dropdown />
        <ProductList
				props = {props}
			/>
        </>
    )
}

export default Productos