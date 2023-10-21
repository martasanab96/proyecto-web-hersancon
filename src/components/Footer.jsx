import React from 'react'
import '../assets/Footer.css';
import { FaEnvelope, FaPhone, FaFax, FaMobile } from "react-icons/fa";

function Footer() {
    
    return (
        <footer className='footer'>
            <FaMobile/> &nbsp; 608 925 144 / 670 791 908 &emsp; 
            <FaEnvelope/> &nbsp; info@hersancon.com &emsp; 
            <FaPhone/> &nbsp; 91 897 07 77 / 91 897 23 23 &emsp; 
            <FaFax/> &nbsp; 91 897 23 23
        </footer>
    )
}

export default Footer;