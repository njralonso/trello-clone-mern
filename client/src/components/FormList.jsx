const FormList = ({ listTitle, setListTitle, handleAddList }) => {
	return (
		<form className="min-w-80 w-80 flex flex-col items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 transition-all h-min">
			<input
				onChange={(e) => setListTitle(e.target.value)}
				value={listTitle}
				type="text"
				placeholder="Escribe el nombre de la lista..."
				className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
			/>
			<div className="flex gap-2 mt-3 justify-center">
				<button
					type="button"
					onClick={handleAddList}
					className="bg-emerald-500 text-white px-4 py-1.5 rounded-md hover:bg-emerald-600 transition-all font-semibold text-[0.8em]"
				>
					Agregar lista
				</button>
				<button
					type="button"
					className="p-2 text-gray-500 hover:text-gray-800 border border-gray-400 rounded-md px-4 py-1.5 font-semibold"
				>
					Cancelar ❌
				</button>
			</div>
		</form>
	)
}

export default FormList