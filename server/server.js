import dotenv from "dotenv";
dotenv.config()
const PORT = process.env.PORT || 5000;

import express from "express"
// import path from "node:path"
// import { fileURLToPath } from "node:url"
// import { body, validationResult } from "express-validator"
import connectDB from "./config/db.js"
import usuariosRoutes from "./routes/usuarios.js"

const app = express()
connectDB()
app.use(express.json())
app.use("/api", usuariosRoutes)
// const __filename = fileURLToPath(import.meta.url)
// const __dirname = path.dirname(__filename)
// app.use(express.static(path.join(__dirname, "public")))
// const topSecret = function (req, res, next) {
// 	const { clave } = req.query
// 	if (clave !== "secreta") {
// 		return res.status(403).send("Acceso denegado: Clave incorrecta o no proporcionada")
// 	}
// 	next()
// }
// const testMiddleware = function (req, res, next) {
// 	req.testMiddleware = "ola k ase"
// 	next()
// }
// const dashboardCheck = function (req, res, next) {
// 	const { auth } = req.query
// 	if (auth !== "true") {
// 		res.status(403).send("No pue entrarl")
// 	}
// 	next()
// }
// const expressValidator = [
// 	body("name").notEmpty().withMessage("El nombre es obligatorio"),
// 	body("email").isEmail().withMessage("El email debe ser válido"),
// 	body("age").isInt({ min: 18 }).withMessage("Debes ser mayor de edad")
// ]
// app.use(testMiddleware)
// app.use((req, res, next) => {
// 	console.log(req.ip)
// 	next()
// })
// app.use("/dashboard", dashboardCheck)

// app.post("/register", expressValidator, (req, res) => {
// 	const errors = validationResult(req);
// 	if (!errors.isEmpty()) {
// 		return res.status(400).json({ errors: errors.array() });
// 	}
// 	res.send('Registro exitoso');
// })

// app.get("/dashboard", (req, res) => {
// 	res.send("Welcome to the area 51")
// })
// app.get("/dashboard/profile", (req, res) => {
// 	res.send("Welcome to the area 51")
// })

// app.post("/submit", (req, res) => {
// 	const { name, email } = req.body
// 	console.log(req.body)
// 	res.send(`Formulario recibido ${name}, ${email}`)
// })

// app.get("/search", (req, res) => {
// 	const { age, name } = req.query
// 	console.log(req.query)
// 	res.send(`Buscando a ${name} de ${age} años`)
// 	let data = req.testMiddleware
// 	res.send(data)
// })

// app.post("/profile", (req, res) => {
// 	const { nombre, edad, correo } = req.body
// 	console.log(nombre, edad, correo)
// 	res.json(`El perfil de ${nombre} ha sido recibido correctamente`)
// })

// app.get("/info", (req, res) => {
// 	const info = { name: "Juan", age: 30 };
// 	res.json(info); // Enviar datos como JSON
// });

// app.post("/data", (req, res) => {
// 	console.log(req.body)
// 	res.send({ message: "Datos recibidos" })
// })

// app.get("/", (req, res) => {
// 	res.sendFile(path.join(__dirname, "public", "index.html"));
// });

// app.get("/admin", topSecret, (req, res) => {
// 	res.send("Bienvenido al área de administración");
// })

// app.get("/producto/:id", (req, res) => {
// 	console.log(req)
// 	const { id } = req.params
// 	console.log(id)
// 	res.send(id)
// })

// app.get("/calculadora", (req, res) => {
// 	const { a, b } = req.query
// 	console.log(req.query)
// 	res.send(a + b)
// })

app.listen(PORT, () => {
	console.log(`Servidor corriendo en http://localhost:${PORT}`)
})