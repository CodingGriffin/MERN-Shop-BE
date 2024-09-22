import { Router } from "express";
import landingRoute from "./api/landing.routes";
import productsRoute from "./api/products.routes";
import contactRoute from "./api/contact.routes";
import aboutRoute from "./api/about.routes";
import blogRoute from "./api/blogs.routes";

const route = Router();
route.use("/landing", landingRoute);
route.use("/products", productsRoute);
route.use("/contact", contactRoute);
route.use("/about", aboutRoute);
route.use("/blogs", blogRoute);

export default route;
