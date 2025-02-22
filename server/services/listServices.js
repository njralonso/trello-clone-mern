import List from "../models/listModel.js";

export const createLists = async (data) => {
	return await List.create(data)
}

export const getLists = async () => {
	return await List.find()
}