import { useAppSelector } from "../../hooks"
import { allTitles } from "../../feature/lists/listSlice"

export function useLists() {
	const listsTitle = useAppSelector(allTitles)
	const statusTitle = useAppSelector((state) => state.lists.status)
	const errorTitle = useAppSelector((state) => state.lists.error)

	return { listsTitle, statusTitle, errorTitle }
}
