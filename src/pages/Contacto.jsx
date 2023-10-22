import React from 'react'
import '../assets/Contacto.css';
import { FaEnvelope, FaPhone, FaFax, FaMobile } from "react-icons/fa";

function Contacto() {
    
    return (
        <div>
            <h1 className='sobre-nosotros'>SOBRE NOSOTROS</h1>

            <div className='col-izq'>Texto de la columna (lado izquierdo)</div>

            <div className='col-der'><br /><br />
                <FaMobile/> &nbsp; 608 925 144 / 670 791 908 <br /><br /> 
                <FaEnvelope/> &nbsp; info@hersancon.com <br /><br />
                <FaPhone/> &nbsp; 91 897 07 77 / 91 897 23 23 <br /> <br />
                <FaFax/> &nbsp; 91 897 23 23
            </div>

        </div>
    )
}

export default Contacto