import React from 'react'
import '../assets/Contacto.css';
import { FaEnvelope, FaPhone, FaFax, FaMobile } from "react-icons/fa";

function Contacto() {
    
    return (
        <div>
            <h1 className='sobre-nosotros'>SOBRE NOSOTROS</h1>

            <div className='col-izq'>
                Somos una empresa familiar con una amplia experiencia de más de 60 años en las distintas actividades que desempeñamos.
                <br></br><br></br>
                Estamos ubicados en Las Navas del Marqués, en la frontera entre las provincias de Ávila y Madrid. Nuestra área de trabajo principal abarca Madrid y Castilla y León, aunque hemos llevado a cabo proyectos en toda España.
                <br></br><br></br>
                Nuestra principal prioridad es brindar un excelente servicio al cliente y asegurar su satisfacción. Estamos comprometidos en ofrecer calidad y profesionalidad en cada proyecto que realizamos.
            </div>

            <div className='col-der'>
                <FaMobile/> &nbsp; 608 925 144 / 670 791 908 <br /><br /> 
                <FaEnvelope/> &nbsp; info@hersancon.com <br /><br />
                <FaPhone/> &nbsp; 91 897 07 77 / 91 897 23 23 <br /> <br />
                <FaFax/> &nbsp; 91 897 23 23
            </div>

        </div>
    )
}

export default Contacto