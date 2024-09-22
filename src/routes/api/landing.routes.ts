import { Router } from "express";
import landingController from "../../controllers/landing.controller";

const route = Router();

route.get('/', landingController.index);

export default route;
