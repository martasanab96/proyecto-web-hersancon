import React from 'react'
import '../assets/Navbar.css';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

function Navbar() {
    
    return (
        <nav className="nav">
            <Link to="/" className="site-title">
                Hersancon
            </Link>
            <ul>
            <CustomLink to="/Inicio">Inicio</CustomLink>
                <CustomLink to="/Productos">Productos</CustomLink>
                <CustomLink to="/Servicios">Servicios</CustomLink>
                <CustomLink to="/Contacto">Contacto</CustomLink>
            </ul>
        </nav>
    )
}

export default Navbar;


function CustomLink({ to, children, ...props }) {
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