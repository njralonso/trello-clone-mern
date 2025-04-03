import { memo, useState } from "react"
import Task from "./Task"
import FormList from "./FormList"
import { useCreateList } from "../hooks/list/useCreateList"

const ListBody = memo(({ children, list }) => {
	return (
		<div key={list._id} className="bg-red-900 dark:bg-custom-dark-gray shadow-md rounded-lg p-4 mb-4">
			<h3 className="text-lg font-semibold text-custom-black dark:text-custom-white">{list.title}</h3>
			{children}
		</div>
	)
})

function ListGroup({ lists = [], onAddList, isFormVisible, onShowForm, listTitle, setListTitle }) {
	return (
		<>
			{lists.map(list => (
				<ListBody key={list._id} list={list}>
					<Task list={list} />
				</ListBody>)
			)}

			{/* Formulario o botón para agregar una nueva lista */}
			<div className="mt-4">
				{isFormVisible ? (
					<FormList
						listTitle={listTitle}
						setListTitle={setListTitle}
						handleAddList={onAddList}
					/>
				) : (
					<button
						onClick={onShowForm}
						className="gap-2 px-6 py-3 bg-custom-white text-custom-black rounded-md hover:bg-custom-gray transition-all h-min min-w-80 w-80"
					>
						Add new list
					</button>
				)}
			</div>
		</>
	)
}

const List = ({ boardId: board, lists }) => {
	const { handleCreateList } = useCreateList()
	const [isVisibleAddList, setIsVisibleAddList] = useState(false);
	const [listTitle, setListTitle] = useState("");

	const handleShowFormList = () => setIsVisibleAddList(true);

	const handleAddList = () => {
		handleCreateList({ board, listTitle })
		console.log("Nueva lista agregada:", listTitle);
		setIsVisibleAddList(false);
		setListTitle("");
	};

	return <ListGroup
		lists={lists}
		isFormVisible={isVisibleAddList}
		onShowForm={handleShowFormList}
		onAddList={handleAddList}
		listTitle={listTitle}
		setListTitle={setListTitle}
	/>
}

export default List