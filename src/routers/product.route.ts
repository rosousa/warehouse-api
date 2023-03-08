import { Router } from "express";
import { createProductController } from "../usecases/CreateProduct";
import { getProductController } from "../usecases/GetProduct";
import { deleteProductController } from "../usecases/DeleteProduct";
import { updateProductController } from "../usecases/UpdateProduct";

export const productRoute = Router();

productRoute.post("/product", (req, res) => createProductController.handle(req, res));
productRoute.get("/product", (req, res) => getProductController.handle(req, res));
productRoute.delete("/product", (req, res) => deleteProductController.handle(req, res));
productRoute.patch("/product", (req, res) => updateProductController.handle(req, res));