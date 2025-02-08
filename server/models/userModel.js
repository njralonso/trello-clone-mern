import mongoose from "mongoose"

const usuarioSchema = new mongoose.Schema({
	name: { type: String, required: true },
	email: { type: String, required: true },
	password: { type: String, required: true }, // 🔹 Agregamos el campo password
	age: { type: Number, required: true }
})

const Usuario = mongoose.model("Usuario", usuarioSchema)

export default Usuario