import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import productRoutes from "./Routes/productRoutes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use("/api", productRoutes);
app.use(cors());

mongoose
	.connect(process.env.MONGO_URI, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() => console.log("MongoDB Connected"))
	.catch(err => console.error("MongoDB Connection Error:", err));

app.get("/", (req, res) => {
	res.send("API is running...");
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
