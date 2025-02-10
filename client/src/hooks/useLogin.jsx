import { useState } from "react";
import { useNavigate } from "react-router-dom";

const useLogin = async () => {
	const [home, setHome] = useState(null)
	const response = await fetch("http://localhost:3000/api/login", {
		method: "POST",
		mode: "cors",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify({ email, password })
	})
	try {
		const data = await response.json();

		if (!response.ok) {
			console.error("Error de login:", data.error);
		} else {
			localStorage.setItem('token', data.token);
			console.log("Login exitoso");
			// Guardamos el token en localStorage

			// Redirigimos al Home o cualquier ruta que desees
			setHome(navigate("/home"));  // Aquí rediriges a la página de inicio o donde sea necesario
		}
	} catch (error) {
		console.error(error)
	}

	return home
}

export default useLogin