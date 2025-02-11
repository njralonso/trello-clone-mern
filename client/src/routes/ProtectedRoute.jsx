import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
	const token = localStorage.getItem("token");

	if (!token) {
		// Si no hay token, redirige al login
		return <Navigate to="/" />;
	}

	// Si hay token, permite el acceso a la ruta protegida
	return <Outlet />;
};

export default ProtectedRoute;