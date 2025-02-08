import jwt from "jsonwebtoken"
import dotenv from "dotenv"

dotenv.config()

export const generarToken = (usuario) => {
	return jwt.sign(
		{ id: usuario._id, email: usuario.email },
		process.env.JWT_SECRET,
		{ expiresIn: "1h" }
	)
}