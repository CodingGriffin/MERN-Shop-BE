import { Router } from "express";
import contactController from "../../controllers/contact.controller";

const route = Router();

route.post('/', contactController.snedMessage);

export default route;
