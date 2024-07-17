import { Router } from "express";
import MainController from "./controllers/mainController";

const router = Router();
const mainController = new MainController()

router
    .get('/:cnpj', mainController.checkFirstSubmitByCNPJ)
    .post('/', mainController.saveCompanyAndCalc)
    .patch('/', mainController.ratingService);

export default router;