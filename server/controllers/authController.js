import bcrypt from "bcrypt"
import Usuario from "../models/userModel.js"
import { generarToken } from "../utils/jwtUtils.js"

export const login = async (req, res) => {
	try {
		const { email, password } = req.body
		const usuario = await Usuario.findOne({ email })
		if (!usuario) return res.status(401).json({ error: "Usuario no encontrado" })

		const esValida = await bcrypt.compare(password, usuario.password)
		if (!esValida) return res.status(401).json({ error: "Contraseña incorrecta" })

		const token = generarToken(usuario)
		res.json({ token })
	} catch (error) {
		console.log(error)
		res.status(500).json({ error: "Error en el servidor" })
	}
}

export const register = async (req, res) => {
	try {
		const { name, email, password, rePassword } = req.body
		const usuarioExistente = await Usuario.findOne({ email })

		if (usuarioExistente) return res.status(400).json({ message: "El email ya esta registrado" })
		if (password !== rePassword) return res.status(400).json({ message: "Las contraseñas no coinciden" })

		const salt = await bcrypt.genSalt(10)
		const passwordHash = await bcrypt.hash(password, salt)
		const nuevoUsuario = new Usuario({ name, email, password: passwordHash, age })
		await nuevoUsuario.save()
		res.status(201).json({ message: "Usuario registrado correctamente" })
	} catch (error) {
		res.status(500).json({ message: "Error al registrar usuario" })
	}
}