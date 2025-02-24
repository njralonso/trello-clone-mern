import { useState } from "react";
import { NavLink } from "react-router-dom";
import AddNewBoardSvg from "../images/icons/circle_add.svg"
import Modal from "../components/Modals/Layout/Modal";
import useGetBoards from "../hooks/useGetBoards";
import Layout from "../views/layouts/_layout"
const slugify = (text) => text.toLowerCase().replace(/\s+/g, '-');
// const unslugify = (slug) => slug.replace(/-/g, ' ');

const Boards = () => {
	// Llamamos a los boards del backend
	const { board, setRefresh } = useGetBoards()
	const [isOpen, setIsOpen] = useState(false);

	return (
		<>
			<Modal isOpen={isOpen} closeModal={() => setIsOpen(false)} setRefresh={setRefresh} />
			<Layout>
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
							{board.map((board) => (
								<ul
									key={board._id}
									className="dark:bg-custom-gray dark:text-custom-white text-center 
									hover:inset-ring-2 hover:inset-ring-custom-teal hover:dark:bg-custom-gray/20 rounded-lg"
								>
									<li>
										<NavLink className="block py-4 px-8" to={`/boards/${board._id}`} end>
											<h3>{board.title}</h3>
										</NavLink>
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