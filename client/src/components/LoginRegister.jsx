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
    <section className="bg-gradient-to-r from-blue-400 to-cyan-300 via-black min-h-screen flex items-center justify-center">
      <div className="container mx-auto px-6 py-8">
        <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-white">
          <img className="w-8 h-8 mr-2" src={TrelloCloneIcon} alt="logo" />
          Task Manager
        </a>
        <div className="w-full rounded-lg shadow-xl backdrop-blur-lg bg-white/10 border border-white/30">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-white md:text-2xl">
              Iniciar Sesión
            </h1>
            <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-white">Email</label>
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  name="email"
                  id="email"
                  className="w-full p-3 rounded-lg focus:ring-blue-500 focus:border-blue-500 backdrop-blur-sm bg-white/10 border border-white/20 text-white placeholder-white/70"
                  placeholder="tu@email.com"
                  required
                />
              </div>
              <div>
                <label htmlFor="password" className="block mb-2 text-sm font-medium text-white">Contraseña</label>
                <input
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className="w-full p-3 rounded-lg focus:ring-blue-500 focus:border-blue-500 backdrop-blur-sm bg-white/10 border border-white/20 text-white placeholder-white/70"
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
                      className="w-4 h-4 rounded bg-white/30 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor="remember" className="text-white">Recordar</label>
                  </div>
                </div>
                <a href="#" className="text-sm font-medium text-white hover:underline text-[#5b9ef8]">¿Has olvidado tu contraseña?</a>
              </div>
              <button
                type="submit"
                className="w-full py-3 rounded-lg text-sm font-medium text-center bg-[#5b9ef8]/80 hover:bg-[#5b9ef8]/90 text-white transition ease-in-out duration-300"
              >
                Entrar
              </button>
              <p className="text-sm font-light text-white">
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