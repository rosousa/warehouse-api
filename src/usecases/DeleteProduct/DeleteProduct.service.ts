import { DeleteProductRepository } from "../../repositories/DeleteProductRepository/DeleteProductRepository";
import { ProductDTO } from "../../DTO/ProductDTO";

export class DeleteProductService {
  constructor(private deleteProductRepository: DeleteProductRepository) {}

  async execute({ id }: Omit<ProductDTO, "name" | "amount">): Promise<void> {
    if(!id) throw new Error("Invalid body request!");
  
    const deletedProduct = await this.deleteProductRepository.delete({ id });

    if(!deletedProduct) throw new Error("Product doesn't exists!");
  }
}