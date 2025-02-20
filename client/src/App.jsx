import './App.css'
import Login from './views/Login'
import Home from './views/Home'
import Boards from './views/Boards'
import Board from './views/Board'
import { Routes, Route } from "react-router";
import ProtectedRoute from './routes/ProtectedRoute';
import { HTML5Backend } from 'react-dnd-html5-backend'
import { DndProvider } from "react-dnd"

function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/home" element={<Home />} />
          <Route path="/boards" element={<Boards />} />
          <Route path="/boards/:name" element={<Board />} />
        </Route>
      </Routes>
    </DndProvider>

  )
}

export default App
