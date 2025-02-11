import Layout from "./layouts/_layout"
import { useParams } from 'react-router'

const Board = () => {
	const { name } = useParams()
	console.log(name)

	return (
		<Layout>
			<h1 className="bg-red-300 text-white font-semibold text-5xl">OLA K ASE {name}</h1>
		</Layout>
	)
}

export default Board