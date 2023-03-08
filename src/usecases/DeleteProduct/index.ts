import { DeleteProductRepository } from "../../repositories/DeleteProductRepository/DeleteProductRepository";
import { DeleteProductController } from "./DeleteProduct.controller";
import { DeleteProductService } from "./DeleteProduct.service";

const deleteProductRepository = new DeleteProductRepository();
const deleteProductService = new DeleteProductService(deleteProductRepository);
export const deleteProductController = new DeleteProductController(deleteProductService);