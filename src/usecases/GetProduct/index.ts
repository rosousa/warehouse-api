import { GetProductRepository } from "../../repositories/GetProductRepository/GetProductRepository";
import { GetProductController } from "./GetProduct.controller";
import { GetProductService } from "./GetProduct.service";

const getProductRepository = new GetProductRepository();
const getProductService = new GetProductService(getProductRepository);
export const getProductController = new GetProductController(getProductService);