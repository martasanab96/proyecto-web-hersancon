import React from 'react'
import '../assets/Navbar.css';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';
import Logo from "../images/Logo.png"
import Carrito from '../components/Carrito';
import Citas from '../components/Citas';
import SearchBar from '../components/SearchBar';

const Navbar = ({
    allProducts,
    setAllProducts,
    total,
    countProducts,
    setCountProducts,
    setTotal,
    allCitas,
    setAllCitas,
    countCitas,
    setCountCitas,
}) => {
    
    console.log(allProducts)
    return (
        <nav className="nav">
            <Link to="/" className='logo-link'>
                <img src={Logo} alt="logo_hersancon" className='logo'/> 
            </Link>
            <ul>
                <CustomLink to="/Inicio">Inicio</CustomLink>
                <CustomLink to="/Productos">Productos</CustomLink>
                <CustomLink to="/Servicios">Servicios</CustomLink>
                <CustomLink to="/Contacto">Contacto</CustomLink>
            </ul>

            <SearchBar />
            
            <Carrito
              allProducts={allProducts}
              setAllProducts={setAllProducts}
              total={total}
              setTotal={setTotal}
              countProducts={countProducts}
              setCountProducts={setCountProducts}
            />


            
            <Citas
              allCitas={allCitas}
              setAllCitas={setAllCitas}
              countCitas={countCitas}
              setCountCitas={setCountCitas}
            />
        </nav>
    )
}

export default Navbar;


function CustomLink({ to, children, ...props}) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })


  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  )
}