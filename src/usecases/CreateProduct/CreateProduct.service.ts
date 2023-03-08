import { ProductDTO } from "../../DTO/ProductDTO";
import { CreateProductRepository } from "../../repositories/CreateProductRepository/CreateProductRepository";

export class CreateProductService {
  constructor(private createProductRepository: CreateProductRepository) {}

  execute({ name, amount }: ProductDTO): void {
    if(!name || !amount) throw new Error("Invalid body request!");

    this.createProductRepository.create({ name, amount });
  }
}