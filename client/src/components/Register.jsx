import { useState } from 'react';
import TrelloCloneIcon from "../images/icons/trello_clone_icon.svg"
import { useRegister } from '../hooks/register/useRegister';
import { useNavigate, NavLink } from "react-router";

const Register = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [rePassword, setRePassword] = useState('');
	const { register, loader, error } = useRegister(email, password, rePassword)
	const navigate = useNavigate(); // Hook para navegar después del login

	const validate = async () => {
		if (!email.includes("@")) return
		const newUserData = await register(email, password, rePassword)
		navigate("/")
	}

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log('Email:', email);
		console.log('Password:', password);
		console.log("rePassword", rePassword)
		validate()
	};

	return (
		<div className="bg-custom-white dark:bg-custom-black min-h-screen flex flex-col justify-center items-center">
			<div className="flex items-center mb-6 text-2xl font-semibold text-neutral-800 dark:text-neutral-200">
				<img className="w-8 h-8 mr-2" src={TrelloCloneIcon} alt="logo" />
				<p>Task Manager</p>
			</div>
			<div className="container rounded-xl border-2 border-custom-teal">
				<div className="p-6 space-y-4 md:space-y-6 sm:p-8 dark:bg-custom-gray rounded-xl">
					<h1 className="text-xl font-bold leading-tight tracking-tight text-neutral-800 dark:text-custom-white md:text-2xl">
						Registro
					</h1>
					<form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
						<div>
							<label htmlFor="email" className="block mb-2 text-sm font-medium text-neutral-800 dark:text-custom-white">
								Email
							</label>
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
							<label htmlFor="password" className="block mb-2 text-sm font-medium text-neutral-800 dark:text-custom-white">
								Contraseña
							</label>
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
						<div>
							<label htmlFor="rePassword" className="block mb-2 text-sm font-medium text-neutral-800 dark:text-custom-white">
								Confirmar Contraseña
							</label>
							<input
								value={rePassword}
								onChange={(e) => setRePassword(e.target.value)}
								type="password"
								name="confirmPassword"
								id="confirmPassword"
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
										id="agree"
										aria-describedby="agree"
										type="checkbox"
										className="w-4 h-4 rounded focus:ring-3 focus:ring-custom-teal dark:focus:ring-custom-teal"
										required
									/>
								</div>
								<div className="ml-3 text-sm">
									<label htmlFor="agree" className="text-custom-gray dark:text-custom-white">
										Acepto los términos y condiciones
									</label>
								</div>
							</div>
						</div>
						{!loader ? (
							<button
								type="submit"
								className="w-full py-3 text-sm font-medium text-center hover:rounded-xl hover:font-bold transition-[border-radius] duration-200 hover:underline
                bg-custom-teal dark:bg-custom-teal
                text-neutral-800 dark:text-custom-white 
                hover:text-neutral-200 dark:hover:text-neutral-200"
							>
								Registrarse
							</button>
						) : (
							<button
								type="submit"
								className="w-full py-3 text-sm font-medium text-center hover:rounded-xl hover:font-bold transition-[border-radius] duration-200 hover:underline
                bg-custom-teal dark:bg-custom-teal
                text-neutral-800 dark:text-custom-white 
                hover:text-neutral-200 dark:hover:text-neutral-200
								flex justify-center items-center gap-4"
							>
								<p>Cargando...</p>
							</button>
						)}
						<p className="text-sm font-light text-custom-gray dark:text-custom-white">
							¿Ya tienes una cuenta? <NavLink className="font-medium text-custom-teal hover:underline" to="/"> Inicia sesión</NavLink>
						</p>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Register;
