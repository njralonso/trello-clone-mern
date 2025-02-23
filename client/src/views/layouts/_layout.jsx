import Navbar from "./components/Navbar"
import SideBar from "./components/Sidebar"

const Layout = ({ children }) => {
	return (
		<>
			<Navbar />
			<div className="flex mt-16 gap-8 container justify-center mx-auto">
				<SideBar />
				{children}
			</div>
		</>
	)
}

export default Layout