import { obtenerUsuario, obtenerUsuarioPorId, crearUsuario, eliminarUsuario } from "../services/userServices.js";
import bcrypt from "bcrypt"


export const getUsuarios = async (req, res) => {
	try {
		const usuarios = await obtenerUsuario()
		res.json(usuarios)
	} catch (error) {
		res.status(500).json({ message: "Error al obtener usuarios" })
	}
}

export const getUsuario = async (req, res) => {
	try {
		const usuario = await obtenerUsuarioPorId(req.params.id)

		if (!usuario) return res.status(404).json({ error: "Usuario no encontrado" })

		res.json(usuario);

	} catch (error) {
		res.status(500).json({ error: "Error al obtener usuario" })
	}
}

export const nuevoUsuario = async (req, res) => {
	try {
		const { email, password, rePassword } = req.body
		console.log(req.body)

		if (password !== rePassword) return res.status(400).json({ message: "Las contraseñas no coinciden" })

		const salt = await bcrypt.genSalt(10)
		const passwordHash = await bcrypt.hash(password, salt)
		const userData = { email, password: passwordHash }
		const newUser = await crearUsuario(userData)
		res.status(201).json({ message: "Usuario registrado correctamente" })
	} catch (error) {
		res.status(500).json({ message: "Error al registrar usuario" })
	}
}

export const byeUsuario = async (req, res) => {
	try {
		await eliminarUsuario(req.params.id)
		res.status(201).json({ message: "Usuario eliminado" })
	} catch (error) {
		res.status(500).json({ error: "El usuario no se ha podido eliminar" })
	}
}