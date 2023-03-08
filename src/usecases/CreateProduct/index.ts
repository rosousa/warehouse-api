import { CreateProductRepository } from "../../repositories/CreateProductRepository/CreateProductRepository";
import { CreateProductController } from "./CreateProduct.controller";
import { CreateProductService } from "./CreateProduct.service";

const createProductRepository = new CreateProductRepository();
const createProductService = new CreateProductService(createProductRepository);
export const createProductController = new CreateProductController(createProductService);