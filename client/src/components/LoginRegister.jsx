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
		<section className="bg-gray-50 dark:bg-gray-900">
			<div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
				<a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
					<img className="w-8 h-8 mr-2" src={TrelloCloneIcon} alt="logo" />
					TrelloClone
				</a>
				<div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
					<div className="p-6 space-y-4 md:space-y-6 sm:p-8">
						<h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
							Iniciar Sesión
						</h1>
						<form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
							<div>
								<label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
								<input value={email} onChange={(e) => setEmail(e.target.value)} type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="tu@email.com" required="" />
							</div>
							<div>
								<label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Contraseña</label>
								<input value={password} onChange={(e) => setPassword(e.target.value)} type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
							</div>
							<div className="flex items-center justify-between">
								<div className="flex items-start">
									<div className="flex items-center h-5">
										<input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required="" />
									</div>
									<div className="ml-3 text-sm">
										<label htmlFor="remember" className="text-gray-500 dark:text-gray-300">Recordar</label>
									</div>
								</div>
								<a href="#" className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500 text-[#9266ff]">¿Has olvidado tu contraseña?</a>
							</div>
							<button type="submit" className="w-full text-white bg-[#9266ff] hover:bg-[##9266ff] focus:ring-4 focus:outline-none focus:ring-[##9266ff] font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-[##9266ff] dark:hover:bg-[##9255ff] dark:focus:ring-[##9266ff]">Entrar</button>
							<p className="text-sm font-light text-gray-500 dark:text-gray-400">
								¿Todavía no tienes una cuenta? <a href="#" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Regístrate</a>
							</p>
						</form>
					</div>
				</div>
			</div>
		</section>
	)
}

export default LoginRegister