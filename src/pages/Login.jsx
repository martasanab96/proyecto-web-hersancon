import React, { useState } from 'react';
import "../assets/Login.css";
import { Link} from 'react-router-dom';
import Axios from 'axios';

const Login = (
  props
) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = () => {
    
    // Aquí puedes agregar la lógica de autenticación, como enviar los datos a un servidor o verificar en el cliente.
    // Por ahora, solo mostramos los datos en la consola.
    console.log('Email:', email);
    console.log('Contraseña:', password);
  };

  return (
    <div className="login-container">
      <h1>Iniciar Sesión</h1>
      <form>
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
        <button type="button" onClick={handleLogin}>
          Iniciar Sesión
        </button>
      </form>
      <div className='message'>
        ¿No tienes una cuenta? <Link to="/Registro" {...props}>Regístrate</Link>
      </div>
    </div>
  );
}

export default Login;
