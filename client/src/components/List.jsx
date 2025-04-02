import Task from "./Task"

const List = ({ lists }) => {
	return (
		<>
			{lists && lists.map((list, i) => (
				<div key={i} className="bg-red-900 dark:bg-custom-dark-gray shadow-md rounded-lg p-4 mb-4">
					<h3 className="text-lg font-semibold text-custom-black dark:text-custom-white">{list.title}</h3>
					<Task list={list} />
				</div>
			))}
		</>
	)
}



export default List