const Task = ({ task }) => {
  return (
    <>
      <li className="bg-gray-100 p-3 rounded-lg shadow-sm flex justify-between items-center border border-gray-300 hover:bg-gray-200 transition-all">{task.title}</li>
    </>
  )
}

export default Task