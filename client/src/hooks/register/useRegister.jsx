import { useState } from "react"

export const useRegister = () => {
	const [error, setError] = useState(null)
	const [loader, setLoader] = useState(false)

	const register = async (email, password, rePassword) => {
		setLoader(true)
		const response = await fetch("http://localhost:3000/api/register", {
			method: "POST",
			mode: "cors",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ email, password, rePassword })
		})
		try {
			const data = response.json()
			if (!response.ok) throw new Error(data.message || "Error en la autenticación");
		} catch (error) {
			setLoader(false)
			setError(error.message);
		}
	}

	return { register, loader, error }
}

