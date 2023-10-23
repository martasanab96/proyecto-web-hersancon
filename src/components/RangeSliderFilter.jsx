import '../assets/ProductList.css';
import React, { useCallback, useEffect, useState, useRef } from "react";
import PropTypes from "prop-types";
import Slider from 'react-slider';

const RangeSliderFilter =({props}) => {
    const values = props.value;
    const setvalue = props.setvalue;
    const handleChange = (newvalue) => setvalue(newvalue);

    console.log(props)
    return (
            

        <div className="slider_1">
          <label className="order_label_2">Rango de precios: </label>

          <div className="labels">
            <label htmlFor="min-input">Min: </label>
            <input 
                type="number"
                className="minPrice"
                id="minPrice"
                value={values[0]}
                onChange={(e) => handleChange([+e.target.value, values[1]])}
              />
            
            <label className="max-input" htmlFor="max-input">Max: </label>
            <input
                type="number"
                id="maxPrice"
                className="maxPrice"
                value={values[1]}
                onChange={(e) => handleChange([values[0], +e.target.value])}
              />
          
        </div>
          

          <div style={{ display: 'flex', justifyContent: 'space-between' }}>

          <Slider
            className="slider"
            value={values}
            onChange={handleChange}
            min={0}
            max={props.value[1]}
          />

            
          </div>
        </div>
      );
}
        
export default RangeSliderFilter