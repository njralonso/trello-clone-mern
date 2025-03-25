import Layout from "./layouts/_layout"
import { useParams } from 'react-router'
import List from "../components/List"
import useGetBoardById from "../hooks/useGetBoardById"

const Board = () => {
	const { name } = useParams()
	const { board } = useGetBoardById(name);

	return (
		<Layout>
			{board &&
				<div className="flex flex-col max-w-full overflow-x-auto">
					<h1 className="dark:text-custom-white text-custom-black font-bold text-5xl mb-6 tracking-wide">
						{board.title}
					</h1>
					<List boardId={name} boardLists={board.lists} />
				</div>
			}
		</Layout>
	)
}

export default Board