import './App.css'
import Login from './views/Login'
import Home from './views/Home'
import Boards from './views/Boards'
import BoardView from './views/Board'
import { Routes, Route } from "react-router";
import ProtectedRoute from './routes/ProtectedRoute';
import Register from './components/Register'


function App() {
	return (
		<Routes>
			<Route path="/register" element={<Register />} />
			<Route path="/" element={<Login />} />
			<Route element={<ProtectedRoute />}>
				<Route path="/home" element={<Home />} />
				<Route path="/boards" element={<Boards />} />
				<Route path="/boards/:name" element={<BoardView />} />
			</Route>
		</Routes>
	)
}

export default App
