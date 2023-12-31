import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import airRoutes from "./routes/air.js";
import bodyParser from "body-parser";
const app = express();
const port = 3000;

dotenv.config();

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log(`Connected to DB`);
  } catch (error) {
    throw error;
  }
};
app.get("/", (req, res) => {
  res.send("ETL Pipeline");
});
app.use(express.json());
app.use(bodyParser.json());
app.use("/api/air", airRoutes);

app.listen(port, () => {
  connect();
  console.log(`Server app listening on http://localhost:${port}`);
});
