import './App.css'
import Login from './components/Login'
import Home from './components/Home'
import { Routes, Route } from "react-router";
import ProtectedRoute from './components/ProtectedRoute';

function App() {
	return (
		<Routes>
			<Route path="/" element={<Login />} />
			<Route element={<ProtectedRoute />}>
				<Route path="/home" element={<Home />} />
			</Route>
		</Routes>
	)
}

export default App
