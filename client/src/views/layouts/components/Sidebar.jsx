import { NavLink } from "react-router-dom"

const SideBar = () => {
  return (
    <aside
      id="logo-sidebar"
      className="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full backdrop-blur-md bg-white/20 border border-white/30 sm:translate-x-0 bg-gradient-to-r from-blue-400 to-cyan-300 via-black"
      aria-label="Sidebar"
    >
      <div className="h-full px-3 pb-4 overflow-y-auto"> {/* Elimina bg-white/dark de aquí */}
        <ul className="space-y-2 font-medium">
          <li>
            <NavLink to="/boards" end className="flex items-center p-2 text-white rounded-lg hover:bg-white/10 group"> {/* Estilos de cristal y texto blanco */}
              <svg
                className="w-5 h-5 text-gray-300 transition duration-75 group-hover:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 21"
              >
                <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
                <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
              </svg>
              <span className="ms-3">Tableros</span>
            </NavLink>
          </li>
          <li>
            <a href="#" className="flex items-center p-2 text-white rounded-lg hover:bg-white/10 group"> {/* Estilos de cristal y texto blanco */}
              <svg
                className="shrink-0 w-5 h-5 text-gray-300 transition duration-75 group-hover:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="m17.418 3.623-.018-.008a6.713 6.713 0 0 0-2.4-.569V2h1a1 1 0 1 0 0-2h-2a1 1 0 0 0-1 1v2H9.89A6.977 6.977 0 0 1 12 8v5h-2V8A5 5 0 1 0 0 8v6a1 1 0 0 0 1 1h8v4a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-4h6a1 1 0 0 0 1-1V8a5 5 0 0 0-2.582-4.377ZM6 12H4a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2Z" />
              </svg>
              <span className="flex-1 ms-3 whitespace-nowrap">Miembros</span>
              <span className="inline-flex items-center justify-center w-3 h-3 p-3 ms-3 text-sm font-medium text-blue-300 bg-blue-900 rounded-full"> {/* Ajusta colores del badge */}
                3
              </span>
            </a>
          </li>
        </ul>
      </div>
    </aside>
  );
}

export default SideBar