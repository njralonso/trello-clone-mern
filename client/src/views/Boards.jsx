import { useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import Layout from "./layouts/_layout"
import AddNewBoardSvg from "../images/icons/circle_add.svg"
import Modal from "../components/Modals/Layout/Modal";
import useGetBoards from "../hooks/useGetBoards";

const slugify = (text) => text.toLowerCase().replace(/\s+/g, '-');
// const unslugify = (slug) => slug.replace(/-/g, ' ');

const Boards = () => {
	// Llamamos a los boards del backend
	const board = useGetBoards()

	const [isOpen, setIsOpen] = useState(false);

	return (
		<Layout>
			<Modal isOpen={isOpen} closeModal={() => setIsOpen(false)} />
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
					<h2>Your Boards</h2>
				</header>
				<main style={{ padding: '20px' }}>
					<div
						style={{
							display: 'grid',
							gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
							gap: '20px',
							marginTop: '20px',
						}}
					>
						<div>
							<div style={{
								backgroundColor: '#f4f5f7',
								padding: '20px',
								borderRadius: '5px',
								boxShadow: '0 1px 2px rgba(0,0,0,0.1)'
							}}
								onClick={() => setIsOpen(true)}
							>
								<img src={AddNewBoardSvg} alt="add_new_board" className="mx-auto" />
							</div>
						</div>
						{board.map((board) => (
							<div
								key={crypto.randomUUID()}
								style={{
									backgroundColor: '#f4f5f7',
									padding: '20px',
									borderRadius: '5px',
									boxShadow: '0 1px 2px rgba(0,0,0,0.1)'
								}}
							>
								<NavLink to={`/boards/${slugify(board.title)}`} end>
									<h3>{board.title}</h3>
								</NavLink>
							</div>
						))}
					</div>
				</main>
			</div>
		</Layout>
	)
}

export default Boards