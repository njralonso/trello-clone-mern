import TrelloCloneIcon from "../../../images/icons/trello_clone_icon.svg"

const Navbar = () => {
	return (
		<nav className="w-full flex bg-custom-white dark:bg-custom-gray items-center">
			<div className="px-3 py-3 lg:px-5 lg:pl-3">
				<a href="#" className="flex font-semibold text-xl text-white items-center">
					<img className="w-8 h-8 mr-2" src={TrelloCloneIcon} alt="logo" />
					Task Manager
				</a>
			</div>
			<div className="px-3 py-3 lg:px-5 lg:pl-3">
				<li className="dark:text-custom-white list-none">
					<a
						href="#"
						className="block py-2 px-4 rounded-sm dark:hover:bg-custom-white/20">
						Espacios de trabajo
					</a>
				</li>
			</div>
		</nav>
	)
}

export default Navbar