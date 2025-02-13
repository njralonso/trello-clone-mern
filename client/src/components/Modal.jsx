import { useState } from "react"

const Modal = ({ isOpen, closeModal }) => {
	if (!isOpen) return null; // No renderiza nada si isOpen es false

	return (
		<>
			{isOpen &&
				<div className="absolute z-[99] inset-0">
					< div className="flex flex-col justify-center items-center w-full h-full" onClick={closeModal}>
						<p className="font-bold text-6xl">asdlfkjhasdflkajsdhf</p>
						<button onClick={closeModal}>Cerrar</button>
					</div >
				</div>
			}
		</>
	)
}

export default Modal