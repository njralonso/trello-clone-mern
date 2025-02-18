import { useSearchParams } from "react-router-dom";
import ModalTask from "../ModalBoard";
import { useState } from "react";
import useNewBoard from "../../../hooks/useNewBoard";

const Modal = ({ isOpen, closeModal }) => {
	if (!isOpen) return null; // No renderiza nada si isOpen es false
	const [board, setBoard] = useState([])

	const handleNewBoard = () => {
		useNewBoard(board)
	}

	const handleBoard = (value) => {
		setBoard(value)
		// console.log(board)
	}

	return (
		<>
			{isOpen &&
				<div className="absolute z-[99] inset-0">
					<div className="flex flex-col justify-center items-center w-full h-full">
						<ModalTask handleBoard={handleBoard} />
						<div className="flex">
							<button type="button" onClick={handleNewBoard} className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Crear</button>

							<button type="button" onClick={closeModal} className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Light</button>
						</div>

					</div>
				</div>
			}
		</>
	)
}

export default Modal