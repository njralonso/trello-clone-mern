import { obtenerUsuario, obtenerUsuarioPorId, crearUsuario, eliminarUsuario } from "../services/userServices.js";


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
		const usuario = await crearUsuario(req.body)
		res.status(201).json(usuario)
	} catch (error) {
		res.status(500).json({ message: "Error al crear usuario" })
	}
}

export const byeUsuario = async (req, res) => {
	try {
		console.log(req)
		await eliminarUsuario(req.params.id)
		res.status(201).json({ message: "Usuario eliminado" })
	} catch (error) {
		res.status(500).json({ error: "El usuario no se ha podido eliminar" })
	}
}