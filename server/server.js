import dotenv from "dotenv";
dotenv.config()
const PORT = process.env.PORT || 5000;

import express from "express"
import connectDB from "./config/db.js"
import usuariosRoutes from "./routes/usuarios.js"
import boardRoutes from "./routes/boards.js"

const app = express()
// Middleware para manejar las solicitudes preflight (OPTIONS) de CORS
app.use((req, res, next) => {
	// Aceptar solicitudes desde un origen específico (por ejemplo, el frontend en http://localhost:3001)
	res.header('Access-Control-Allow-Origin', 'http://localhost:5173'); // Cambia esto a la URL de tu frontend
	res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS'); // Métodos permitidos
	res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization'); // Cabeceras permitidas

	// Si la solicitud es preflight (OPTIONS), respondemos directamente con un 204 sin continuar con la ruta
	if (req.method === 'OPTIONS') {
		return res.status(204).end();
	}

	next();
});

app.get("/home", (req, res) => {
	res.send("Bienvenido a la página de inicio");
	console.log("Esto es el /home")
});
connectDB()
app.use(express.json())
app.use("/api", usuariosRoutes)
app.use("/api", boardRoutes)

app.listen(PORT, () => {
	console.log(`Servidor corriendo en http://localhost:${PORT}`)
})