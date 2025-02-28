import Usuario from "../models/userModel.js"

export const obtenerUsuario = async () => {
	return await Usuario.find()
}

export const obtenerUsuarioPorId = async (id) => {
	return await Usuario.findById(id)
}

export const crearUsuario = async (data) => {
	console.log(data)
	return await Usuario.create(data)
}

export const eliminarUsuario = async (id) => {
	return await Usuario.findByIdAndDelete(id)
}