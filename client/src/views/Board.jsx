import Layout from "./layouts/_layout"
import { useParams } from 'react-router'
import List from "../components/List"
import useGetBoardById from "../hooks/useGetBoardById"

const Board = () => {
	const { name: boardId } = useParams()
	const { board } = useGetBoardById(boardId);

	if (!board) return null
	const { lists } = board

	return (
		<>
			{board &&
				<div className="flex flex-col max-w-full overflow-x-auto">
					<h2 className="dark:text-custom-white text-custom-black font-bold text-5xl mb-6 tracking-wide">
						{board.title}
					</h2>
					<List lists={lists} />
				</div>
			}
		</>
	)
}

const BoardView = () => {
	return (
		<Layout>
			<Board />
		</Layout>
	)
}

export default BoardView