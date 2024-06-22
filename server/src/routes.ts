import { Router } from "express";
import MainController from "./controllers/mainController";

const router = Router();
const mainController = new MainController()

router
    .get('/', mainController.get)
    .post('/', mainController.create);

export default router;