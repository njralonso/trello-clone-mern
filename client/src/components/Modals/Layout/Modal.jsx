import ModalTask from "../ModalBoard";
import { useState } from "react";

const Modal = ({ isOpen, closeModal, createBoard }) => {
	if (!isOpen) return null; // No renderiza nada si isOpen es false
	const [board, setBoard] = useState("")

	const handleNewBoard = () => {
		createBoard(board)
		closeModal()
	}

	const handleBoard = (value) => {
		setBoard(value)
	}

	return (
		<>
			{isOpen && (
				<div className="absolute z-[99] inset-0 bg-[#222831]/80 flex justify-center items-center h-screen">
					<div className="bg-[#393E46] rounded-xl shadow-lg w-[90%] max-w-md p-6 text-center">
						{/* Contenido del Modal */}
						<ModalTask handleBoard={handleBoard} />
						{/* Botones */}
						<div className="flex justify-center gap-4 mt-6">
							<button
								type="button"
								onClick={handleNewBoard}
								className="text-[#EEEEEE] bg-custom-teal hover:bg-custom-teal/70 font-medium rounded-lg text-sm px-6 py-2.5 transition-all"
							>
								Crear
							</button>

							<button
								type="button"
								onClick={closeModal}
								className="text-[#EEEEEE] bg-transparent border border-[#EEEEEE] hover:bg-[#EEEEEE] hover:text-[#222831] font-medium rounded-lg text-sm px-6 py-2.5 transition-all"
							>
								Cancelar
							</button>
						</div>
					</div>
				</div>
			)}
		</>
	)
}

export default Modal