import "dotenv/config";
import express from "express";
import { router } from "./routes/";
import db from "./config/mongo";
const PORT = process.env.PORT || 8081;
const app = express();
app.use(express.json());
app.use(router);
db().then(() => console.log("Conexion ready"));
app.listen(PORT, () => console.log(`Listening port ${PORT}`));
