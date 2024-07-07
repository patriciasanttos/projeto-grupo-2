import express from "express";
import router from "./src/routes";
import cors from "./src/config/cors.config";

const app = express()

app.use(express.json());
app.use(router);
app.use(cors);

app.listen(process.env.API_PORT, () => console.log('Server started'));