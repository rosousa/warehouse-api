import { UpdateProductRepository } from "../../repositories/UpdateProductRepository/UpdateProductRepository";
import { UpdateProductController } from "./UpdateProduct.controller";
import { UpdateProductService } from "./UpdateProduct.service";

const updateProductRepository = new UpdateProductRepository();
const updateProductService = new UpdateProductService(updateProductRepository);
export const updateProductController = new UpdateProductController(updateProductService);