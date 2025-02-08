import jwt from "jsonwebtoken"

export const verificarToken = (req, res, next) => {
	const token = req.header("Authorization")
	if (!token) return res.status(401).json({ error: "Acceso denegado, token requerido" })
	try {
		const tokenLimpio = token.startsWith("Bearer ") ? token.split(" ")[1] : token
		const decoded = jwt.verify(tokenLimpio, process.env.JWT_SECRET)
		req.usuario = decoded
		next()
	} catch (error) {
		res.status(403).json({ error: "Token inválido o expirado" })
	}
}