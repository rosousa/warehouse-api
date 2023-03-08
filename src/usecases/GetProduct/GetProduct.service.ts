import { ProductDTO } from "../../DTO/ProductDTO";
import { GetProductRepository } from "../../repositories/GetProductRepository/GetProductRepository";

export class GetProductService {
  constructor(private getProductRepository: GetProductRepository){}

  async execute(): Promise<ProductDTO[] | null> {
    const products = await this.getProductRepository.get();

    if(!products) throw new Error("Product list is empty!");

    return products;
  }
}