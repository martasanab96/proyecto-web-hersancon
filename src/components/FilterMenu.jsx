import React, { useState } from 'react';
import { data } from '../data';
import '../assets/FilterMenu.css';
import {Link } from 'react-router-dom';
import * as FaIcons from "react-icons/fa";
import * as AiIcons from 'react-icons/ai';
import { IconContext } from 'react-icons';


const FilterMenu = ({ onFilterChange }) => {

  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);

  const categories = ['Todo','Iluminacion', 'Sonido', 'Calefaccion', 'Persianas'];



  return (
    
    <IconContext.Provider value={{ color: '#fff' , size: '0.7em'  }}>
        <div className='navbar'>
          <Link to='#' className='menu-bars'>
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' onClick={showSidebar}>
            <li className='navbar-toggle'>
              <Link to='#' className='menu-bars'>
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {categories.map((category, index) => (
            <li key={index}>
              <span onClick={() => onFilterChange(category)}>{category}</span>
            </li>
          ))}
        </ul>
      </nav>
    </IconContext.Provider>


  );
};

export default FilterMenu;