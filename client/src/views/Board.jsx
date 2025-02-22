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
			<div style={{
				backgroundColor: '#cccccc',
				padding: '20px',
				borderRadius: '5px',
				boxShadow: '0 1px 2px rgba(0,0,0,0.1)'
			}}>
				<ul style={{
					display: "grid",
					gridTemplateColumns: "repeat(3, 1fr)",
					gridGap: "10px",
					gridAutoRows: "minmax(100px, auto)",
				}}>
					<List boardId={name} />
				</ul>
			</div>
		</Layout>
	)
}

export default Board