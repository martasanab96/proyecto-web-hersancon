// server.js

const express = require('express');
const app = express();
const session = require('express-session'); // Importa la biblioteca de sesiones
const port = process.env.PORT || 3001; // Puerto en el que se ejecutará el servidor
const cors = require('cors');

// Configura CORS para permitir solicitudes desde el dominio de tu frontend
const corsOptions = {
    origin: 'http://localhost:3000', // Reemplaza con la URL de tu frontend
    methods: 'GET,POST', // Puedes ajustar los métodos permitidos según tus necesidades
  };
  
  app.use(cors(corsOptions));
  app.use(express.json());


// Configura el middleware de sesiones
app.use(session({
    secret: 'secret_hersancon', // Reemplaza 'tu_secreto' con una cadena segura
    resave: false,
    saveUninitialized: true,
  }));

// Define tus rutas y lógica aquí

// Ruta para verificar la autenticación
app.get('/api/verificar-autenticacion', (req, res) => {
  // Verifica si el usuario tiene una sesión válida
  if (req.session && req.session.usuario) {
    // Si existe una sesión de usuario, el usuario está autenticado
    res.status(200).json({ message: 'El usuario está autenticado' });
    console.log('El usuario ' + req.session.usuario.nombre + ' está autenticado');
  } else {
    // Si no existe una sesión de usuario, el usuario no está autenticado
    res.status(401).json({ message: 'El usuario no está autenticado' });
  }
  });

// Ruta para registrarse
app.post('/api/registro', (req, res) => {

    // Accede a los datos del cuerpo de la solicitud (nombre, email, password)
    const { nombre, email, password } = req.body;

    //Guardar en base de datos

    //Guardar la sesión del usuario
    req.session.usuario = {
        nombre: nombre,
        email: email,
        // Otros datos del usuario si es necesario
    };
    res.status(200).json({ message: 'Se ha registrado de ' + nombre});
    console.log(`Registro exitoso de ` + nombre);
});

// Ruta para cerrar la sesión del usuario

app.get('/api/cerrar-sesion', (req, res) => {
    // Aquí debes implementar la lógica para cerrar la sesión del usuario.
    // Esto podría incluir la eliminación de tokens, sesiones o la invalidación de la autenticación actual.
    // Después de cerrar la sesión, envía una respuesta exitosa (por ejemplo, un código 200).
    console.log(`Sesión cerrada`);
    // Ejemplo: Cerrar la sesión y enviar una respuesta exitosa
    res.status(200).json({ message: 'Sesión cerrada exitosamente' });
  });

app.listen(port, () => {
  console.log(`Servidor en ejecución en el puerto ${port}`);
});
