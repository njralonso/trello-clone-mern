import { useState } from "react";
import { NavLink } from "react-router-dom";
import AddNewBoardSvg from "../images/icons/circle_add.svg"
import Modal from "../components/Modals/Layout/Modal";
import { useGetBoards, useCreateBoard, useDeleteBoard } from "../hooks/useBoard";
import Layout from "../views/layouts/_layout"

const Boards = () => {
	// Llamamos a los boards del backend
	const { boards } = useGetBoards()
	const { createBoard } = useCreateBoard()
	const { deleteBoard } = useDeleteBoard()
	const [isOpen, setIsOpen] = useState(false);

	console.log(boards, "componente Boards")

	return (
		<>
			<Layout>
				<Modal isOpen={isOpen} closeModal={() => setIsOpen(false)} createBoard={createBoard} />
				<section className="dark:bg-custom-black w-full">
					<div className="container">
						<div
							style={{
								display: 'grid',
								gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
								gap: '20px',
							}}
						>
							<div>
								<div className="dark:bg-custom-gray dark:text-custom-white text-center 
									hover:inset-ring-2 hover:inset-ring-custom-teal dark:hover:bg-custom-gray/20 rounded-lg h-full flex justify-center items-center gap-4 cursor-pointer"
									onClick={() => setIsOpen(true)}
								>
									<p>New board</p>
									<img src={AddNewBoardSvg} alt="add_new_board" className="size-8 h-full" />
								</div>
							</div>
							{boards.map((board, i) => (
								<ul
									key={i}
									className="dark:bg-custom-gray dark:text-custom-white text-center 
									hover:ring-2 hover:ring-custom-teal hover:dark:bg-custom-gray/20 rounded-lg overflow-hidden"
								>
									<li className="bg-blue-900 flex">
										<NavLink to={`/boards/${board._id}`} className="block w-full h-full">
											<h3 className="p-2">{board.title}</h3>
										</NavLink>
										<button onClick={() => deleteBoard(board._id)} className="p-1 rounded-md">❌</button>
									</li>
								</ul>
							))}
						</div>
					</div>
				</section>
			</Layout >
		</>
	)
}

export default Boards