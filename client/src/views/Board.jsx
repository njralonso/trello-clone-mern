import Layout from "./layouts/_layout"
import { useParams } from 'react-router'
import List from "../components/List"
import useGetBoardById from "../hooks/useGetBoardById"

const Board = () => {
	const { name } = useParams()
	const { board } = useGetBoardById(name);

	if (!board) return <p>Cargando...</p>

	return (
		<Layout>
			<h1 className="bg-red-300 text-white font-semibold text-5xl">OLA K ASE {board.title}</h1>
			<List boardId={name} />
		</Layout>
	)
}

export default Board