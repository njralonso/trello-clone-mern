import { useState } from "react";
import { NavLink } from "react-router-dom";
import AddNewBoardSvg from "../images/icons/circle_add.svg"
import Modal from "../components/Modals/Layout/Modal";
import useGetBoards from "../hooks/useGetBoards";

const slugify = (text) => text.toLowerCase().replace(/\s+/g, '-');
// const unslugify = (slug) => slug.replace(/-/g, ' ');

const Boards = () => {
	// Llamamos a los boards del backend
	const { board } = useGetBoards()
	const [isOpen, setIsOpen] = useState(false);

	return (
		<>
			<Modal isOpen={isOpen} closeModal={() => setIsOpen(false)} />
			<section style={{ fontFamily: 'Arial, sans-serif' }}>
				<div style={{ padding: '20px' }}>
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
								key={board._id}
								style={{
									backgroundColor: '#f4f5f7',
									padding: '20px',
									borderRadius: '5px',
									boxShadow: '0 1px 2px rgba(0,0,0,0.1)'
								}}
							>
								<NavLink to={`/boards/${board._id}`} end>
									<h3>{board.title}</h3>
								</NavLink>
							</div>
						))}
					</div>
				</div>
			</section>
		</>
	)
}

export default Boards