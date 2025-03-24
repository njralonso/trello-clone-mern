import mongoose from "mongoose"
// import dotenv from "dotenv"
// dotenv.config()
const connectDB = async () => {
	try {
<<<<<<< HEAD
		await mongoose.connect(process.env.DB_CONNECTION)
=======
		await mongoose.connect("")
>>>>>>> a7d36f48fab68147cdda6bd689ab3a36e23e3bd9
		console.log("✅ Conectado a MongoDB")
	} catch (error) {
		console.error("❌ Error al conectar a MongoDB", error)
		process.exit(1)
	}
}

export default connectDB
