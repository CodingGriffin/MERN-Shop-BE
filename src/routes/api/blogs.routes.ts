import { Router } from "express";
import blogController from "../../controllers/blogs.controller";

const route = Router();

route.get('/', blogController.getAll);

export default route;
