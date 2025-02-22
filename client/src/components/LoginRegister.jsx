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
		<section className="bg-neutral-50 dark:bg-neutral-950 min-h-screen flex items-center justify-center">
			<div className="container mx-auto px-6 py-8 bg-neutral-950 rounded-xl">
				<a href="#" className="flex items-center mb-6 text-2xl font-semibold text-neutral-800 dark:text-neutral-200">
					<img className="w-8 h-8 mr-2" src={TrelloCloneIcon} alt="logo" />
					Task Manager
				</a>
				<div className="w-full rounded-lg shadow-xl backdrop-blur-lg bg-neutral-50/20 dark:bg-neutral-950/10 border border-white/30">
					<div className="p-6 space-y-4 md:space-y-6 sm:p-8">
						<h1 className="text-xl font-bold leading-tight tracking-tight text-neutral-800 dark:text-neutral-200 md:text-2xl">
							Iniciar Sesión
						</h1>
						<form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
							<div class="absolute top-[2rem] right-[2rem] flex gap-4 bg-neutral-950 dark:bg-neutral-50 py-1 px-2 rounded-xl">
								<img src="./src/images/icons/icon-light-mode.svg" alt="light_mode_icon" class="w-8" />
								<img src="./src/images/icons/icon-dark-mode.svg" alt="light_mode_icon" class="w-8" />
							</div>
							<div>
								<label htmlFor="email" className="block mb-2 text-sm font-medium text-neutral-800 dark:text-neutral-200">Email</label>
								<input
									value={email}
									onChange={(e) => setEmail(e.target.value)}
									type="email"
									name="email"
									id="email"
									className="w-full p-3 rounded-lg border border-white/20
									bg-neutral-950/10 dark:bg-neutral-50/10
									text-neutral-800 dark:text-neutral-200 
									placeholder:text-neutral-950 dark:placeholder:text-neutral-50/50"
									placeholder="tu@email.com"
									required
								/>
							</div>
							<div>
								<label htmlFor="password" className="block mb-2 text-sm font-medium text-neutral-800 dark:text-neutral-200">Contraseña</label>
								<input
									value={password}
									onChange={(e) => setPassword(e.target.value)}
									type="password"
									name="password"
									id="password"
									placeholder="••••••••"
									className="w-full p-3 rounded-lg border border-white/20
									bg-neutral-950/20 dark:bg-neutral-50/80 
									text-neutral-800 dark:text-neutral-200 
									placeholder:text-neutral-800/20 dark:placeholder:text-neutral-200/80"
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
											className="w-4 h-4 rounded focus:ring-3 focus:ring-blue-300 bg-neutral-50/30 dark:bg-neutral-950 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
										/>
									</div>
									<div className="ml-3 text-sm">
										<label htmlFor="remember" className="text-neutral-800 dark:text-neutral-200">Recordar</label>
									</div>
								</div>
								<a href="#" className="text-sm font-medium text-neutral-800 dark:text-neutral-200 hover:underline">¿Has olvidado tu contraseña?</a>
							</div>
							<button
								type="submit"
								className="w-full py-3 rounded-lg text-sm font-medium text-center 
								bg-neutral-400 dark:bg-neutral-600 
								hover:bg-neutral-950 dark:hover:bg-neutral-100/60 
								text-neutral-800 dark:text-neutral-200 
								hover:text-neutral-200 dark:hover:text-neutral-200
								transition ease-in-out duration-300"
							>
								Entrar
							</button>
							<p className="text-sm font-light text-neutral-800 dark:text-neutral-200">
								¿Todavía no tienes una cuenta? <a href="#" className="font-medium text-[#5b9ef8] hover:underline">Regístrate</a>
							</p>
						</form>
					</div>
				</div>
			</div>
		</section>
	)
}

export default LoginRegister