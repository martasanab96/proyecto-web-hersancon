// server.js

const express = require('express');
const app = express();
const session = require('express-session'); // Importa la biblioteca de sesiones
const port = process.env.PORT || 3001; // Puerto en el que se ejecutará el servidor
const cors = require('cors');
const fs = require('fs');

app.use(express.json());

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

  // Función para leer el archivo JSON de usuarios
function leerUsuarios() {
  try {
    const data = fs.readFileSync('usuarios.json');
    return JSON.parse(data);
  } catch (error) {
    return { usuarios: [] };
  }
}

// Función para escribir en el archivo JSON de usuarios
function escribirUsuarios(usuarios) {
  fs.writeFileSync('usuarios.json', JSON.stringify(usuarios, null, 2));
}

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
  const { nombre, email, password } = req.body;
  const usuarios = leerUsuarios();

  // Verificar si el usuario ya existe
  const usuarioExistente = usuarios.usuarios.find((usuario) => usuario.email === email);
  if (usuarioExistente) {
    res.status(400).json({ message: 'El usuario ya existe' });
  } else {
    const nuevoUsuario = { nombre, email, password };
    usuarios.usuarios.push(nuevoUsuario);
    escribirUsuarios(usuarios);

    req.session.usuario = {
      nombre,
      email,
    };

    res.status(200).json({ message: 'Registro exitoso de ' + nombre });
    console.log(`Registro exitoso de ` + nombre);
  }
});

// Ruta para cerrar la sesión del usuario

app.get('/api/cerrar-sesion', (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      console.error('Error al cerrar la sesión:', err);
      return res.status(500).send('Error al cerrar la sesión');
    }
    // La sesión se ha eliminado correctamente
    return res.status(200).send('Sesión cerrada correctamente');
  });
})

// Ruta para iniciar sesión
app.post('/api/iniciar-sesion', (req, res) => {
  const { email, password } = req.body;
  const usuarios = leerUsuarios();
  const usuario = usuarios.usuarios.find((u) => u.email === email && u.password === password);

  if (usuario) {
    req.session.usuario = {
      nombre: usuario.nombre,
      email: usuario.email,
    };
    res.status(200).json({ message: 'Inicio de sesión exitoso' });
  } else {
    res.status(401).json({ message: 'Credenciales incorrectas' });
  }
});

app.listen(port, () => {
  console.log(`Servidor en ejecución en el puerto ${port}`);
});
