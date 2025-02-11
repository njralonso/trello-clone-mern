import express from "express"
import Usuario from "../models/userModel.js";
import dotenv from "dotenv"
import { verificarToken } from "../middleware/authMiddleware.js";
import { login, register } from "../controllers/authController.js";
import { byeUsuario, getUsuarios, nuevoUsuario, getUsuario } from "../controllers/userController.js";
dotenv.config();
const router = express.Router();



router.get('/usuarios/:id', async (req, res) => {
	try {
		const usuario = await Usuario.findById(req.params.id).select('-__v');
		if (!usuario) return res.status(404).json({ error: 'Usuario no encontrado' });
		res.json(usuario);
	} catch (error) {
		res.status(400).json({ error: 'ID no válido' });
	}
});

router.get("/perfil", verificarToken, (req, res) => {
	res.json({ mensaje: "Bienvenido a tu perfil", usuario: req.usuario });
});

// 
router.get("/usuarios", getUsuarios)
router.get("/usuario/:id", getUsuario)
router.get("/eliminar/:id", byeUsuario)
router.post("/register", register)
router.post("/login", login)

export default router