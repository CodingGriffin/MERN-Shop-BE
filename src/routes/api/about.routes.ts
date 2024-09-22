import { Router } from "express";
import aboutController from "../../controllers/about.controller";

const route = Router();

route.get('/', aboutController.about);

export default route;
