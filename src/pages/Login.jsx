import React, { useState } from 'react';
import "../assets/Login.css";
import { Link, useNavigate} from 'react-router-dom';
import Axios from 'axios';

const Login = (
  props
) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const setIsAuthenticated = props.setIsAuthenticated;


  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = async () => {
    try {
      const response = await Axios.post('http://localhost:3001/api/iniciar-sesion', {
        email,
        password,
      });

      if (response.status === 200) {
        // Login exitoso, puedes redirigir al usuario a la página de inicio de sesión u otra página.
        navigate('/Inicio');
        setIsAuthenticated(true);
      } else {
        window.alert("Las credenciales son incorrectas.")
      }
    } catch (error) {
      // Maneja errores, por ejemplo, muestra un mensaje de error al usuario.
      console.error('Error al logearse:', error);
      window.alert("Las credenciales son incorrectas.")
    }
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
        ¿No tienes una cuenta? <Link to="/Registro" >Regístrate</Link>
      </div>
    </div>
  );
}

export default Login;
