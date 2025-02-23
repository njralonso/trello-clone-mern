import { useState } from "react"
import { useNavigate } from "react-router";
import TrelloCloneIcon from "../images/icons/trello_clone_icon.svg"

const LoginRegister = () => {
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")
	const navigate = useNavigate(); // Hook para navegar después del login

	const handleSubmit = async (e) => {
		e.preventDefault()
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
				navigate("/boards");  // Aquí rediriges a la página de inicio o donde sea necesario
			}
		} catch (error) {
			console.error(error)
		}
	}

	return (
		<div className="bg-custom-white dark:bg-custom-black min-h-screen flex flex-col justify-center items-center">
			<div className="flex items-center mb-6 text-2xl font-semibold text-neutral-800 dark:text-neutral-200">
				<img className="w-8 h-8 mr-2" src={TrelloCloneIcon} alt="logo" />
				<p>Task Manager</p>
			</div>
			<div className="container rounded-xl border-2 border-custom-teal">
				<div className="p-6 space-y-4 md:space-y-6 sm:p-8 dark:bg-custom-gray rounded-xl">
					<h1 className="text-xl font-bold leading-tight tracking-tight text-neutral-800 dark:text-custom-white md:text-2xl">
						Iniciar Sesión
					</h1>
					<form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
						<div>
							<label htmlFor="email" className="block mb-2 text-sm font-medium text-neutral-800 dark:text-custom-white">Email</label>
							<input
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								type="email"
								name="email"
								id="email"
								className="w-full p-3 rounded-lg font-semibold focus:outline-custom-teal
									bg-neutral-950/10 dark:bg-custom-white
									text-neutral-800 dark:text-custom-gray
									placeholder:text-neutral-950 dark:placeholder:text-custom-gray/60 placeholder:font-normal"
								placeholder="tu@email.com"
								required
							/>
						</div>
						<div>
							<label htmlFor="password" className="block mb-2 text-sm font-medium text-neutral-800 dark:text-custom-white">Contraseña</label>
							<input
								value={password}
								onChange={(e) => setPassword(e.target.value)}
								type="password"
								name="password"
								id="password"
								placeholder="••••••••"
								className="w-full p-3 rounded-lg font-semibold focus:outline-custom-teal
									bg-neutral-950/10 dark:bg-custom-white
									text-neutral-800 dark:text-custom-gray
									placeholder:text-neutral-950 dark:placeholder:text-custom-gray/60 placeholder:font-normal"
								required
							/>
						</div>
						<div className="flex items-center justify-between">
							<div className="flex items-start">
								<div className="flex items-center h-5">
									<input
										id="remember"
										aria-describedby="remember"
										type="checkbox"
										className="w-4 h-4 rounded focus:ring-3 focus:ring-custom-teal dark:focus:ring-custom-teal"
									/>
								</div>
								<div className="ml-3 text-sm">
									<label htmlFor="remember" className="text-custom-gray dark:text-custom-white">Recordar</label>
								</div>
							</div>
							<a href="#" className="text-sm font-medium text-custom-gray dark:text-custom-white hover:underline">¿Has olvidado tu contraseña?</a>
						</div>
						<button
							type="submit"
							className="w-full py-3 text-sm font-medium text-center hover:rounded-xl hover:font-bold transition-[border-radius] duration-200 hover:underline
								bg-custom-teal dark:bg-custom-teal
								text-neutral-800 dark:text-custom-white 
								hover:text-neutral-200 dark:hover:text-neutral-200"
						>
							Entrar
						</button>
						<p className="text-sm font-light text-custom-gray dark:text-custom-white">
							¿Todavía no tienes una cuenta? <a href="#" className="font-medium text-custom-teal hover:underline">Regístrate</a>
						</p>
					</form>
				</div>
			</div>
		</div>
	)
}

export default LoginRegister