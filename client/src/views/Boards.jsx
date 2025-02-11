import { useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import Layout from "./layouts/_layout"

const slugify = (text) => text.toLowerCase().replace(/\s+/g, '-');
// const unslugify = (slug) => slug.replace(/-/g, ' ');

const Boards = () => {
	const [boards, setBoards] = useState([
		{ id: 1, name: 'Board 1' },
		{ id: 2, name: 'Board 2' },
	]);
	const [newBoard, setNewBoard] = useState('');
	const handleAddBoard = () => {
		if (newBoard) {
			setBoards([...boards, { id: boards.length + 1, name: newBoard }]);
			setNewBoard('');
		}
	};
	return (
		<Layout>
			<div style={{ fontFamily: 'Arial, sans-serif' }}>
				<header
					style={{
						backgroundColor: '#026AA7',
						color: '#fff',
						padding: '10px 20px',
						display: 'flex',
						justifyContent: 'space-between',
					}}
				>
					<button
						onClick={handleAddBoard}
						style={{
							backgroundColor: '#0079bf',
							color: '#fff',
							border: 'none',
							padding: '10px 20px',
							borderRadius: '3px',
							cursor: 'pointer',
						}}
					>
						Add Board
					</button>
				</header>

				<main style={{ padding: '20px' }}>
					<h2>Your Boards</h2>
					<div
						style={{
							display: 'grid',
							gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
							gap: '20px',
							marginTop: '20px',
						}}
					>
						{boards.map((board) => (
							<div
								key={board.id}
								style={{
									backgroundColor: '#f4f5f7',
									padding: '20px',
									borderRadius: '5px',
									boxShadow: '0 1px 2px rgba(0,0,0,0.1)',
								}}
							>
								<NavLink to={`/boards/${slugify(board.name)}`} end>
									<h3>{board.name}</h3>
								</NavLink>
							</div>
						))}
					</div>

					<div style={{ marginTop: '20px' }}>
						<input
							type="text"
							value={newBoard}
							onChange={(e) => setNewBoard(e.target.value)}
							placeholder="Enter board name"
							style={{
								padding: '10px',
								width: '100%',
								borderRadius: '5px',
								border: '1px solid #ddd',
								marginBottom: '10px',
							}}
						/>
						<button
							onClick={handleAddBoard}
							style={{
								padding: '10px 20px',
								backgroundColor: '#26a69a',
								color: '#fff',
								border: 'none',
								borderRadius: '5px',
								width: '100%',
								cursor: 'pointer',
							}}
						>
							Create Board
						</button>
					</div>
				</main>
			</div>
		</Layout>
	)
}

export default Boards