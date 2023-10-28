import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "../assets/Registro.css";
import Axios from 'axios'; // Importa Axios para hacer solicitudes HTTP

const Registro = (props) => {

    
  const setIsAuthenticated = props.setIsAuthenticated;
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleNombreChange = (e) => {
    setNombre(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const navigate = useNavigate();

  const handleRegistro = async () => {
    try {
      const response = await Axios.post('http://localhost:3001/api/registro', {
        nombre,
        email,
        password,
      });

      if (response.status === 200) {
        // Registro exitoso, puedes redirigir al usuario a la página de inicio de sesión u otra página.
        window.alert('Registro exitoso.');
        navigate('/Inicio');
        setIsAuthenticated(true);
      }
    } catch (error) {
      // Maneja errores, por ejemplo, muestra un mensaje de error al usuario.
      console.error('Error al registrar:', error);
    }
  };

  return (
    <div className="registro-container">
      <h1>Registrarse</h1>
      <form>
        <div className="form-group">
          <label htmlFor="nombre">Nombre</label>
          <input
            type="text"
            id="nombre"
            value={nombre}
            onChange={handleNombreChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Contraseña</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <button type="button" onClick={handleRegistro}>
          Registrarse
        </button>
      </form>
      <div className="message">
        ¿Ya tienes una cuenta? <Link to="/Login">Iniciar Sesión</Link>
      </div>
    </div>
  );
}

export default Registro;
