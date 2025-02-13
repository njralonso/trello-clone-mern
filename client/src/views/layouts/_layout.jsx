import Navbar from "./components/Navbar"
import SideBar from "./components/Sidebar"

const Layout = ({ children }) => {
	return (
		<>
			<Navbar />
			<SideBar />

			<div className="p-4 sm:ml-64 mt-16 sm:mt-20">
				{children}
			</div>
		</>
	)
}

export default Layout