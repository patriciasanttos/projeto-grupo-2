import express from "express";
import MainController from "./src/controllers/MainController";

const app = express()
const mainController = new MainController()

app.use(express.json());

app.get('/', mainController.get)

app.listen(4444, () => console.log('Server started'));