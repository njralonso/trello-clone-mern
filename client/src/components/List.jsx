import { memo, useState } from "react"
import Task from "./Task"
import FormList from "./FormList"
import { useCreateList } from "../hooks/list/useLists"
import { useGetLists } from "../hooks/list/useLists"

const ListBody = memo(({ children, list }) => {
	return (
		<div key={list._id} className="bg-red-900 dark:bg-custom-dark-gray shadow-md rounded-lg p-4 mb-4">
			<h3 className="text-lg font-semibold text-custom-black dark:text-custom-white">{list.title}</h3>
			{children}
		</div>
	)
})

function ListGroup({ lists = [], handleAddList, isFormVisible, onShowForm, listTitle, setListTitle }) {
	console.log("ListGroup", lists)
	return (
		<>
			{lists.map(list => (
				<ListBody key={list._id} list={list}>
					<Task list={list.task} />
				</ListBody>)
			)}

			{/* Formulario o botón para agregar una nueva lista */}
			<div className="mt-4">
				{isFormVisible ? (
					<FormList
						listTitle={listTitle}
						setListTitle={setListTitle}
						handleAddList={handleAddList}
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

const List = ({ lists }) => {
	console.log("List", lists)
	const { listsInfo, statusTitle, errorTitle } = useGetLists(boardId)
	console.log(listsInfo, "listsInfo")
	const { handleCreateList } = useCreateList()
	const [isVisibleAddList, setIsVisibleAddList] = useState(false);
	const [listTitle, setListTitle] = useState("");

	const handleShowFormList = () => setIsVisibleAddList(true);

	const handleAddList = () => {
		handleCreateList({ board: boardId, listTitle })
		console.log("Nueva lista agregada:", listTitle);
		setIsVisibleAddList(false);
		setListTitle("");
	};

	return <ListGroup
		lists={listsInfo}
		isFormVisible={isVisibleAddList}
		onShowForm={handleShowFormList}
		handleAddList={handleAddList}
		listTitle={listTitle}
		setListTitle={setListTitle}
	/>
}

export default List