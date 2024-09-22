import { Router } from "express";
import productsController from "../../controllers/products.controller";

const route = Router();

route.get('/', productsController.getAll);
route.get('/:id', productsController.getOne);

export default route;
