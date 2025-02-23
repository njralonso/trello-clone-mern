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
			<div className="flex flex-col overflow-hidden max-w-5xl">
				<h1 className="dark:text-custom-white font-semibold text-4xl mb-4">{board.title}</h1>
				<List boardId={name} />
			</div>
		</Layout>
	)
}

export default Board